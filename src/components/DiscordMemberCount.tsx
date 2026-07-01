'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface DiscordMemberCountProps {
  fallback?: string;
}

export default function DiscordMemberCount({ fallback = '500+' }: DiscordMemberCountProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState<number | null>(null);
  const [displayValue, setDisplayValue] = useState(fallback);
  const [hasFetched, setHasFetched] = useState(false);

  // Fetch live count from Discord invite API
  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch('https://discord.com/api/v10/invites/56xGWJRqEQ?with_counts=true');
        if (res.ok) {
          const data = await res.json();
          if (data.approximate_member_count) {
            setCount(data.approximate_member_count);
          }
        }
      } catch {
        // Silently fail — fallback will be used
      } finally {
        setHasFetched(true);
      }
    }
    fetchCount();
  }, []);

  // Animate count when in view
  useEffect(() => {
    if (!inView || !hasFetched) return;

    const target = count;
    if (!target) return;

    const duration = 2000;
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress); // ease out quad
      const current = Math.floor(easeProgress * target);

      setDisplayValue(current.toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(target.toLocaleString());
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView, count, fallback, hasFetched]);

  return (
    <span ref={ref} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
      {displayValue}
    </span>
  );
}
