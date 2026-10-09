"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { LOVE_CONTENT } from "@/lib/love-content";

export default function SurpriseSection() {
  const [revealed, setRevealed] = useState(false);

  const triggerHeartExplosion = () => {
    confetti({
      particleCount: 45,
      spread: 75,
      origin: { y: 0.65 },
      colors: ["#FF6B9A", "#FFD5E2", "#B9A6FF", "#FFD89A", "#FFFFFF"],
      scalar: 1.2,
    });
    setTimeout(() => {
      confetti({
        particleCount: 35,
        angle: 60,
        spread: 65,
        origin: { x: 0.2, y: 0.65 },
        colors: ["#FF6B9A", "#E63973"],
      });
      confetti({
        particleCount: 35,
        angle: 120,
        spread: 65,
        origin: { x: 0.8, y: 0.65 },
        colors: ["#FF6B9A", "#B9A6FF"],
      });
    }, 180);
  };

  const handleClick = () => {
    setRevealed(true);
    triggerHeartExplosion();
  };

  return (
    <section className="py-14 sm:py-20 px-3 sm:px-6 max-w-4xl mx-auto text-center relative w-full">
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-romantic/10 border border-rose-romantic/25 text-rose-blush text-xs sm:text-sm font-medium mb-3 sm:mb-4 backdrop-blur-md">
          <Gift className="w-3.5 h-3.5 text-gold-warm" />
          <span>Hadyad Dahsoon</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white mb-5 sm:mb-6">
          A Special Surprise
        </h2>

        {!revealed ? (
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="group relative w-full max-w-xs sm:w-auto px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-rose-romantic via-[#E63973] to-lavender text-white font-serif-luxury font-bold text-base sm:text-xl shadow-[0_0_30px_rgba(255,107,154,0.6)] hover:shadow-[0_0_45px_rgba(255,107,154,0.95)] transition-all duration-300 flex items-center justify-center gap-2.5 border border-rose-blush/30 touch-manipulation"
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white animate-bounce" />
            <span>{LOVE_CONTENT.surprise.buttonText}</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gold-warm group-hover:rotate-45 transition-transform" />
          </motion.button>
        ) : null}

        {/* Revealed Surprise Message Card */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 w-full max-w-2xl rounded-3xl p-6 sm:p-12 glass-panel border border-rose-romantic/50 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#26133a]/90 via-[#18112d]/90 to-[#0c0d22]/95"
            >
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 text-rose-romantic/40">
                <Heart className="w-5 h-5 fill-rose-romantic/30" />
              </div>
              <div className="absolute top-3 right-3 text-gold-warm/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="absolute bottom-3 left-3 text-lavender/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="absolute bottom-3 right-3 text-rose-romantic/40">
                <Heart className="w-5 h-5 fill-rose-romantic/30" />
              </div>

              {/* Pulsing center heart */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-romantic/20 border border-rose-romantic/40 mx-auto flex items-center justify-center mb-5 sm:mb-6 text-rose-romantic shadow-[0_0_25px_rgba(255,107,154,0.6)] animate-pulse">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-rose-romantic" />
              </div>

              {/* Exact Somali Surprise Message */}
              <p className="text-lg sm:text-2xl font-serif-luxury text-white font-medium leading-relaxed sm:leading-loose text-center px-1">
                &ldquo;{LOVE_CONTENT.surprise.revealedMessage}&rdquo;
              </p>

              {/* Re-trigger confetti button */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-rose-blush/15 flex justify-center">
                <button
                  onClick={triggerHeartExplosion}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-rose-romantic/20 hover:bg-rose-romantic/30 text-rose-blush hover:text-white text-xs sm:text-sm font-medium border border-rose-romantic/30 transition-all active:scale-95 touch-manipulation"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-romantic text-rose-romantic" />
                  <span>Dilaaci Quluubta Mar Kale 💖</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
