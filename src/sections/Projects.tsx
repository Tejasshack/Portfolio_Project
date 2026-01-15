import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent text-center bg-clip-text">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center mt-4 text-white/60  max-w-md mx-auto lg:text-xl">
          See How I transform concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] 
              after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent 
              after:rounded-3xl after:outline-white/20
              mb-10 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:outline-2 after:outline after:-outline-offset-2 hover:after:scale-105 transition-all duration-300 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 bg-repeat"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                {/* Left: Content */}
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold 
                  uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white cursor-pointer px-6 h-12 rounded-xl font-semibold inline-flex items-center gap-2 mt-6 text-gray-950 hover:bg-gray-200 transition">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="w-5 h-5" />
                    </button>
                  </a>
                </div>

                {/* Right: Image */}
                <div className="relative mt-8 lg:mt-0">
                  <div className="relative lg:absolute lg:right-[-220px] lg:top-1/2 lg:-translate-y-1/2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="
        
        shadow-2xl
        

        w-full
        md:w-[560px]
        lg:w-[630px]
        lg:max-w-none
        
         -mb-4 md:-mb-0
      "
                      priority
                    />
                  </div>

                  {/* Card mask illusion */}
                  <div className="pointer-events-none hidden lg:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-800 to-transparent z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
