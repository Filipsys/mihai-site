import { WorkIcon } from "@/icons/dev-icons";
import { SectionHeader } from "@/components/SectionHeader";

export const Projects = () => (
  <div className="p-4 border-[1px] border-white/10">
    <SectionHeader title="Projects" icon={WorkIcon} />

    <p>Here are some of my projects I have worked on.</p>

    <div className="w-full h-8" />

    <div className="relative">
      <div className="flex gap-2 pb-8 overflow-hidden *:h-24 before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-neutral-900 before:via-transparent before:to-neutral-900">
        {[
          "catto.webp",
          "delvfox.webp",
          "mega-foxy.webp",
          "nix-services.webp",
          "shop.webp",
        ].map((element, index) => (
          <img
            src={`project-images/${element}`}
            key={`showcase-${element}-${
              // biome-ignore lint/suspicious/noArrayIndexKey: Key will never be the same here
              index
            }`}
            alt={element}
          />
        ))}
      </div>

      <a
        href="/projects"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap flex gap-2 py-2 px-4 bg-neutral-800 border-[1px] border-neutral-700 font-semibold text-purple-300 *:first:size-5 items-center"
      >
        <WorkIcon />

        <p>View all projects</p>
      </a>
    </div>
  </div>
);
