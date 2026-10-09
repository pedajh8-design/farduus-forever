"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Moon } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

export default function WishForFuture() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative">
      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden glass-panel border border-rose-blush/25 shadow-2xl bg-gradient-to-b from-[#1b1031] via-[#2f1437] to-[#0c0d23]"
      >
        {/* Sky with Sunset Horizon & Stars Background */}
        <div className="relative pt-12 pb-6 px-6 sm:px-12 text-center z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-warm/15 border border-gold-warm/30 text-gold-warm text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span>Mustaqbalka Aynu Wada Rajo Weyn Nahay</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white mb-6 text-glow-rose">
            {LOVE_CONTENT.futureWish.heading}
          </h2>

          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl glass-panel-subtle border border-rose-blush/20 mb-8 backdrop-blur-lg">
            <p className="text-lg sm:text-2xl font-serif-luxury text-rose-blush/95 leading-relaxed sm:leading-loose">
              &ldquo;{LOVE_CONTENT.futureWish.message}&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gold-warm/90 font-medium">
            <Heart className="w-4 h-4 fill-rose-romantic text-rose-romantic" />
            <span>Aamiin yaa Rabbi • Hal Qalbi, Hal Mustaqbal</span>
            <Heart className="w-4 h-4 fill-rose-romantic text-rose-romantic" />
          </div>
        </div>

        {/* Panoramic Sunset with Silhouette Landscape */}
        <div className="relative w-full h-56 sm:h-72 overflow-hidden mt-2">
          {/* Glowing Sunset Horizon */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B20] via-transparent to-transparent z-10 pointer-events-none" />

          <svg
            viewBox="0 0 1200 400"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wishSunset" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d96677" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8c2a5e" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#120c24" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="sunGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD89A" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF6B9A" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Glowing Sunset Sun on Horizon */}
            <circle cx="600" cy="270" r="140" fill="url(#sunGlow)" />
            <circle cx="600" cy="270" r="85" fill="#FFEAB8" fillOpacity="0.7" />

            {/* Distant Mountain Ridges */}
            <path
              d="M0,280 L200,220 L400,260 L600,210 L800,250 L1000,200 L1200,270 L1200,400 L0,400 Z"
              fill="#261033"
              fillOpacity="0.8"
            />
            <path
              d="M0,310 L250,260 L500,280 L750,240 L1000,290 L1200,280 L1200,400 L0,400 Z"
              fill="#180e29"
            />

            {/* Foreground Hill with Couple Looking into the Horizon */}
            <path
              d="M0,350 Q300,290 600,290 Q900,290 1200,350 L1200,400 L0,400 Z"
              fill="#080B20"
            />

            {/* Couple Silhouette Standing Together Holding Hands */}
            <g transform="translate(565, 205) scale(0.85)" fill="#080B20">
              {/* Partner 1 (Left) */}
              <circle cx="25" cy="18" r="9" />
              <path d="M16,28 C16,25 22,23 30,23 C38,23 44,25 44,29 L43,90 L20,90 Z" />

              {/* Partner 2 (Right, leaning on partner 1) */}
              <circle cx="50" cy="21" r="8.5" />
              <path d="M42,30 C42,27 47,25 55,25 C63,25 67,28 67,32 L65,90 L44,90 Z" />

              {/* Clasping hands in center */}
              <path d="M38,50 Q43,54 48,50" stroke="#080B20" strokeWidth="5" />

              {/* Little Floating Heart above their heads */}
              <path
                d="M37,0 C35,-5 28,-7 25,-1 C22,-7 15,-5 13,0 C11,7 25,16 25,16 C25,16 39,7 37,0 Z"
                fill="#FF6B9A"
                transform="translate(12, -10) scale(0.6)"
              />
            </g>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
