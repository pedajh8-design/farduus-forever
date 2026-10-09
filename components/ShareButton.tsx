"use client";

import React, { useState } from "react";
import { Share2, Check } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
        return window.location.href;
      }
    }
    return process.env.NEXT_PUBLIC_SITE_URL || "https://farduus-forever.vercel.app";
  };

  const handleShare = async () => {
    const shareUrl = getShareUrl();
    const shareData = {
      title: LOVE_CONTENT.meta.title,
      text: `Farriin jacayl oo qaas ah: ${LOVE_CONTENT.meta.subtitle}`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      prompt("Xidhiidhka:", shareUrl);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className="group relative px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full glass-panel hover:border-rose-romantic/60 text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shadow-lg shadow-black/30 active:scale-95 transition-all duration-300 border border-rose-blush/25 touch-manipulation"
        aria-label="Share This Love"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-[11px] sm:text-xs">La koobiyeeyay! 💖</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-rose-romantic group-hover:rotate-12 transition-transform" />
            <span className="text-rose-blush group-hover:text-white">
              <span className="inline sm:hidden">Share 💌</span>
              <span className="hidden sm:inline">Share This Love 💌</span>
            </span>
          </>
        )}
      </button>
    </div>
  );
}
