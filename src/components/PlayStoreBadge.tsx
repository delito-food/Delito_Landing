"use client";

import { motion } from "framer-motion";

interface PlayStoreBadgeProps {
  height?: number;
  className?: string;
  onClick?: () => void;
}

export default function PlayStoreBadge({ height = 52, className = "", onClick }: PlayStoreBadgeProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block cursor-pointer ${className}`}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 646 190"
        height={height}
        className="w-auto"
      >
        <path
          d="M627 0H19A19.6 19.6 0 0 0 0 19.6v150.8A19.6 19.6 0 0 0 19 190h608a19.6 19.6 0 0 0 19-19.6V19.6A19.6 19.6 0 0 0 627 0z"
          fill="#a6a6a6"
        />
        <path
          d="M637 3.8a16 16 0 0 1 5.2 11.8v160.8a16 16 0 0 1-15.8 16H19.6a16 16 0 0 1-15.8-16V15.6A16 16 0 0 1 19.6 0h607A15.8 15.8 0 0 1 637 3.8z"
          fill="#000"
        />
        <text
          x="244"
          y="58"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="26"
          letterSpacing="0.8"
        >
          GET IT ON
        </text>
        <text
          x="244"
          y="116"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="56"
          fontWeight="bold"
        >
          Google Play
        </text>
        {/* Play triangle icon */}
        <defs>
          <linearGradient id="lgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00A0FF" />
            <stop offset="1%" stopColor="#00A1FF" />
            <stop offset="26%" stopColor="#00BEFF" />
            <stop offset="51%" stopColor="#00D2FF" />
            <stop offset="76%" stopColor="#00DFFF" />
            <stop offset="100%" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient id="lgrad2" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FFE000" />
            <stop offset="41%" stopColor="#FFBD00" />
            <stop offset="78%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient id="lgrad3" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FF3A44" />
            <stop offset="100%" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="lgrad4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#32A071" />
            <stop offset="7%" stopColor="#2DA771" />
            <stop offset="48%" stopColor="#15CF74" />
            <stop offset="80%" stopColor="#06E775" />
            <stop offset="100%" stopColor="#00F076" />
          </linearGradient>
        </defs>
        {/* Blue piece */}
        <path
          d="M85.3 31.5a9.3 9.3 0 0 0-2.1 6.5v116a9.3 9.3 0 0 0 2.1 6.5l.3.4 64.8-64.8v-1.5l-64.8-64z"
          fill="url(#lgrad)"
        />
        {/* Yellow piece */}
        <path
          d="M172 117.3l-21.6-21.6v-1.5L172 72.5l.5.3 25.6 14.6c7.3 4.2 7.3 11 0 15.1l-25.6 14.6z"
          fill="url(#lgrad2)"
        />
        {/* Red piece */}
        <path
          d="M172.5 117l-22.1-22.1-65.1 65.1a7.5 7.5 0 0 0 9.6.4L172.5 117z"
          fill="url(#lgrad3)"
        />
        {/* Green piece */}
        <path
          d="M172.5 72.8L94.9 29.4a7.5 7.5 0 0 0-9.6.4l65.1 65.1z"
          fill="url(#lgrad4)"
        />
      </svg>
    </motion.button>
  );
}
