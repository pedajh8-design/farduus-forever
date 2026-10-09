"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Smile, ShieldCheck, Palette, HeartHandshake, Stars, RotateCw } from "lucide-react";
import { LOVE_CONTENT, ReasonItem } from "@/lib/love-content";

const iconMap: Record<string, React.ReactNode> = {
  Smile: <Smile className="w-6 h-6 text-rose-romantic" />,
  ShieldHeart: <ShieldCheck className="w-6 h-6 text-gold-warm" />,
  Sparkles: <Palette className="w-6 h-6 text-lavender" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-blush" />,
  Stars: <Stars className="w-6 h-6 text-gold-warm" />,
};

export default function ReasonsILoveYou() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-romantic/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-romantic/10 border border-rose-romantic/25 text-rose-blush text-xs sm:text-sm font-medium mb-3 backdrop-blur-md">
          <Heart className="w-3.5 h-3.5 text-rose-romantic fill-rose-romantic" />
          <span>Sababaha Qalbigayga Ku Beeray Jacaylkaaga</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-tight">
          Reasons I Love You
        </h2>
        <p className="mt-3 text-rose-blush/80 text-sm sm:text-base font-light max-w-lg mx-auto">
          Sababo aan la soo koobi karin, laakiin halkan waxa ku yaal dhowr ka mid ah kuwa qalbigayga ugu weyn. Guji kaadh kasta si aad u aragto farriinta dahsoon. ✨
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {LOVE_CONTENT.reasons.map((reason: ReasonItem, index: number) => {
          const isFlipped = !!flippedCards[reason.id];

          return (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="perspective-1000 h-72 sm:h-80 cursor-pointer group"
              onClick={() => toggleCard(reason.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleCard(reason.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Kaadhka sababta: ${reason.title}. Guji si aad u rogto.`}
            >
              {/* Card Container with 3D Flip */}
              <div
                className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl p-6 sm:p-8 glass-panel border border-rose-blush/20 shadow-xl flex flex-col justify-between group-hover:border-rose-romantic/50 group-hover:shadow-[0_10px_35px_rgba(255,107,154,0.25)] transition-all bg-gradient-to-br from-[#12163b]/90 to-[#0c0f2b]/95">
                  {/* Decorative top icon and number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-rose-romantic/15 border border-rose-romantic/30 flex items-center justify-center shadow-inner">
                      {iconMap[reason.iconName] || <Heart className="w-6 h-6 text-rose-romantic" />}
                    </div>
                    <span className="text-xs font-serif-luxury font-bold text-gold-warm px-3 py-1 rounded-full bg-gold-warm/10 border border-gold-warm/25">
                      #{reason.id}
                    </span>
                  </div>

                  {/* Main Reason Starter Title */}
                  <div className="my-auto">
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white leading-snug">
                      &ldquo;{reason.title}&rdquo;
                    </h3>
                  </div>

                  {/* Card Bottom Hint */}
                  <div className="flex items-center justify-between pt-4 border-t border-rose-blush/10 text-xs text-rose-blush/70">
                    <span className="flex items-center gap-1.5 group-hover:text-rose-romantic transition-colors">
                      <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                      Guji si aad u rogto
                    </span>
                    <Heart className="w-4 h-4 fill-rose-romantic/40 text-rose-romantic" />
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-6 sm:p-8 glass-panel border border-rose-romantic/40 shadow-2xl flex flex-col justify-between bg-gradient-to-br from-[#2a1331]/95 to-[#120f26]/98">
                  {/* Top Header on Back */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-warm" />
                      <span className="text-xs uppercase tracking-wider text-rose-blush font-semibold">
                        Qalbigayga
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-romantic/20 flex items-center justify-center">
                      <Heart className="w-4 h-4 fill-rose-romantic text-rose-romantic" />
                    </div>
                  </div>

                  {/* Deep Romantic Message */}
                  <div className="my-auto">
                    <p className="text-rose-blush text-sm sm:text-base leading-relaxed font-light">
                      {reason.detail}
                    </p>
                  </div>

                  {/* Bottom Return Hint */}
                  <div className="pt-4 border-t border-rose-blush/15 flex items-center justify-between text-xs text-rose-blush/70">
                    <span>Guji mar kale si aad u celiso</span>
                    <span className="text-gold-warm">❤️</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
