'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  value: string;
}

export default function StatsCounter({ value }: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(value.includes('+') || value.includes('/') ? '0' : value);

  useEffect(() => {
    if (!inView) return;

    const isPlus = value.endsWith('+');
    const isSlash = value.includes('/');

    let target = 0;
    let suffix = '';
    const prefix = '';

    if (isPlus) {
      target = parseInt(value.replace('+', ''), 10) || 0;
      suffix = '+';
    } else if (isSlash) {
      const parts = value.split('/');
      target = parseInt(parts[0], 10) || 0;
      suffix = '/' + parts[1];
    } else {
      target = parseInt(value, 10) || 0;
      if (isNaN(target)) {
        setTimeout(() => {
          setDisplayValue(value);
        }, 0);
        return;
      }
    }

    const duration = 2000; // 2 seconds
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * target);

      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
      {displayValue}
    </span>
  );
}
