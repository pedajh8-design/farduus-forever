"use client";

import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, RotateCcw, Copy, Check, Feather } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

export const LoveLetter = forwardRef<HTMLElement, { onReadAgain?: () => void }>(
  function LoveLetter({ onReadAgain }, ref) {
    const [copied, setCopied] = useState(false);

    const handleCopyLetter = () => {
      const fullText = [
        LOVE_CONTENT.letter.salutation,
        "",
        ...LOVE_CONTENT.letter.paragraphs.map((p) => p + "\n"),
        LOVE_CONTENT.letter.recipientSignoff,
      ].join("\n");

      navigator.clipboard.writeText(fullText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    };

    return (
      <section
        ref={ref}
        id="love-letter"
        className="relative py-14 sm:py-20 px-3 sm:px-6 max-w-4xl mx-auto scroll-mt-12 w-full"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/3 -left-12 w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-rose-romantic/15 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-lavender/15 blur-[90px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-romantic/10 border border-rose-romantic/25 text-rose-blush text-xs sm:text-sm font-medium mb-3 backdrop-blur-md">
            <Feather className="w-3.5 h-3.5 text-gold-warm" />
            <span>Farriin Qalbi Ka Timid</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight text-glow-rose">
            {LOVE_CONTENT.meta.title}
          </h2>
          <p className="mt-1.5 text-rose-blush/70 text-xs sm:text-base font-light">
            Erayo daacad ah oo qalbigayga si toos ah ugu qoran
          </p>
        </div>

        {/* The Letter Card — Frosted Luxury Parchment with Warm Borders */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl p-5 sm:p-10 md:p-14 glass-panel border border-rose-blush/25 shadow-2xl overflow-hidden bg-gradient-to-b from-[#13173d]/90 via-[#101333]/90 to-[#0b0e24]/95"
        >
          {/* Top Gold Corner Accents */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-7 h-7 sm:w-12 sm:h-12 border-t-2 border-l-2 border-gold-warm/40 rounded-tl-xl sm:rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-12 sm:h-12 border-t-2 border-r-2 border-gold-warm/40 rounded-tr-xl sm:rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-7 h-7 sm:w-12 sm:h-12 border-b-2 border-l-2 border-gold-warm/40 rounded-bl-xl sm:rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-12 sm:h-12 border-b-2 border-r-2 border-gold-warm/40 rounded-br-xl sm:rounded-br-2xl pointer-events-none" />

          {/* Floating animated margin hearts (hidden on narrow screens to prevent covering text) */}
          <motion.div
            animate={{ y: [-5, 5, -5], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-6 text-rose-romantic pointer-events-none hidden sm:block"
          >
            <Heart className="w-5 h-5 fill-rose-romantic/40 text-rose-romantic" />
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5], opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-28 left-6 text-lavender pointer-events-none hidden sm:block"
          >
            <Heart className="w-5 h-5 fill-lavender/40 text-lavender" />
          </motion.div>

          {/* Card Top Banner / Stamp */}
          <div className="flex items-center justify-between border-b border-rose-blush/15 pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-romantic/20 border border-rose-romantic/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,107,154,0.4)]">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-romantic fill-rose-romantic" />
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-gold-warm font-medium">
                  Farriin Khaas Ah
                </span>
                <span className="text-xs sm:text-sm text-rose-blush/90 font-serif-luxury font-semibold">
                  Hal Qalbi • Hal Jacayl
                </span>
              </div>
            </div>

            {/* Quick Action Tools */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLetter}
                className="p-1.5 sm:px-3 sm:py-1.5 rounded-full glass-panel-subtle hover:border-rose-romantic/50 text-xs text-rose-blush flex items-center gap-1.5 transition-all duration-200 focus:outline-none touch-manipulation"
                title="Koobiyeey farriinta"
                aria-label="Koobiyeey farriinta"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] sm:text-xs text-emerald-400">La koobiyeeyay!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px] sm:text-xs">Koobiyeey</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LETTER BODY — VERBATIM TEXT WITH OPTIMAL MOBILE READABILITY */}
          <div className="space-y-5 sm:space-y-6 text-[15px] sm:text-lg leading-relaxed sm:leading-loose text-[#F3EDF5] font-normal tracking-normal select-text">
            {/* Salutation */}
            <p className="text-xl sm:text-3xl font-serif-luxury font-bold text-rose-romantic text-glow-rose mb-4 sm:mb-6">
              {LOVE_CONTENT.letter.salutation}
            </p>

            {/* Paragraph 1 */}
            <p className="text-left leading-relaxed sm:leading-loose break-words">
              {LOVE_CONTENT.letter.paragraphs[0]}
            </p>

            {/* Paragraph 2 */}
            <p className="text-left leading-relaxed sm:leading-loose break-words">
              {LOVE_CONTENT.letter.paragraphs[1]}
            </p>

            {/* Paragraph 3 */}
            <p className="text-left leading-relaxed sm:leading-loose break-words">
              {LOVE_CONTENT.letter.paragraphs[2]}
            </p>

            {/* Paragraph 4 */}
            <p className="text-left leading-relaxed sm:leading-loose break-words">
              {LOVE_CONTENT.letter.paragraphs[3]}
            </p>

            {/* Paragraph 5 */}
            <p className="text-left leading-relaxed sm:leading-loose break-words">
              {LOVE_CONTENT.letter.paragraphs[4]}
            </p>

            {/* Verbatim Sign-off */}
            <div className="pt-6 sm:pt-8 border-t border-rose-blush/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div>
                <p className="text-lg sm:text-2xl font-serif-luxury font-bold text-gold-warm">
                  {LOVE_CONTENT.letter.recipientSignoff}
                </p>
                <p className="text-[11px] sm:text-xs text-rose-blush/60 mt-0.5">
                  Jacayl aan dhammaad lahayn • Always & Forever
                </p>
              </div>

              {/* Glowing handwritten-style signature */}
              <div className="text-left sm:text-right w-full sm:w-auto">
                <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-rose-blush/60 mb-0.5">
                  Quruxda Qalbigayga:
                </span>
                <span className="font-script-romantic text-2xl sm:text-4xl text-rose-romantic tracking-wide drop-shadow-[0_0_15px_rgba(255,107,154,0.7)]">
                  {LOVE_CONTENT.meta.signature}
                </span>
              </div>
            </div>
          </div>

          {/* Letter Bottom Interactive Controls */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-rose-blush/10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                if (onReadAgain) {
                  onReadAgain();
                } else {
                  const el = document.getElementById("love-letter");
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-rose-romantic/15 hover:bg-rose-romantic/25 border border-rose-romantic/35 text-rose-blush text-xs sm:text-sm font-medium hover:text-white transition-all duration-300 shadow-lg shadow-rose-romantic/10 active:scale-95 touch-manipulation"
            >
              <RotateCcw className="w-3.5 h-3.5 text-gold-warm" />
              <span>Akhri Farriinta Mar Kale 🔄</span>
            </button>
          </div>
        </motion.div>
      </section>
    );
  }
);
