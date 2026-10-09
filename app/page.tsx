"use client";

import React, { useState, useRef } from "react";
import WelcomeEnvelope from "@/components/WelcomeEnvelope";
import HeroSection from "@/components/HeroSection";
import { LoveLetter } from "@/components/LoveLetter";
import LoveCounter from "@/components/LoveCounter";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import OpenWhenModal from "@/components/OpenWhenModal";
import WishForFuture from "@/components/WishForFuture";
import SurpriseSection from "@/components/SurpriseSection";
import FinalRomanticScene from "@/components/FinalRomanticScene";
import MusicPlayer from "@/components/MusicPlayer";
import ShareButton from "@/components/ShareButton";
import FloatingPetalsAndHearts from "@/components/FloatingPetalsAndHearts";
import { Heart, Sparkles } from "lucide-react";
import { LOVE_CONTENT } from "@/lib/love-content";

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [startMusic, setStartMusic] = useState(false);
  const letterRef = useRef<HTMLElement | null>(null);

  const handleOpenFromEnvelope = () => {
    setShowEnvelope(false);
    setStartMusic(true);
    // Smooth scroll down to letter after envelope dissolves
    setTimeout(() => {
      letterRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  const handleScrollToLetter = () => {
    letterRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReadAgain = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      letterRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  return (
    <main className="relative min-h-screen bg-midnight text-white selection:bg-rose-romantic selection:text-white">
      {/* Background Floating Petals & Twinkling Night Stars */}
      <FloatingPetalsAndHearts />

      {/* Opening Surprise Experience */}
      {showEnvelope && (
        <WelcomeEnvelope onOpenLetter={handleOpenFromEnvelope} />
      )}

      {/* Top Floating Romantic Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-30 px-4 sm:px-8 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full glass-panel-subtle border border-rose-blush/20 backdrop-blur-md shadow-lg shadow-black/20">
            <Heart className="w-4 h-4 fill-rose-romantic text-rose-romantic animate-pulse" />
            <span className="font-serif-luxury font-bold text-sm tracking-wide text-white">
              {LOVE_CONTENT.meta.siteName}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="pointer-events-auto flex items-center gap-2">
            <ShareButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onScrollToLetter={handleScrollToLetter} />

      {/* Main Love Letter */}
      <LoveLetter ref={letterRef} onReadAgain={handleReadAgain} />

      {/* Love Counter Section */}
      <LoveCounter />

      {/* Reasons I Love You Interactive Flip Cards */}
      <ReasonsILoveYou />

      {/* Open When... Modal Love Letters */}
      <OpenWhenModal />

      {/* Wish For Our Future Sunset Scene */}
      <WishForFuture />

      {/* Surprise Button Section */}
      <SurpriseSection />

      {/* Final Romantic Closing Scene */}
      <FinalRomanticScene />

      {/* Background Music Player Control */}
      <MusicPlayer initialPlay={startMusic} />
    </main>
  );
}
