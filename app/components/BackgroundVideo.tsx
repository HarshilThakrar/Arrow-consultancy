"use client";

import { useEffect, useRef, useState } from "react";

interface BackgroundVideoProps {
  posterImage?: string;
  videoSrc?: string;
  overlayOpacity?: string;
}

export default function BackgroundVideo({
  posterImage = "/assets/hero/slider_4.jpg",
  videoSrc = "/logo_reveal.mp4",
  overlayOpacity = "from-[#3a2d18]/90 via-[#221a0e]/85 to-[#161009]/90",
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#161009]">
      {/* Video Element */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover scale-105 filter brightness-[0.75] contrast-[1.1] sepia-[0.35]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Fallback Image */}
      {hasError && (
        <img
          src={posterImage}
          alt="Architectural Backdrop"
          className="w-full h-full object-cover scale-105 filter brightness-[0.6] sepia-[0.35]"
        />
      )}

      {/* Deep Rich Warm Gold Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${overlayOpacity}`} />

      {/* Radiant Golden Center Glow */}
      <div className="absolute inset-0 bg-radial-at-c from-[#b89565]/35 via-[#b89565]/10 to-transparent pointer-events-none" />

      {/* Golden Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229, 197, 138, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229, 197, 138, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
