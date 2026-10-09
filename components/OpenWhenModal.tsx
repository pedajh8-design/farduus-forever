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
    // Subtle heart burst
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
    <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-16 w-80 h-80 bg-lavender/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-16 w-80 h-80 bg-rose-romantic/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-romantic/10 border border-rose-romantic/25 text-rose-blush text-xs sm:text-sm font-medium mb-3 backdrop-blur-md">
          <Mail className="w-3.5 h-3.5 text-gold-warm" />
          <span>Farriimo Dawo Qalbi Ah</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-tight">
          Open When... 💌
        </h2>
        <p className="mt-3 text-rose-blush/80 text-sm sm:text-base font-light max-w-md mx-auto">
          Warqado gaar ah oo kuu diyaarsan xilli kasta oo aad dareento mid ka mid ah xaaladahan.
        </p>
      </div>

      {/* Grid of 4 Open When Note Envelopes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {LOVE_CONTENT.openWhenNotes.map((note: OpenWhenItem, idx: number) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
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
            className="group relative rounded-3xl p-6 sm:p-7 glass-panel border border-rose-blush/20 shadow-xl cursor-pointer hover:border-rose-romantic/60 hover:shadow-[0_10px_35px_rgba(255,107,154,0.3)] transition-all duration-300 flex items-center justify-between bg-gradient-to-r from-[#111438]/90 to-[#19153a]/90 hover:-translate-y-1"
          >
            {/* Left Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-romantic/15 border border-rose-romantic/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-romantic/25 transition-all shadow-[0_0_15px_rgba(255,107,154,0.2)]">
                <Heart className="w-6 h-6 text-rose-romantic fill-rose-romantic/50 group-hover:fill-rose-romantic transition-all" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold-warm font-semibold mb-1">
                  Farriin #{note.id}
                </span>
                <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-white group-hover:text-rose-blush transition-colors">
                  {note.trigger}
                </h3>
              </div>
            </div>

            {/* Right Action Pill */}
            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-rose-romantic group-hover:text-white transition-all">
              <Send className="w-4 h-4 text-rose-blush group-hover:text-white transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Dialog for Opened Love Note */}
      <AnimatePresence>
        {activeNote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-rose-romantic/40 shadow-2xl z-10 bg-gradient-to-b from-[#181a3f] via-[#141532] to-[#0d0e22] my-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full glass-panel-subtle text-rose-blush hover:text-white hover:bg-rose-romantic/20 transition-all focus:outline-none"
                aria-label="Xidh warqadda"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-deep to-rose-romantic flex items-center justify-center shadow-[0_0_20px_rgba(255,107,154,0.5)]">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
                    <span className="text-xs uppercase tracking-widest text-gold-warm font-semibold">
                      Farriin Gaar Ah
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
                    {activeNote.title}
                  </h3>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-5 rounded-2xl bg-midnight-light/80 border border-rose-blush/15 mb-6">
                <p className="text-rose-blush/95 text-base sm:text-lg leading-relaxed font-light whitespace-pre-line">
                  {activeNote.content}
                </p>
              </div>

              {/* Signoff and Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-rose-blush/15">
                <div>
                  <span className="block text-xs text-rose-blush/60">Laguu qoray kalgacal:</span>
                  <span className="font-script-romantic text-2xl text-rose-romantic">
                    Farduus Xuseen ❤️
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-full bg-rose-romantic hover:bg-rose-deep text-white text-sm font-semibold transition-all shadow-md shadow-rose-romantic/30 hover:scale-105 active:scale-95"
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
