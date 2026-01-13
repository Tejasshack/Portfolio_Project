import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person Looking"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-semibold">
              Available for new Projects
            </div>
          </div>

          <h1 className="text-4xl font-bold font-serif mt-8 tracking-wide">
            Building Web Apps for change
          </h1>

          <p className="mt-4 text-center max-w-md text-white/60">
            some random lorem ipsum text
          </p>

          <button className="inline-flex items-center gap-2 border-white/15 px-6 h-12  rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown classname="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
