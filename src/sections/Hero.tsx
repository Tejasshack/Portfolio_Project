import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarsBackground from "@/components/StarsBackground";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 lg:py-60">
      {/* Grain */}
      <div
        className="absolute inset-0 -z-40 opacity-[0.08] bg-repeat"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      {/* Stars Background */}
      <StarsBackground />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-20 blur-[120px]" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Avatar */}
          <div className="relative">
            <Image
              src={memojiImage}
              alt="Person Looking"
              className="size-[104px] rounded-full ring-1 ring-white/10 shadow-lg"
            />
            <span className="absolute -bottom-1 -right-1 size-4 rounded-full bg-green-500 ring-2 ring-black" />
          </div>

          {/* Availability pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium tracking-wide">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-2xl">
            <h1 className="mt-8 text-4xl md:text-6xl font-semibold font-serif leading-tight tracking-tight">
              Building thoughtful
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                web experiences
              </span>
              that drive change
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base md:text-lg text-white/60">
              I design and build performant, scalable web applications with a
              focus on clarity, usability, and long-term impact.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
            <button className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6 transition hover:border-white/30">
              <span className="font-medium">Explore my work</span>
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-gray-900 transition hover:bg-white/90">
              <span>👋</span>
              <span className="font-medium">Let’s connect</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
