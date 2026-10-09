"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

interface HeroSectionProps {
  onScrollToLetter: () => void;
}

export default function HeroSection({ onScrollToLetter }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden pt-20 pb-8 sm:pb-12 px-4 sm:px-6 w-full">
      {/* Sunset & Twilight Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B20] via-[#1c0f2b] to-[#421735] pointer-events-none" />

      {/* Glowing Sunset Orb on Horizon */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[220px] sm:h-[280px] rounded-t-full bg-gradient-to-t from-rose-romantic/35 via-gold-warm/25 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Aurora / Nebula Lights */}
      <div className="absolute top-1/4 left-1/4 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-lavender/15 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-rose-romantic/20 blur-[90px] pointer-events-none" />

      {/* Floating Sparkles / Decorative Hearts in hero */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-6 sm:left-24 text-rose-blush/40 pointer-events-none hidden sm:block"
      >
        <Heart className="w-8 h-8 fill-rose-blush/20 text-rose-blush/40 filter drop-shadow" />
      </motion.div>
      <motion.div
        animate={{ y: [8, -8, 8], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 right-6 sm:right-28 text-lavender/40 pointer-events-none hidden sm:block"
      >
        <Heart className="w-10 h-10 fill-lavender/20 text-lavender/40 filter drop-shadow" />
      </motion.div>

      {/* Main Hero Header Content */}
      <div className="relative z-20 max-w-3xl text-center mx-auto my-auto flex flex-col items-center w-full px-2">
        {/* Subtitle Pill / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1.5 rounded-full glass-panel-subtle border border-rose-blush/20 text-rose-blush text-xs sm:text-sm font-medium tracking-wide mb-4 sm:mb-6 shadow-lg shadow-black/20"
        >
          <Sparkles className="w-3 h-3 text-gold-warm animate-spin-slow" />
          <span>{LOVE_CONTENT.meta.subtitle}</span>
          <Heart className="w-3 h-3 text-rose-romantic fill-rose-romantic" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-serif-luxury font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
        >
          <span className="block">{LOVE_CONTENT.hero.heading}</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-xl md:text-2xl text-rose-blush/90 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 text-center px-1"
        >
          {LOVE_CONTENT.hero.subtitle}
        </motion.p>

        {/* Glowing Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-xs sm:w-auto flex justify-center"
        >
          <button
            onClick={onScrollToLetter}
            className="group relative w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-rose-romantic via-rose-deep to-lavender text-white font-medium text-base sm:text-lg shadow-[0_0_30px_rgba(255,107,154,0.6)] hover:shadow-[0_0_45px_rgba(255,107,154,0.85)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 border border-rose-blush/30 touch-manipulation"
          >
            <span className="relative z-10 font-serif-luxury tracking-wide">
              {LOVE_CONTENT.hero.ctaButtonText}
            </span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white group-hover:scale-125 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Romantic Couple Silhouette Against Sunset Horizon */}
      <div className="relative z-10 w-full max-w-4xl mt-4 sm:mt-6">
        <div className="relative w-full h-36 sm:h-52 overflow-hidden flex items-end justify-center">
          <svg
            viewBox="0 0 1000 300"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6B9A" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#FFD89A" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#080B20" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#120c24" />
                <stop offset="100%" stopColor="#080B20" />
              </linearGradient>
            </defs>

            {/* Glowing Sunset Sun Half Disc */}
            <circle cx="500" cy="220" r="130" fill="url(#horizonGlow)" />
            <circle cx="500" cy="220" r="90" fill="#FFD89A" fillOpacity="0.3" />

            {/* Distant Hills */}
            <path
              d="M0,240 Q250,190 500,230 T1000,220 L1000,300 L0,300 Z"
              fill="#18112e"
            />

            {/* Foreground Hill with couple */}
            <path
              d="M0,280 Q300,220 500,210 Q700,200 1000,270 L1000,300 L0,300 Z"
              fill="url(#hillGrad)"
            />

            {/* Couple Silhouette sitting close together under the night sky */}
            <g transform="translate(470, 150) scale(0.68)" fill="#080B20">
              <circle cx="28" cy="22" r="10" />
              <path d="M18,32 C18,30 24,28 32,28 C40,28 44,30 45,34 L46,65 L20,65 Z" />

              <circle cx="52" cy="25" r="9.5" />
              <path d="M42,35 C42,32 47,30 55,30 C62,30 67,33 68,37 L67,65 L43,65 Z" />

              {/* Glowing Heart above couple */}
              <path
                d="M40,6 C38,0 30,-2 26,4 C22,-2 14,0 12,6 C10,14 26,24 26,24 C26,24 42,14 40,6 Z"
                fill="#FF6B9A"
                transform="translate(14, -14) scale(0.7)"
              />
            </g>
          </svg>
        </div>

        {/* Scroll indicator chevron */}
        <div className="flex justify-center -mt-2">
          <button
            onClick={onScrollToLetter}
            aria-label="Scroll down to letter"
            className="p-2 rounded-full text-rose-blush/60 hover:text-white transition-colors duration-200 animate-bounce focus:outline-none touch-manipulation"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
