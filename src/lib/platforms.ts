import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { load as yamlLoad } from 'js-yaml';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

const PLATFORMS_DIR = path.join(process.cwd(), 'platform-content');

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PlatformMeta {
  title: string;
  metaDescription: string;
  /** Slug as written in metadata.yaml, e.g. "/outlier-ai-review-guide" */
  slug: string;
  /** Slug segment without leading slash, used as route param */
  slugSegment: string;
  ogDescription: string;
  platform: string;
  category: string;
  lastReviewed: string;
  readingTime: string;
  tags: string[];
  searchKeywords: string[];
  difficulty: string;
  remote: boolean;
  interviewType: string;
  payRange: string;
  featured: boolean;
  /** The folder name inside platform-content/, e.g. "outlier" */
  folderName: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number; // 1, 2, or 3
}

export interface InternalLinks {
  relatedPlatformGuides: string[];
  relatedCareerGuides: string[];
  relatedComparisonPages: string[];
  relatedResourcePages: string[];
}

export interface PlatformGuide {
  meta: PlatformMeta;
  contentHtml: string;
  toc: TocItem[];
  schemaJson: object[];
  internalLinks: InternalLinks;
}

// ---------------------------------------------------------------------------
// Private helpers
// ---------------------------------------------------------------------------

function getPlatformFolders(): string[] {
  return fs.readdirSync(PLATFORMS_DIR).filter((name) => {
    const fullPath = path.join(PLATFORMS_DIR, name);
    try {
      return fs.statSync(fullPath).isDirectory();
    } catch {
      return false;
    }
  });
}

function parseMetadata(folderName: string): PlatformMeta {
  const yamlPath = path.join(PLATFORMS_DIR, folderName, 'metadata.yaml');
  const raw = fs.readFileSync(yamlPath, 'utf8');
  const parsed = yamlLoad(raw) as Record<string, unknown>;

  const slug = (parsed.slug as string) ?? `/${folderName}`;
  const slugSegment = slug.startsWith('/') ? slug.slice(1) : slug;

  return {
    title: (parsed.title as string) ?? '',
    metaDescription: (parsed.metaDescription as string) ?? '',
    slug,
    slugSegment,
    ogDescription: (parsed.ogDescription as string) ?? '',
    platform: (parsed.platform as string) ?? '',
    category: (parsed.category as string) ?? 'AI Evaluation Platform',
    lastReviewed: (parsed.lastReviewed as string) ?? '',
    readingTime: (parsed.readingTime as string) ?? '',
    tags: (parsed.tags as string[]) ?? [],
    searchKeywords: (parsed.searchKeywords as string[]) ?? [],
    difficulty: (parsed.difficulty as string) ?? 'Unknown',
    remote: (parsed.remote as boolean) ?? true,
    interviewType: (parsed.interviewType as string) ?? 'Unknown',
    payRange: (parsed.payRange as string) ?? 'Unknown',
    featured: (parsed.featured as boolean) ?? false,
    folderName,
  };
}

/**
 * Extracts heading items from raw Markdown text for building a Table of Contents.
 * Only H1/H2/H3 per template spec.
 */
function extractToc(markdown: string): TocItem[] {
  const toc: TocItem[] = [];
  for (const line of markdown.split('\n')) {
    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      // Replicate rehype-slug's id generation (lowercase, strip non-alphanumeric, collapse spaces to dashes)
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      toc.push({ id, text, level });
    }
  }
  return toc;
}

/**
 * Parses internal-links.md into structured sections.
 */
function parseInternalLinks(folderName: string): InternalLinks {
  const filePath = path.join(PLATFORMS_DIR, folderName, 'internal-links.md');
  const raw = fs.readFileSync(filePath, 'utf8');
  const sections: Record<string, string[]> = {};
  let currentSection = '';

  for (const line of raw.split('\n')) {
    if (line.startsWith('## ')) {
      currentSection = line.replace(/^## /, '').trim();
      sections[currentSection] = [];
    } else if (line.startsWith('- ') && currentSection) {
      sections[currentSection].push(line.replace(/^- /, '').trim());
    }
  }

  return {
    relatedPlatformGuides: sections['Related Platform Guides'] ?? [],
    relatedCareerGuides: sections['Related Career Guides'] ?? [],
    relatedComparisonPages: sections['Related Comparison Pages'] ?? [],
    relatedResourcePages: sections['Related Resource Pages'] ?? [],
  };
}

/**
 * Converts Markdown (body only, no frontmatter) → HTML string.
 * Pipeline: remark-parse → remark-gfm → remark-rehype → rehype-slug → rehype-stringify
 */
async function markdownToHtml(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);
  return result.toString();
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Returns metadata for all platforms, sorted alphabetically by platform name.
 * Called at build time — safe to use fs.
 */
export async function getAllPlatforms(): Promise<PlatformMeta[]> {
  const folders = getPlatformFolders();
  const metas = folders.map((folder) => parseMetadata(folder));
  return metas.sort((a, b) => a.platform.localeCompare(b.platform));
}

/**
 * Returns all slug segments for use in generateStaticParams().
 */
export async function getAllPlatformSlugs(): Promise<string[]> {
  const platforms = await getAllPlatforms();
  return platforms.map((p) => p.slugSegment);
}

/**
 * Returns a fully resolved PlatformGuide for a given slug segment.
 * Returns null if no matching platform is found.
 */
export async function getPlatformBySlug(slugSegment: string): Promise<PlatformGuide | null> {
  const folders = getPlatformFolders();

  let targetFolder: string | null = null;
  let meta: PlatformMeta | null = null;

  for (const folder of folders) {
    const m = parseMetadata(folder);
    if (m.slugSegment === slugSegment) {
      targetFolder = folder;
      meta = m;
      break;
    }
  }

  if (!targetFolder || !meta) return null;

  // Parse guide.md — strip frontmatter, keep body only
  const guidePath = path.join(PLATFORMS_DIR, targetFolder, 'guide.md');
  const rawGuide = fs.readFileSync(guidePath, 'utf8');
  const { content } = matter(rawGuide);

  // Extract TOC from raw markdown before HTML conversion
  const toc = extractToc(content);

  // Convert markdown body → HTML
  const contentHtml = await markdownToHtml(content);

  // Load schema.json verbatim (source of truth — never modified)
  const schemaPath = path.join(PLATFORMS_DIR, targetFolder, 'schema.json');
  const schemaJson = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) as object[];

  // Parse internal links
  const internalLinks = parseInternalLinks(targetFolder);

  return { meta, contentHtml, toc, schemaJson, internalLinks };
}
