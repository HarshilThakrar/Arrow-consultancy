"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // If you ever want to skip the preloader on refresh, you can add sessionStorage logic here.
  }, []);

  const handleEnded = () => {
    setFading(true);
    
    // Wait for the fade out animation to complete before unmounting and starting the hero
    setTimeout(() => {
      setLoading(false);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('preloaderDone'));
      }
    }, 800); // 800ms matches our transition duration roughly
  };

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="w-3/4 max-w-md h-auto object-contain"
      >
        <source src="/logo_reveal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
