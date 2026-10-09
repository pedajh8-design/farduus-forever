import Link from "next/link";
import { Heart, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-midnight text-white px-6 text-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 w-96 h-96 bg-rose-romantic/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 w-80 h-80 bg-lavender/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md p-8 glass-panel rounded-3xl border border-rose-blush/20 shadow-2xl">
        <div className="inline-flex p-4 rounded-full bg-rose-romantic/10 text-rose-romantic mb-6 border border-rose-romantic/30 shadow-[0_0_20px_rgba(255,107,154,0.4)] animate-pulse">
          <Heart className="w-12 h-12 fill-rose-romantic" />
        </div>
        <h1 className="text-3xl font-serif-luxury font-bold text-white mb-3">
          Boggan Ma Jiro
        </h1>
        <p className="text-rose-blush/80 leading-relaxed mb-8">
          Boggan ma jiro, laakiin jacaylkaygu wuxuu jiraa mar kasta oo aan neefsanayo. Ku noqo farriintaada macaan. ❤️
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-romantic to-rose-deep text-white font-medium shadow-lg shadow-rose-romantic/30 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          Ku Noqo Farriintaada 💌
        </Link>
      </div>
    </div>
  );
}
