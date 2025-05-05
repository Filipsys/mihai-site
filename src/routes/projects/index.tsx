import { createFileRoute } from "@tanstack/react-router";
import { FILTERS, PROJECTS, TAGS } from "@/constants";
import { Badge } from "@/components/Badge";
import { useState } from "react";
import {
  ArrowIcon,
  FilterIcon,
  MiniCodeTagIcon,
  RatingStarIcon,
  ResultIcon,
  SortIcon,
  TickIcon,
} from "@/icons/dev-icons";

import type { Dispatch, SetStateAction } from "react";
import type { Project } from "@/types";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

const ProjectCard = (props: { projectData: Project }) => (
  <div className="flex flex-col border-[1px] border-white/5">
    <div className="grow">
      <img
        src={props.projectData.imageURL}
        alt={`${props.projectData.title} thumbnail`}
        className="min-h-56 object-cover"
      />

      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <p className="text-text-primary text-xl font-semibold">
            {props.projectData.title}
          </p>

          {props.projectData.featured ? (
            <button
              type="button"
              className="flex items-center gap-1 px-2 py-1 bg-primary text-neutral-800 *:first:size-5"
            >
              <RatingStarIcon />

              <p>Featured</p>
            </button>
          ) : null}
        </div>

        <p>{props.projectData.description}</p>

        <div className="flex flex-wrap gap-2">
          {props.projectData.tags.map((tag) => (
            <Badge title={tag} key={`${props.projectData.title}-${tag}`} />
          ))}
        </div>
      </div>
    </div>

    <div className="flex p-4 gap-2 *:grow *:w-1/2">
      <button type="button" className="px-2 py-1 bg-primary text-neutral-800">
        <p>Live demo</p>
      </button>
      <button
        type="button"
        className="px-2 py-1 bg-neutral-700 text-neutral-300"
      >
        <p>Source</p>
      </button>
    </div>
  </div>
);

const Filters = (props: {
  activeTags: string[];
  setActiveTags: Dispatch<SetStateAction<string[]>>;
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <div className="w-full p-2 flex gap-2 flex-col lg:w-4/5 md:flex-row *:md:w-1/4">
      <div>
        <div className="flex gap-1 items-center">
          <FilterIcon />

          <p className="text-neutral-200">Project type</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 text-nowrap md:grid-cols-1 md:grid-rows-4">
          {FILTERS.map((filter) => (
            <div className="flex gap-1" key={crypto.randomUUID()}>
              <div className="grid items-center justify-center p-1 *:[grid-area:1/1]">
                <input
                  type="checkbox"
                  name={filter.toLowerCase()}
                  className="peer appearance-none size-3 bg-neutral-800 border-[1px] border-bg-primary cursor-pointer checked:bg-primary"
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

        <div className="flex flex-wrap flex-row gap-2">
          {TAGS.map((tag) => (
            <div
              className={`px-1 py-0.5 border-[1px] border-bg-primary cursor-pointer ${props.activeTags.includes(tag) ? "bg-neutral-700" : "bg-neutral-800"}`}
              onClick={(event) => {
                const currentTag = event.currentTarget.textContent;
                if (!currentTag) return;

                if (props.activeTags.includes(currentTag)) {
                  props.setActiveTags((previousTags) =>
                    previousTags.filter((tag) => tag !== currentTag),
                  );
                  return;
                }

                props.setActiveTags([...props.activeTags, currentTag]);
              }}
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
          className="text-xs max-w-sm appearance-none w-full border-[1px] border-bg-primary px-2 py-1"
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

        <p className="text-sm">
          Showing 7 of 7 projects.{" "}
          <button type="button" className="underline">
            <p>Reset filters</p>
          </button>
        </p>
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
          className="w-fit flex items-center gap-2 py-2 my-4 px-4 bg-primary text-neutral-800 font-semibold"
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

      <div className="grid grid-row-1 gap-2 *:max-w-md md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => {
          if (
            activeTags.length === 0 ||
            project.tags.some((tag) => activeTags.includes(tag))
          ) {
            return (
              <ProjectCard
                projectData={project}
                key={`project-${project.title}`}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
