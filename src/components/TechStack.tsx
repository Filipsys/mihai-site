import { SectionHeader } from "@/components/SectionHeader";
import {
  StackIcon,
  NextJSIcon,
  TailwindCSSIcon,
  ShadcnUIIcon,
  NodeJSIcon,
  LinkArrow,
} from "@/icons/dev-icons";

import type { ComponentType } from "react";

const TechCard = (props: {
  title: string;
  link: string;
  icon: ComponentType;
}) => (
  <div className="flex justify-between items-center p-2 pr-4 text-text-secondary text-lg bg-background border-[1px] border-white/5">
    <div className="flex gap-2 items-center">
      <div className="h-full p-2 bg-white/5 border-[1px] border-white/5 flex items-center justify-center aspect-square fill-secondary *:size-6">
        <props.icon />
      </div>

      <p>{props.title}</p>
    </div>

    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="*:text-text-secondary"
    >
      <LinkArrow />
    </a>
  </div>
);

export const TechStack = () => (
  <div className="bg-primary p-4 border-[1px] border-white/5">
    <SectionHeader title="My tech stack" icon={StackIcon} />

    <p>My favourite tech stack I use on my projects.</p>

    <div className="w-full h-8" />

    <div className="grid gap-2 grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2">
      {(
        [
          ["Next.js", "https://nextjs.org", NextJSIcon],
          ["Tailwind", "https://tailwindcss.com", TailwindCSSIcon],
          ["Shadcn/ui", "https://ui.shadcn.com", ShadcnUIIcon],
          ["Node.js", "https://nodejs.org", NodeJSIcon],
        ] as [string, string, ComponentType][]
      ).map((element) => (
        <TechCard
          title={element[0]}
          icon={element[2]}
          link={element[1]}
          key={`techcard-${element[0]}-${element[1]}`}
        />
      ))}
    </div>
  </div>
);
