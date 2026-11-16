'use client';

import { useEffect, useState } from 'react';
import { DISCORD_INVITE_CODE, MEMBER_COUNT_FALLBACK } from '@/lib/siteConfig';

interface DiscordMemberCountProps {
  fallback?: string;
}

export default function DiscordMemberCount({ fallback = MEMBER_COUNT_FALLBACK }: DiscordMemberCountProps) {
  const [displayValue, setDisplayValue] = useState(fallback);

  // Fetch live count from Discord invite API
  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch(`https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true`);
        if (res.ok) {
          const data = await res.json();
          if (data.approximate_member_count) {
            setDisplayValue(data.approximate_member_count.toLocaleString() + '+');
          }
        }
      } catch {
        // Silently fail — fallback will be used
      }
    }
    fetchCount();
  }, []);

  return (
    <span className="font-heading text-lg font-bold text-primary">
      {displayValue}
    </span>
  );
}
