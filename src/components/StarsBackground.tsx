"use client";

import { useEffect, useMemo, useRef } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  duration: number;
  delay: number;
};

export default function StarsBackground() {
  const ref = useRef<HTMLDivElement>(null);

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 140 }).map((_, i) => {
      const z = Math.random(); // depth

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z,
        size: z * 2 + 0.5,
        duration: 20 + z * 40,
        delay: Math.random() * -60,
      };
    });
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden perspective-[800px]">
      <div ref={ref} className="absolute inset-0 transition-transform duration-300">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.z,
              filter: `blur(${(1 - star.z) * 1.5}px)`,
              transform: `translateZ(${star.z * -400}px)`,
              animation: `star-float ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {/* Rare meteor */}
        <span className="meteor" />
      </div>
    </div>
  );
}
