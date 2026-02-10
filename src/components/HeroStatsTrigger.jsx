import Image from "next/image";

export default function HeroStatsTrigger() {
  return (
    <div className="relative w-full h-96 animate-slide-left will-animate">
      <Image
        src="/about_spice_img.jpg"
        alt="Indian spices in wooden bowls"
        fill
        priority
        className="rounded-2xl shadow-xl object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={70}
      />

      {/* Stats Badge */}
      <div
        className="
          absolute -bottom-4 -left-4
          glass-thick
          p-5 rounded-xl
          shadow-lg
          border border-border
          animate-fade-up delay-200
        "
      >
        <p className="text-sm font-bold glass-text">
          10+ Countries
        </p>
        <p className="text-xs font-medium glass-text-muted">
          Worldwide Export
        </p>
      </div>
    </div>
  );
}
