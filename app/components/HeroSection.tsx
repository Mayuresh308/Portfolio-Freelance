"use client";
import Image from "next/image";

export default function HeroSection() {
  // 👇 Scroll handler
  const handleScrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#3B1E78] via-[#4B2A9E] to-[#6C3BFF] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20"
    >
      {/* ✨ Layer 1: White dotted sprinkle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

      {/* ✨ Layer 2: Subtle noise texture for realism */}
      <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-15 pointer-events-none"></div>

      {/* Left Section */}
      <div className="relative z-10 max-w-2xl space-y-8">
        {/* Badge */}
        <div className="inline-block mt-10 mb-4 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm font-medium backdrop-blur-md">
          Creative Developer
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Crafting Digital <br />
          Solutions That <br />
          Matter
        </h1>

        {/* Description */}
        <p className="text-lg text-white/80 max-w-lg">
          I design and develop exceptional digital experiences blending
          creativity, code, and strategy to bring ideas to life. From elegant
          user interfaces to robust full-stack solutions, I turn concepts into
          seamless, high-performing products.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScrollToContact}
          className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-purple-50 transition cursor-pointer"
        >
          Get Started Today
        </button>
      </div>

      {/* Right Section (Phone Mockup) - Hidden on mobile */}
      <div className="relative mt-16 md:mt-0 md:w-1/2 flex justify-center hidden md:flex">
        {/* Main phone mockup video (horizontal) */}
        <video
          src="/videos/phoneVideo2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="z-10 drop-shadow-2xl rounded-[1.5rem] border-4 border-white/10 w-[800px] h-[400px] object-cover"
        />
      </div>
    </section>
  );
}
