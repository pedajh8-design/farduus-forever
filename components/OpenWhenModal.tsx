"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, X, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";
import { LOVE_CONTENT, OpenWhenItem } from "@/lib/love-content";

export default function OpenWhenModal() {
  const [activeNote, setActiveNote] = useState<OpenWhenItem | null>(null);

  const handleOpen = (note: OpenWhenItem) => {
    setActiveNote(note);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#FF6B9A", "#FFD5E2", "#B9A6FF"],
    });
  };

  const handleClose = () => {
    setActiveNote(null);
  };

  return (
    <section className="py-14 sm:py-20 px-3 sm:px-6 max-w-5xl mx-auto relative w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-16 w-64 sm:w-80 h-64 sm:h-80 bg-lavender/15 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-16 w-64 sm:w-80 h-64 sm:h-80 bg-rose-romantic/15 blur-[90px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14 px-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-romantic/10 border border-rose-romantic/25 text-rose-blush text-xs sm:text-sm font-medium mb-3 backdrop-blur-md">
          <Mail className="w-3.5 h-3.5 text-gold-warm" />
          <span>Farriimo Dawo Qalbi Ah</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight">
          Open When... 💌
        </h2>
        <p className="mt-2 text-rose-blush/80 text-xs sm:text-base font-light max-w-md mx-auto">
          Warqado gaar ah oo kuu diyaarsan xilli kasta oo aad dareento mid ka mid ah xaaladahan.
        </p>
      </div>

      {/* Grid of 4 Open When Note Envelopes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {LOVE_CONTENT.openWhenNotes.map((note: OpenWhenItem, idx: number) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            onClick={() => handleOpen(note)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(note);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Fur warqadda: ${note.trigger}`}
            className="group relative rounded-3xl p-5 sm:p-7 glass-panel border border-rose-blush/20 shadow-xl cursor-pointer hover:border-rose-romantic/60 hover:shadow-[0_10px_35px_rgba(255,107,154,0.3)] transition-all duration-300 flex items-center justify-between bg-gradient-to-r from-[#111438]/90 to-[#19153a]/90 hover:-translate-y-0.5 touch-manipulation select-none"
          >
            {/* Left Info */}
            <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-rose-romantic/15 border border-rose-romantic/30 flex items-center justify-center group-hover:scale-105 group-hover:bg-rose-romantic/25 transition-all shadow-[0_0_15px_rgba(255,107,154,0.2)] shrink-0">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-romantic fill-rose-romantic/50 group-hover:fill-rose-romantic transition-all" />
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-gold-warm font-semibold mb-0.5">
                  Farriin #{note.id}
                </span>
                <h3 className="text-sm sm:text-lg font-serif-luxury font-bold text-white group-hover:text-rose-blush transition-colors leading-snug">
                  {note.trigger}
                </h3>
              </div>
            </div>

            {/* Right Action Pill */}
            <div className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-rose-romantic group-hover:text-white transition-all shrink-0">
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-blush group-hover:text-white transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Dialog for Opened Love Note — Safe viewport containment */}
      <AnimatePresence>
        {activeNote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg max-h-[88dvh] overflow-y-auto glass-panel rounded-3xl p-5 sm:p-8 border border-rose-romantic/40 shadow-2xl z-10 bg-gradient-to-b from-[#181a3f] via-[#141532] to-[#0d0e22] my-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full glass-panel-subtle text-rose-blush hover:text-white hover:bg-rose-romantic/20 transition-all focus:outline-none touch-manipulation"
                aria-label="Xidh warqadda"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-5 pr-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-rose-deep to-rose-romantic flex items-center justify-center shadow-[0_0_20px_rgba(255,107,154,0.5)] shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold-warm" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-warm font-semibold">
                      Farriin Gaar Ah
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif-luxury font-bold text-white leading-tight">
                    {activeNote.title}
                  </h3>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-4 sm:p-5 rounded-2xl bg-midnight-light/80 border border-rose-blush/15 mb-5">
                <p className="text-rose-blush/95 text-sm sm:text-lg leading-relaxed font-light whitespace-pre-line">
                  {activeNote.content}
                </p>
              </div>

              {/* Signoff and Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-rose-blush/15 gap-2">
                <div>
                  <span className="block text-[10px] sm:text-xs text-rose-blush/60">Laguu qoray:</span>
                  <span className="font-script-romantic text-xl sm:text-2xl text-rose-romantic">
                    Farduus Xuseen ❤️
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-rose-romantic hover:bg-rose-deep text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-rose-romantic/30 active:scale-95 touch-manipulation"
                >
                  Waan fahmay ❤️
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
