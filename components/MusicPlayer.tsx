"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Sliders } from "lucide-react";

interface MusicPlayerProps {
  initialPlay?: boolean;
}

export default function MusicPlayer({ initialPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isWebAudioActive = useRef(false);

  // Chords: Cmaj7 -> G/B -> Am9 -> Fmaj7
  const chords = [
    [261.63, 329.63, 392.0, 493.88],
    [246.94, 293.66, 392.0, 493.88],
    [220.0, 261.63, 329.63, 392.0, 493.88],
    [174.61, 261.63, 329.63, 349.23, 440.0],
  ];

  const playTone = (ctx: AudioContext, masterGain: GainNode, freq: number, delaySec: number) => {
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delaySec);

    const now = ctx.currentTime + delaySec;
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.25, now + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 2.8);
  };

  const startRomanticSynthesizer = () => {
    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;

      if (!audioCtxRef.current) {
        const ctx = new AudioCtxClass();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(isMuted ? 0 : volume, ctx.currentTime);
        masterGain.connect(ctx.destination);

        audioCtxRef.current = ctx;
        gainNodeRef.current = masterGain;
      }

      const ctx = audioCtxRef.current;
      const master = gainNodeRef.current;
      if (!ctx || !master) return;

      if (ctx.state === "suspended") {
        ctx.resume();
      }

      isWebAudioActive.current = true;
      let chordIndex = 0;

      const scheduleChord = () => {
        if (!isWebAudioActive.current || !ctx || !master) return;

        const currentChord = chords[chordIndex % chords.length];
        currentChord.forEach((freq, noteIdx) => {
          playTone(ctx, master, freq, noteIdx * 0.28);
        });

        chordIndex++;
        sequenceTimerRef.current = setTimeout(scheduleChord, 2800);
      };

      scheduleChord();
    } catch {
      // Audio autoplay policy
    }
  };

  const stopRomanticSynthesizer = () => {
    isWebAudioActive.current = false;
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopRomanticSynthesizer();
      setIsPlaying(false);
    } else {
      startRomanticSynthesizer();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        newMuted ? 0 : volume,
        audioCtxRef.current.currentTime
      );
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (isMuted) setIsMuted(false);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (initialPlay && !isPlaying) {
      startRomanticSynthesizer();
      setIsPlaying(true);
    }
    return () => {
      stopRomanticSynthesizer();
    };
  }, [initialPlay]);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 select-none">
      {/* Volume slider popover */}
      {showVolumeSlider && (
        <div className="glass-panel rounded-2xl p-2.5 sm:p-3 border border-rose-blush/25 shadow-xl flex items-center gap-2 animate-fadeIn bg-midnight-light/95">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 sm:w-24 accent-rose-romantic h-1.5 bg-rose-blush/20 rounded-lg cursor-pointer"
            aria-label="Volume slider"
          />
          <span className="text-[11px] sm:text-xs text-rose-blush font-mono">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
      )}

      {/* Main Music Control Capsule */}
      <div className="glass-panel rounded-full p-1.5 sm:p-2 border border-rose-blush/25 shadow-2xl flex items-center gap-1.5 sm:gap-2 bg-[#12163b]/90 backdrop-blur-md">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlay}
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md touch-manipulation ${
            isPlaying
              ? "bg-gradient-to-r from-rose-romantic to-rose-deep text-white shadow-rose-romantic/40"
              : "bg-white/10 hover:bg-white/20 text-rose-blush"
          }`}
          aria-label={isPlaying ? "Hakadi muusigga" : "Daar muusigga"}
          title={isPlaying ? "Hakadi muusigga" : "Daar muusigga"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-blush ml-0.5" />
          )}
        </button>

        {/* Music Indicator / Visualizer Bars */}
        <div className="flex items-center gap-1 px-1.5 sm:px-2">
          {[40, 70, 95, 60, 45].map((height, i) => (
            <span
              key={i}
              className={`w-0.5 sm:w-1 rounded-full bg-rose-romantic transition-all ${
                isPlaying ? "animate-pulse" : "h-1 opacity-30"
              }`}
              style={{
                height: isPlaying ? `${height}%` : "3px",
                maxHeight: "16px",
                animationDelay: `${i * 0.15}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="p-1.5 sm:p-2 text-rose-blush hover:text-white rounded-full hover:bg-white/10 transition-colors touch-manipulation"
          aria-label={isMuted ? "Furo codka" : "Xidh codka"}
          title={isMuted ? "Furo codka" : "Xidh codka"}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-romantic" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </button>

        {/* Volume Slider Toggle */}
        <button
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          className={`p-1.5 sm:p-2 rounded-full transition-colors touch-manipulation ${
            showVolumeSlider ? "text-rose-romantic bg-white/10" : "text-rose-blush hover:text-white hover:bg-white/5"
          }`}
          aria-label="Volume settings"
          title="Volume settings"
        >
          <Sliders className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}
