import { WorkIcon } from "@/icons/dev-icons";
import { SectionHeader } from "@/components/SectionHeader";
import { PROJECT_FILE_NAMES } from "@/constants";

const Carousel = (props: { direction: "left" | "right" }) => (
  <div className="relative h-24 w-full">
    <div
      className={`absolute flex flex-nowrap gap-2 h-24 ${props.direction === "left" ? "animate-slide-left" : "animate-slide-right"}`}
    >
      {(props.direction === "left"
        ? [...PROJECT_FILE_NAMES, ...PROJECT_FILE_NAMES]
        : [...PROJECT_FILE_NAMES, ...PROJECT_FILE_NAMES].reverse()
      ).map((element, index) => (
        <img
          src={`project-images/${element[0]}`}
          key={`showcase-${index}-${element[1]}`}
          alt={element[0]}
        />
      ))}
    </div>
  </div>
);

export const Projects = () => (
  <div className="bg-primary p-4 border-[1px] border-white/5">
    <SectionHeader title="Projects" icon={WorkIcon} />

    <p>Here are some of my projects I have worked on.</p>

    <div className="w-full h-8" />

    <div className="relative">
      <div className="flex gap-2 pb-8 overflow-hidden *:pointer-events-none before:z-10 before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-primary before:via-transparent before:to-primary">
        <Carousel direction="left" />
      </div>

      <a
        href="/projects"
        className="z-20 absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap flex gap-2 py-2 px-4 bg-primary border-[1px] border-white/5 font-semibold text-secondary *:first:size-5 items-center"
      >
        <WorkIcon />

        <p>View all projects</p>
      </a>
    </div>
  </div>
);
