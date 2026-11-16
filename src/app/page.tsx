import { getAllPlatforms } from '@/lib/platforms';
import HomePageClient, { HomePlatformHighlight } from '@/components/HomePageClient';

/* Homepage. Platform cards read pay and difficulty from platform-content
 * metadata, the same data the guides page uses. */

// Folder names in platform-content/, in display order.
const HIGHLIGHTED_PLATFORMS = ['dataannotation', 'outlier', 'alignerr'];

export default async function Home() {
  const platforms = await getAllPlatforms();

  const highlights: HomePlatformHighlight[] = HIGHLIGHTED_PLATFORMS.flatMap((folder) => {
    const meta = platforms.find((p) => p.folderName === folder);
    return meta
      ? [{
          folderName: meta.folderName,
          name: meta.platform,
          payRange: meta.payRange,
          difficulty: meta.difficulty,
          slugSegment: meta.slugSegment,
        }]
      : [];
  });

  return <HomePageClient highlights={highlights} />;
}
