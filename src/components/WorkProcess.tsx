import { SectionHeader } from "@/components/SectionHeader";
import {
  SpinArrowsIcon,
  ClientThoughtsIcon,
  CodeTagIcon,
  TestingFlaskIcon,
  RocketIcon,
} from "@/icons/dev-icons";

import type { RefObject, ComponentType } from "react";

const PROCESS_DATA = [
  [
    crypto.randomUUID(),
    "Project Breif",
    "We will discuss your project and its goals.",
    ClientThoughtsIcon,
  ],
  [
    crypto.randomUUID(),
    "Design & Develop",
    "I will design and develop your website according to your needs.",
    CodeTagIcon,
  ],
  [
    crypto.randomUUID(),
    "Testing & Review",
    "I will let you test the website and make any changes if needed.",
    TestingFlaskIcon,
  ],
  [
    crypto.randomUUID(),
    "Launch",
    "I will give you the source code and help you with the launch.",
    RocketIcon,
  ],
] as [string, string, string, ComponentType][];

const ProcessCard = (props: {
  title: string;
  description: string;
  index: number;
  icon: ComponentType;
}) => (
  <div className="relative md:cursor-pointer p-4 h-full border-[1px] group border-white/5 bg-neutral-950/25 flex gap-4 *:first:text-purple-300 *:first:h-fit md:items-center md:py-2 lg:items-start lg:cursor-auto">
    <props.icon />

    <div className="flex w-full h-full justify-between md:items-center lg:items-start">
      <div className="flex flex-col">
        <p className="text-neutral-200 text-lg">{props.title}</p>
        <p className="md:hidden lg:block">{props.description}</p>
      </div>

      <p className="italic text-base text-neutral-200/25">#{props.index}</p>
    </div>

    <div className="hidden cursor-auto text-base md:group-hover:block lg:group-hover:hidden absolute bg-neutral-900 z-10 p-2 px-4 border-[1px] border-white/5 bottom-0 left-0 translate-y-full w-[calc(100%+2px)] -translate-x-[1px]">
      {/* I have to add the -1px translation to compensate for the 1px border */}
      <p>{props.description}</p>
    </div>
  </div>
);

export const WorkProcess = (props: {
  ref: RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={props.ref}
    className="h-fit flex flex-col p-4 border-[1px] border-white/10"
  >
    <SectionHeader title="Work process" icon={SpinArrowsIcon} />

    <p>The work process explained in 4 simple steps.</p>

    <div className="w-full h-8" />

    <div className="grid grid-rows-4 grid-cols-1 gap-2">
      {PROCESS_DATA.map((element, index) => (
        <ProcessCard
          key={element[0]}
          title={element[1]}
          description={element[2]}
          icon={element[3]}
          index={index + 1}
        />
      ))}
    </div>
  </div>
);
