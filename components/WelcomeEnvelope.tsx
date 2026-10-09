"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Sparkles, MailOpen } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

interface WelcomeEnvelopeProps {
  onOpenLetter: () => void;
}

export default function WelcomeEnvelope({ onOpenLetter }: WelcomeEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeningSequence, setIsOpeningSequence] = useState(false);

  const triggerRomanticConfetti = () => {
    // Left burst
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.6 },
      colors: ["#FF6B9A", "#FFD5E2", "#B9A6FF", "#FFD89A", "#FFFFFF"],
      shapes: ["circle"],
      scalar: 1.2,
    });
    // Right burst
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.6 },
      colors: ["#FF6B9A", "#FFD5E2", "#B9A6FF", "#FFD89A", "#FFFFFF"],
      shapes: ["circle"],
      scalar: 1.2,
    });
    // Center romantic burst
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: ["#FF6B9A", "#FFD5E2", "#E63973"],
      scalar: 1.4,
    });
  };

  const handleOpenEnvelope = () => {
    if (isOpeningSequence) return;
    setIsOpeningSequence(true);
    triggerRomanticConfetti();

    // Sequence timing: flap opens -> letter rises -> fade out to main view
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        onOpenLetter();
      }, 1200);
    }, 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight text-white px-4 select-none overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-romantic/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-lavender/20 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-romantic/10 blur-[120px] pointer-events-none" />

        {/* Skip button for instant access */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={onOpenLetter}
            className="px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide text-rose-blush/80 hover:text-white glass-panel-subtle hover:border-rose-romantic/50 transition-all duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-rose-romantic/50"
            aria-label="Skip to main love letter"
          >
            <span>{LOVE_CONTENT.welcome.skipButtonText}</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
          {/* Greeting text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-romantic/15 border border-rose-romantic/30 text-rose-blush text-sm mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
              <span>Hal Qalbi, Hal Jacayl</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight mb-3 text-glow-rose">
              {LOVE_CONTENT.welcome.greeting}
            </h1>
            <p className="text-rose-blush/90 text-base sm:text-lg font-light leading-relaxed max-w-md mx-auto">
              {LOVE_CONTENT.welcome.invitation}
            </p>
          </motion.div>

          {/* Interactive Envelope with 3D perspective */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative perspective-1000 my-4 cursor-pointer"
            onClick={handleOpenEnvelope}
          >
            {/* Pulsing Aura Behind Envelope */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-romantic/30 via-lavender/30 to-rose-romantic/30 rounded-2xl blur-2xl animate-pulse-slow" />

            {/* Envelope Body */}
            <div className="relative w-72 sm:w-84 h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#1b1c3d] via-[#141630] to-[#0d0f24] border border-rose-blush/25 shadow-2xl overflow-hidden flex flex-col justify-end p-4">
              {/* Envelope Lines & Texture */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 300 200" fill="none">
                  {/* Lower diagonals */}
                  <path d="M 0 200 L 150 110 L 300 200" stroke="#FF6B9A" strokeWidth="1.5" strokeOpacity="0.3" />
                  <path d="M 0 0 L 150 110 L 300 0" stroke="#FF6B9A" strokeWidth="1.5" strokeOpacity="0.2" />
                </svg>
              </div>

              {/* Rising Letter preview inside */}
              <motion.div
                animate={
                  isOpen
                    ? { y: -80, opacity: 1, scale: 1.05 }
                    : isOpeningSequence
                    ? { y: -30, opacity: 0.9 }
                    : { y: 0, opacity: 0.3 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-x-6 top-6 h-36 rounded-xl bg-gradient-to-b from-[#FFFDF9] to-[#FCEEE7] text-midnight p-4 shadow-xl flex flex-col items-center justify-center border border-gold-warm/40 pointer-events-none"
              >
                <div className="w-10 h-0.5 bg-rose-romantic/40 rounded-full mb-2" />
                <p className="font-serif-luxury font-bold text-sm text-midnight">
                  Qalbigayga Ku Socota
                </p>
                <div className="flex items-center gap-1 text-xs text-rose-deep font-semibold mt-1">
                  <span>To: Farduus Xuseen</span>
                  <Heart className="w-3 h-3 fill-rose-deep text-rose-deep inline" />
                </div>
                <div className="w-16 h-0.5 bg-rose-romantic/30 rounded-full mt-2" />
              </motion.div>

              {/* Envelope Flap (3D Open Animation) */}
              <motion.div
                animate={
                  isOpeningSequence
                    ? { rotateX: 180, zIndex: 1 }
                    : { rotateX: 0, zIndex: 20 }
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "top center" }}
                className="absolute top-0 inset-x-0 h-28 transform-style-3d pointer-events-none"
              >
                <svg className="w-full h-full drop-shadow-md" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <polygon
                    points="0,0 150,115 300,0"
                    fill="#1e2147"
                    stroke="#FFD5E2"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                </svg>
              </motion.div>

              {/* Heart Wax Seal Button */}
              <motion.div
                animate={
                  isOpeningSequence
                    ? { scale: [1, 1.3, 0], opacity: [1, 1, 0] }
                    : { scale: [1, 1.06, 1] }
                }
                transition={
                  isOpeningSequence
                    ? { duration: 0.5 }
                    : { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }
                className="relative z-30 self-center mb-6 flex items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-deep via-rose-romantic to-[#FFA0C0] p-0.5 shadow-[0_0_20px_rgba(255,107,154,0.7)] flex items-center justify-center border border-gold-warm/40">
                  <Heart className="w-7 h-7 text-white fill-white filter drop-shadow" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Action CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 w-full sm:w-auto"
          >
            <button
              onClick={handleOpenEnvelope}
              disabled={isOpeningSequence}
              className="relative group overflow-hidden w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-rose-romantic via-[#E63973] to-lavender text-white font-medium text-base sm:text-lg shadow-[0_0_30px_rgba(255,107,154,0.5)] hover:shadow-[0_0_40px_rgba(255,107,154,0.8)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border border-rose-blush/30"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              <MailOpen className="w-5 h-5 animate-bounce" />
              <span className="relative z-10 tracking-wide font-semibold">
                {LOVE_CONTENT.welcome.openButtonText}
              </span>
            </button>
          </motion.div>

          <p className="mt-4 text-xs text-rose-blush/50 tracking-wider">
            Guji warqadda ama badhanka si aad u furto farriinta
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
