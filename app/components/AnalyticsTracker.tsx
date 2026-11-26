"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { postApi } from "../lib/api";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const heartbeatTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 1. Persistent anonymous visitor ID
    let visitorId = "";
    if (typeof window !== "undefined") {
      visitorId = localStorage.getItem("arrow_visitor_id") || "";
      if (!visitorId) {
        visitorId = "vis_" + Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
        localStorage.setItem("arrow_visitor_id", visitorId);
      }
    }

    const sendTrack = () => {
      postApi('/track-visit', {
        page_path: pathname || "/",
        page_title: typeof document !== "undefined" ? document.title : "",
        visitor_id: visitorId,
      }).catch(() => {
        // ignore network error silently
      });
    };

    // Send immediately upon page navigation
    sendTrack();

    // 2. Real-time Heartbeat: Send ping every 25 seconds while user is active on this page
    if (heartbeatTimer.current) {
      clearInterval(heartbeatTimer.current);
    }
    heartbeatTimer.current = setInterval(() => {
      if (typeof document !== "undefined" && !document.hidden) {
        sendTrack();
      }
    }, 25000);

    return () => {
      if (heartbeatTimer.current) {
        clearInterval(heartbeatTimer.current);
      }
    };
  }, [pathname]);

  return null;
}
