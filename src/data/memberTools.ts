/**
 * Tools made by community members, shown in the "Built by members" section
 * on /resources. To add one, copy an entry and change the fields.
 * Only add a tool when its maker has agreed to be listed.
 */

export interface MemberTool {
  name: string;
  /** One neutral line, based only on what the tool's own page says. */
  description: string;
  url: string;
  /** Optional credit, only with the maker's permission. */
  maker?: string;
}

export const memberTools: MemberTool[] = [
  // TODO(owner): confirm the maker's permission before publishing.
  {
    name: 'The Work Ledger',
    description:
      'Describes itself as an independent guide to AI training jobs and freelance AI evaluation work, comparing several platforms.',
    url: 'https://theworkledgerai.netlify.app/',
  },
];
