"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, Heart } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      // If deployed or in browser, use current public origin
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
        // User canceled or failed, fallback to copy below
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback prompt if clipboard fails
      prompt("Xidhiidhka:", shareUrl);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className="group relative px-6 py-3 rounded-full glass-panel hover:border-rose-romantic/60 text-white font-medium text-sm flex items-center gap-2.5 shadow-lg shadow-black/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-blush/25"
        aria-label="Share This Love"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Xidhiidhka waa la koobiyeeyay! 💖</span>
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4 text-rose-romantic group-hover:rotate-12 transition-transform" />
            <span className="text-rose-blush group-hover:text-white">Share This Love 💌</span>
          </>
        )}
      </button>
    </div>
  );
}
