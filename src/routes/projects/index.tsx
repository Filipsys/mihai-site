import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowIcon,
  FilterIcon,
  MiniCodeTagIcon,
  ResetIcon,
  ResultIcon,
  SortIcon,
  TickIcon,
} from "@/icons/dev-icons";

import type { Dispatch, SetStateAction } from "react";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

const FILTERS = ["Featured", "Open source", "Demo available", "Show NSFW"];

const TAGS = [
  "JavaScript",
  "TypeScript",
  "MySQL",
  "Next.js",
  "NextAuth.js",
  "Node.js",
  "Prisma",
  "Redis",
  "Sellix",
  "ShadCN/UI",
  "TailwindCSS",
];

const Filters = (props: {
  activeTags: string[];
  setActiveTags: Dispatch<SetStateAction<string[]>>;
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <div className="w-4/5 flex gap-2 *:w-1/4">
      <div>
        <div className="flex gap-1 items-center">
          <FilterIcon />

          <p className="text-neutral-200">Project type</p>
        </div>

        <div className="flex flex-col">
          {FILTERS.map((filter) => (
            <div className="flex gap-1" key={crypto.randomUUID()}>
              <div className="grid items-center justify-center p-1 *:[grid-area:1/1]">
                <input
                  type="checkbox"
                  name={filter.toLowerCase()}
                  className="peer appearance-none size-3 bg-neutral-800 border-[1px] border-purple-300 cursor-pointer checked:bg-purple-300"
                  onChange={(event) => {
                    if (event.currentTarget.checked) {
                      props.setActiveFilters([
                        ...props.activeFilters,
                        filter.toLowerCase(),
                      ]);
                    } else {
                      props.setActiveFilters(
                        props.activeFilters.filter(
                          (iter) => iter !== filter.toLowerCase(),
                        ),
                      );
                    }
                  }}
                />

                <div className="hidden pointer-events-none peer-checked:block *:stroke-neutral-800 *:size-3">
                  <TickIcon />
                </div>
              </div>

              <label htmlFor={filter.toLowerCase()} className="text-sm">
                {filter}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <MiniCodeTagIcon />

          <p className="text-neutral-200">Technologies</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <div
              className="px-1 py-0.5 bg-neutral-800 border-[1px] border-purple-300 cursor-pointer"
              onClick={() => null}
              onKeyUp={() => null}
              key={crypto.randomUUID()}
            >
              <p className="text-xs text-neutral-300">{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <SortIcon />

          <p className="text-neutral-200">Sort by</p>
        </div>

        <select
          name="sort"
          id="sort"
          className="appearance-none w-full border-[1px] border-purple-300 px-2 py-1"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <ResultIcon />

          <p className="text-neutral-200">Results</p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 appearance-none border-[1px] *:stroke-neutral-300 border-purple-300 px-2 py-1"
        >
          <ResetIcon />

          <p className="text-sm">Reset filters</p>
        </button>

        <p className="text-sm">Showing 7 of 7 projects.</p>
      </div>
    </div>
  );
};

function RouteComponent() {
  // const [projects, setProjects] = useState();
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  return (
    <div className="min-h-screen *:max-w-[1400px] items-center flex flex-col justify-center gap-4 p-4 bg-neutral-900 text-neutral-400">
      <div className="flex gap-2 flex-col justify-center items-center text-center">
        <p className="text-4xl font-bold text-neutral-200">My projects</p>
        <p>
          Here you can find a collection of my public/open-source projects. Feel
          free to explore and check them out!
        </p>

        <a
          href="/"
          className="w-fit flex items-center gap-2 py-2 my-4 px-4 bg-purple-300 text-neutral-800 font-semibold"
        >
          <ArrowIcon />

          <p>Back to home</p>
        </a>
      </div>

      <Filters
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
    </div>
  );
}
