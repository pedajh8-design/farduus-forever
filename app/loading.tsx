export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight text-white px-4">
      <div className="relative flex items-center justify-center">
        {/* Glowing pulse rings */}
        <div className="absolute w-24 h-24 rounded-full bg-rose-romantic/20 animate-ping" />
        <div className="absolute w-32 h-32 rounded-full bg-lavender/10 animate-pulse" />
        {/* Heart icon */}
        <div className="text-5xl animate-bounce filter drop-shadow-[0_0_15px_rgba(255,107,154,0.8)]">
          ❤️
        </div>
      </div>
      <p className="mt-8 font-serif-luxury text-lg tracking-wide text-rose-blush animate-pulse">
        Waxaan kuu diyaarinayaa jacaylkayga…
      </p>
    </div>
  );
}
