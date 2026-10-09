"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Clock, Calendar, Sparkles } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function LoveCounter() {
  const [customDate, setCustomDate] = useState<string | null>(
    LOVE_CONTENT.relationshipStartDate
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed | null>(null);

  useEffect(() => {
    if (!customDate) {
      setTimeElapsed(null);
      return;
    }

    const calculateTime = () => {
      const start = new Date(customDate).getTime();
      const now = new Date().getTime();
      const difference = now - start;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeElapsed({ days, hours, minutes, seconds });
      } else {
        setTimeElapsed({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [customDate]);

  return (
    <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center relative">
      <div className="absolute inset-0 bg-gradient-radial from-rose-romantic/10 via-transparent to-transparent pointer-events-none" />

      {/* Header Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-romantic/10 border border-rose-romantic/25 text-rose-blush text-xs sm:text-sm font-medium mb-4 backdrop-blur-md">
        <Clock className="w-3.5 h-3.5 text-gold-warm" />
        <span>Waqtiga Jacaylkeenna</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white mb-4">
        Our Love Journey
      </h2>

      {/* Main Display Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-panel rounded-3xl p-6 sm:p-10 border border-rose-blush/20 shadow-2xl relative overflow-hidden"
      >
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-rose-romantic to-transparent" />

        {/* If date is configured, show ticking timer */}
        {timeElapsed ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Maalmood", value: timeElapsed.days },
                { label: "Saacadood", value: timeElapsed.hours },
                { label: "Daqiiqadood", value: timeElapsed.minutes },
                { label: "Ilbiriqsiyo", value: timeElapsed.seconds },
              ].map((unit, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-midnight-light/80 border border-rose-blush/15 shadow-inner flex flex-col items-center"
                >
                  <span className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white text-glow-rose">
                    {unit.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-rose-blush/70 mt-1">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-rose-blush text-sm sm:text-base font-medium">
              Ilbiriqsi kasta oo aan ku jeclahay waa mid qaali ii ah. ❤️
            </p>
          </div>
        ) : (
          /* MANDATED REQUIREMENT: When relationshipStartDate is not configured, show this exact message */
          <div className="py-4 px-2">
            <div className="w-14 h-14 rounded-full bg-rose-romantic/15 border border-rose-romantic/30 mx-auto flex items-center justify-center mb-5 text-rose-romantic shadow-[0_0_20px_rgba(255,107,154,0.3)] animate-pulse">
              <Heart className="w-7 h-7 fill-rose-romantic" />
            </div>

            <p className="text-xl sm:text-2xl font-serif-luxury text-white font-medium max-w-xl mx-auto leading-relaxed">
              {LOVE_CONTENT.fallbackRelationshipText}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-rose-blush/70 max-w-md mx-auto leading-relaxed">
              Muddada jacaylku maaha tiro maalmood oo kaliya, balse waa dareen qoto dheer oo qalbi kasta ku nool maalin kasta.
            </p>
          </div>
        )}

        {/* Optional Interactive Date Setter */}
        <div className="mt-8 pt-6 border-t border-rose-blush/10 flex flex-col items-center">
          {!showDatePicker ? (
            <button
              onClick={() => setShowDatePicker(true)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold-warm/90 hover:text-gold-warm hover:underline transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {customDate
                  ? "Beddel Taariikhda Bilowga 📅"
                  : "Ma rabtaa inaad xisaabiso taariikh gaar ah? 📅"}
              </span>
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs"
            >
              <input
                type="date"
                defaultValue={customDate || "2024-01-01"}
                onChange={(e) => setCustomDate(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-midnight-light border border-rose-blush/30 text-white text-sm focus:outline-none focus:border-rose-romantic"
              />
              <button
                onClick={() => setShowDatePicker(false)}
                className="px-4 py-2 rounded-xl bg-rose-romantic text-white text-xs font-semibold whitespace-nowrap hover:bg-rose-deep transition-colors"
              >
                Xaqiiji ✨
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
