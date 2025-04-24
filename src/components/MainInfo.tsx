import { Tag } from "@/components/Tag";
import { Badge } from "@/components/Badge";
import {
  GlobeIcon,
  PinIcon,
  GlobalTimeIcon,
  CoffeeIcon,
  HomeIcon,
  CalendarIcon,
  MailIcon,
  GithubIcon,
} from "@/icons/dev-icons";

import type { ComponentType } from "react";

export const MainInfo = () => (
  <div className="flex flex-col gap-4 p-4 border-[1px] border-white/10">
    <div className="flex gap-4">
      <img
        src="cat-profile-picture.webp"
        alt="profile-picture"
        className="size-24"
      />

      <div>
        <Badge title="Available to Work" />

        <p className="text-purple-300 text-3xl font-bold">Mihai</p>
        <p>
          I'm a{" "}
          <span className="text-purple-300 font-bold">
            full-stack developer
          </span>
        </p>
      </div>
    </div>

    <div className="flex gap-2 flex-wrap p-2 bg-neutral-950/25 border-[1px] border-white/5">
      {/* Is this actually better than using
			multiple <Tag /> elements? I thought it
			would be better, look more compact and
			feel like better code, but it just seems
			like overdoing it. I'll just leave it be,
			I spent 10 minutes on refactoring this. */}

      {(
        [
          ["English & Romanian", GlobeIcon],
          ["Romania", PinIcon],
          ["UTC+3", GlobalTimeIcon],
          ["Coffee Addict", CoffeeIcon],
          ["Freelancer", HomeIcon],
          ["17 y/o", CalendarIcon],
        ] as [string, ComponentType][]
      ).map((element, index) => (
        <Tag
          title={element[0]}
          icon={element[1]}
          key={`tag-${element[0]}-${index}`}
        />
      ))}
    </div>

    <div className="flex gap-4 font-semibold *:grow *:flex *:gap-2 *:items-center *:justify-center">
      <a
        href="mailto:"
        target="_blank"
        rel="noreferrer"
        type="button"
        className="py-2 bg-blue-300 text-neutral-800"
      >
        <MailIcon />

        <p>Hire me</p>
      </a>

      <a
        href="https://github.com/kkmihai"
        target="_blank"
        rel="noreferrer"
        type="button"
        className="bg-white/10 text-neutral-200 fill-neutral-200"
      >
        <GithubIcon />

        <p>Github</p>
      </a>
    </div>
  </div>
);
