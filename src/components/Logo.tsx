'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'badge' | 'icon' | 'horizontal';
  size?: number; // Used for badge/icon dimension
}

export default function Logo({ className = '', variant = 'horizontal', size = 40 }: LogoProps) {
  // SVG for the Cream Flower with Black Center
  const Flower = () => (
    <g id="flower" transform="translate(145, 145) scale(0.9)">
      {/* 6 Petals */}
      <path
        d="M 0,-15 C -15,-40 -40,-40 -40,-20 C -40,0 -15,10 0,0"
        fill="#f9f2e5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
      <path
        d="M 0,-15 C 15,-40 40,-40 40,-20 C 40,0 15,10 0,0"
        fill="#f9f2e5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        transform="rotate(60)"
      />
      <path
        d="M 0,-15 C 15,-40 40,-40 40,-20 C 40,0 15,10 0,0"
        fill="#f9f2e5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        transform="rotate(120)"
      />
      <path
        d="M 0,-15 C 15,-40 40,-40 40,-20 C 40,0 15,10 0,0"
        fill="#f9f2e5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        transform="rotate(180)"
      />
      <path
        d="M 0,-15 C 15,-40 40,-40 40,-20 C 40,0 15,10 0,0"
        fill="#f9f2e5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        transform="rotate(240)"
      />
      <path
        d="M 0,-15 C 15,-40 40,-40 40,-20 C 40,0 15,10 0,0"
        fill="#f9f2e5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        transform="rotate(300)"
      />
      {/* Center of the flower */}
      <circle cx="0" cy="0" r="14" fill="#1a1a1a" />
      {/* Subtle details on center */}
      <circle cx="0" cy="0" r="10" fill="#2d2d2d" />
      <circle cx="0" cy="0" r="6" fill="#1a1a1a" />
    </g>
  );

  // SVG representation of the badge
  const BadgeSVG = (customSize: number) => (
    <svg
      width={customSize}
      height={customSize}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      {/* Pink Circle */}
      <circle cx="128" cy="128" r="120" fill="#e05fa7" />
      
      {/* Flower */}
      <Flower />

      {/* Stacked Text: "Talent Collective" */}
      <text
        x="44"
        y="76"
        fill="#000000"
        fontFamily="Impact, sans-serif"
        fontSize="38"
        fontWeight="900"
        letterSpacing="0.5"
      >
        Talent
      </text>
      <text
        x="44"
        y="122"
        fill="#000000"
        fontFamily="Impact, sans-serif"
        fontSize="38"
        fontWeight="900"
        letterSpacing="0.5"
      >
        Collective
      </text>

      {/* Footer text: "Established 2026" */}
      <text
        x="128"
        y="218"
        fill="#000000"
        fontFamily="Impact, sans-serif"
        fontSize="12"
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="1"
      >
        Established
      </text>
      <text
        x="128"
        y="234"
        fill="#000000"
        fontFamily="Impact, sans-serif"
        fontSize="12"
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="1"
      >
        2026
      </text>
    </svg>
  );

  // Simplified Circle Icon for Horizontal Layouts or Small Displays
  const IconSVG = (customSize: number) => (
    <svg
      width={customSize}
      height={customSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <circle cx="50" cy="50" r="48" fill="#e05fa7" />
      {/* Tiny flower representation */}
      <g transform="translate(50, 50) scale(0.42)">
        {/* Simple Flower */}
        <circle cx="0" cy="-20" r="16" fill="#f9f2e5" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="17" cy="-10" r="16" fill="#f9f2e5" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="17" cy="10" r="16" fill="#f9f2e5" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="0" cy="20" r="16" fill="#f9f2e5" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="-17" cy="10" r="16" fill="#f9f2e5" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="-17" cy="-10" r="16" fill="#f9f2e5" stroke="#1a1a1a" strokeWidth="2" />
        <circle cx="0" cy="0" r="14" fill="#1a1a1a" />
      </g>
    </svg>
  );

  if (variant === 'badge') {
    return <div className={`inline-block ${className}`}>{BadgeSVG(size)}</div>;
  }

  if (variant === 'icon') {
    return <div className={`inline-block ${className}`}>{IconSVG(size)}</div>;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {IconSVG(size)}
      <div className="flex flex-col text-left">
        <span className="font-heading text-lg font-black tracking-tight text-foreground leading-none">
          Talent Collective
        </span>
        <span className="text-[9px] font-bold text-[#e05fa7] uppercase tracking-wider mt-0.5 leading-none">
          Established 2026
        </span>
      </div>
    </div>
  );
}
