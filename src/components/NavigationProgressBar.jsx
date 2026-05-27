"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  // When pathname or searchParams change, the page transition is finished!
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const finishTimer = setTimeout(() => {
        setVisible(false);
        const resetTimer = setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 150); // wait for fade out animation
        return () => clearTimeout(resetTimer);
      }, 200); // let the 100% width transition finish
      return () => clearTimeout(finishTimer);
    }
  }, [pathname, searchParams]);

  // Set wait cursor on document during loading
  useEffect(() => {
    if (loading) {
      document.documentElement.style.cursor = "wait";
    } else {
      document.documentElement.style.cursor = "";
    }
    return () => {
      document.documentElement.style.cursor = "";
    };
  }, [loading]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external or non-navigational links
      if (
        anchor.target === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      // Ignore same-page navigations (pathname & searchParams are same)
      try {
        const targetUrl = new URL(href, window.location.href);
        const currentUrl = new URL(window.location.href);
        if (targetUrl.pathname === currentUrl.pathname && targetUrl.search === currentUrl.search) {
          return;
        }
      } catch (err) {
        // Fallback for relative or malformed URLs
        return;
      }

      // Start loading
      setLoading(true);
      setVisible(true);
      setProgress(10);
    };

    document.addEventListener("click", handleAnchorClick);
    
    // Also capture browser back/forward buttons
    const handlePopState = () => {
      setLoading(true);
      setVisible(true);
      setProgress(10);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Update progress bar asymptotically
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95;
        const increment = (100 - prev) * 0.1;
        return prev + increment;
      });
    }, 150);

    // Safeguard: auto-hide after 8 seconds if navigation is aborted/stuck
    const safeguardTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 150);
      }, 200);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(safeguardTimer);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      className={`fixed top-0 left-0 h-[4px] z-[99999] transition-all duration-300 ease-out pointer-events-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: `${progress}%`,
        background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
        boxShadow: "0 0 10px hsl(var(--gold)), 0 0 5px hsl(var(--primary))",
      }}
    />
  );
}
