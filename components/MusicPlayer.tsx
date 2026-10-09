"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Music, Sliders } from "lucide-react";

interface MusicPlayerProps {
  initialPlay?: boolean;
}

export default function MusicPlayer({ initialPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Audio Context & nodes for Web Audio synthesizer fallback
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isWebAudioActive = useRef(false);

  // Romantic chord progression notes (frequencies in Hz):
  // Chords: Cmaj7 -> G/B -> Am9 -> Fmaj7
  const chords = [
    [261.63, 329.63, 392.0, 493.88], // Cmaj7: C4, E4, G4, B4
    [246.94, 293.66, 392.0, 493.88], // G/B: B3, D4, G4, B4
    [220.0, 261.63, 329.63, 392.0, 493.88], // Am9: A3, C4, E4, G4, B4
    [174.61, 261.63, 329.63, 349.23, 440.0], // Fmaj7: F3, C4, E4, F4, A4
  ];

  // Play a soft bell/piano chime
  const playTone = (ctx: AudioContext, masterGain: GainNode, freq: number, delaySec: number) => {
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    // Gentle warm sine + lowpass filter for romantic softness
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delaySec);

    // Envelope: quick attack, slow gentle decay
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
        // Arpeggiate notes softly
        currentChord.forEach((freq, noteIdx) => {
          playTone(ctx, master, freq, noteIdx * 0.28);
        });

        chordIndex++;
        sequenceTimerRef.current = setTimeout(scheduleChord, 2800);
      };

      scheduleChord();
    } catch {
      // Audio autoplay policy or device without audio
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
      // Triggered by welcome button click
      startRomanticSynthesizer();
      setIsPlaying(true);
    }
    return () => {
      stopRomanticSynthesizer();
    };
  }, [initialPlay]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none">
      {/* Volume slider popover */}
      {showVolumeSlider && (
        <div className="glass-panel rounded-2xl p-3 border border-rose-blush/25 shadow-xl flex items-center gap-2 animate-fadeIn bg-midnight-light/95">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-24 accent-rose-romantic h-1.5 bg-rose-blush/20 rounded-lg cursor-pointer"
            aria-label="Volume slider"
          />
          <span className="text-xs text-rose-blush font-mono">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
      )}

      {/* Main Music Control Capsule */}
      <div className="glass-panel rounded-full p-2 border border-rose-blush/25 shadow-2xl flex items-center gap-2 bg-[#12163b]/90 backdrop-blur-md">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlay}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            isPlaying
              ? "bg-gradient-to-r from-rose-romantic to-rose-deep text-white shadow-rose-romantic/40"
              : "bg-white/10 hover:bg-white/20 text-rose-blush"
          }`}
          aria-label={isPlaying ? "Hakadi muusigga" : "Daar muusigga"}
          title={isPlaying ? "Hakadi muusigga" : "Daar muusigga"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-white" />
          ) : (
            <Play className="w-5 h-5 fill-rose-blush ml-0.5" />
          )}
        </button>

        {/* Music Indicator / Visualizer Bars */}
        <div className="flex items-center gap-1 px-2">
          {[40, 70, 95, 60, 45].map((height, i) => (
            <span
              key={i}
              className={`w-1 rounded-full bg-rose-romantic transition-all ${
                isPlaying ? "animate-pulse" : "h-1 opacity-30"
              }`}
              style={{
                height: isPlaying ? `${height}%` : "4px",
                maxHeight: "18px",
                animationDelay: `${i * 0.15}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="p-2 text-rose-blush hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label={isMuted ? "Furo codka" : "Xidh codka"}
          title={isMuted ? "Furo codka" : "Xidh codka"}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 text-rose-romantic" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>

        {/* Volume Slider Toggle */}
        <button
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          className={`p-2 rounded-full transition-colors ${
            showVolumeSlider ? "text-rose-romantic bg-white/10" : "text-rose-blush hover:text-white hover:bg-white/5"
          }`}
          aria-label="Volume settings"
          title="Volume settings"
        >
          <Sliders className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
