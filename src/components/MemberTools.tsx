import { ArrowUpRight } from 'lucide-react';
import { memberTools } from '@/data/memberTools';

/* "Built by members": tools made by community members, kept visually
 * separate from Talent Collective's own resources.
 */
export default function MemberTools() {
  if (memberTools.length === 0) return null;

  return (
    <section
      aria-labelledby="member-tools-heading"
      className="border-2 border-dashed border-rule bg-card/60 p-6 space-y-4"
    >
      <div className="space-y-2">
        <h2 id="member-tools-heading" className="font-heading text-2xl font-bold text-foreground tracking-tight">
          Built by members
        </h2>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          These tools are made by members of the community. They are not run or checked by
          Talent Collective, so use them at your own judgement.
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {memberTools.map((tool) => (
          <li key={tool.url} className="border-2 border-rule bg-card p-4 space-y-1.5">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-sm text-primary hover:underline underline-offset-2 font-body"
            >
              {tool.name}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">{tool.description}</p>
            {tool.maker && (
              <p className="text-[11px] text-muted-foreground font-body">Made by {tool.maker}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
