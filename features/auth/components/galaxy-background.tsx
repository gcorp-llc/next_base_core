"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const GalaxyBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="galaxy-bg">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10" />

      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            "--duration": `${star.duration}s`,
          } as any}
        />
      ))}

      {/* Moving Nebulas (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <motion.rect
          width="100%"
          height="100%"
          filter="url(#noise)"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};
