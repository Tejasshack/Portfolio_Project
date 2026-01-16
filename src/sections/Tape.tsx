import StarIcon from "@/assets/icons/star.svg";
export const TapeSection = () => {
  const words = [
    "Developer",
    "Designer",
    "Creator",
    "Innovator",
    "Builder",
    "Problem Solver",
    "Engineer",
    "Architect",
    "Product Thinker",
    "System Designer",
    "Creative Technologist",
    "UX Focused",
    "Performance Driven",
    "Detail Oriented",
    "Scalable Mindset",
    "Solution Oriented",
    "Impact Focused",
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 px-8 animate-tapeScroll">
            {words.map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-start">
                <span className="text-gray-900 font-extrabold text-sm uppercase">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
