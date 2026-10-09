"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

export default function FinalRomanticScene() {
  return (
    <footer className="relative pt-16 sm:pt-24 pb-24 sm:pb-28 px-3 sm:px-6 overflow-hidden text-center bg-gradient-to-b from-[#080B20] via-[#1c0f2a] to-[#2b1028] w-full">
      {/* Background Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-t from-rose-romantic/25 via-gold-warm/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-lavender/10 blur-[90px] pointer-events-none" />

      {/* Main Closing Container */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-2">
        {/* Glowing Center Heart */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            filter: [
              "drop-shadow(0 0 15px rgba(255,107,154,0.6))",
              "drop-shadow(0 0 35px rgba(255,107,154,0.95))",
              "drop-shadow(0 0 15px rgba(255,107,154,0.6))",
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-deep via-rose-romantic to-gold-warm p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-midnight flex items-center justify-center">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-rose-romantic text-rose-romantic" />
            </div>
          </div>
        </motion.div>

        {/* Recipient Name in Luxury Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-5xl font-serif-luxury font-bold text-white mb-4 sm:mb-6 tracking-tight text-glow-rose"
        >
          {LOVE_CONTENT.finalScene.name}
        </motion.h2>

        {/* Reflection Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-2xl text-rose-blush/90 font-light leading-relaxed max-w-2xl mb-4 sm:mb-6"
        >
          &ldquo;{LOVE_CONTENT.finalScene.reflection}&rdquo;
        </motion.p>

        {/* Heartfelt Text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-2xl font-serif-luxury font-semibold text-gold-warm mb-4 sm:mb-6 text-glow-gold"
        >
          &ldquo;{LOVE_CONTENT.finalScene.heartfeltText}&rdquo;
        </motion.p>

        {/* Declaration */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-3xl font-serif-luxury font-bold text-rose-romantic mb-8 sm:mb-12 tracking-wide"
        >
          {LOVE_CONTENT.finalScene.declaration}
        </motion.p>

        {/* Divider with Heart */}
        <div className="flex items-center justify-center gap-3 w-full max-w-xs sm:max-w-md my-4 sm:my-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rose-blush/30" />
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-romantic text-rose-romantic" />
          </motion.div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rose-blush/30" />
        </div>

        {/* Finish Signoff */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-3 sm:p-4 rounded-2xl glass-panel-subtle border border-gold-warm/25 inline-flex items-center gap-2 mt-3"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-warm" />
          <span className="font-serif-luxury text-sm sm:text-lg font-bold text-white tracking-wide">
            {LOVE_CONTENT.finalScene.bottomSignoff}
          </span>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-warm" />
        </motion.div>

        {/* Year and Copyright subtle tag */}
        <p className="mt-8 sm:mt-12 text-[10px] sm:text-xs text-rose-blush/40 font-mono tracking-widest uppercase">
          Farduus Forever • A Special Digital Love Gift • 2026
        </p>
      </div>
    </footer>
  );
}
