import { StarHandIcon, RatingStarIcon } from "@/icons/dev-icons";
import { SectionHeader } from "@/components/SectionHeader";
import { StarRating } from "@/components/StarRating";

import type { RefObject } from "react";

const Testimonial = (props: {
  name: string;
  company: string;
  rating: number;
  description: string;
}) => (
  <div className="p-4 bg-neutral-950/25 border-[1px] border-white/5">
    <div className="flex justify-between ">
      <div className="mb-4">
        <p className="text-neutral-200 font-bold">{props.name}</p>
        <p>{props.company}</p>
      </div>

      {props.rating <= 5 && props.rating >= 1 ? (
        <StarRating rating={props.rating} />
      ) : null}
    </div>

    <p>{props.description}</p>
  </div>
);

export const Testimonials = (props: {
  ref: RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={props.ref}
    className="grow flex flex-col overflow-hidden p-4 border-[1px] border-white/10"
  >
    <SectionHeader title="Testimonials" icon={StarHandIcon} />

    <p>What my clients say about me.</p>

    <div className="w-full h-8" />

    <div className="relative grow overflow-hidden">
      <div className="flex flex-col gap-2 before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-neutral-900 before:to-transparent">
        <Testimonial
          name="Anom"
          company="Delvfox"
          rating={5}
          description="Working with Mihai was a great experience. He is always on time and ready to help."
        />
        <Testimonial
          name="Anom"
          company="Delvfox"
          rating={5}
          description="Working with Mihai was a great experience. He is always on time and ready to help."
        />
      </div>

      <a
        href="/testimonials"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap flex gap-2 py-2 px-4 bg-neutral-800 border-[1px] border-neutral-700 font-semibold text-purple-300 *:first:size-5 items-center"
      >
        <RatingStarIcon />

        <p>View all testimonials</p>
      </a>
    </div>
  </div>
);
