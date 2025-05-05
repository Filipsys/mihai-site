import { StarHandIcon, RatingStarIcon } from "@/icons/dev-icons";
import { SectionHeader } from "@/components/SectionHeader";
import { StarRating } from "@/components/StarRating";

import type { RefObject } from "react";
import { TESTIMONIALS } from "@/constants";

const Testimonial = (props: {
  name: string;
  company: string;
  rating: number;
  description: string;
}) => (
  <div className="bg-background p-4 border-[1px] border-white/5">
    <div className="flex justify-between">
      <div className="mb-4">
        <p className="text-text-secondary font-bold">{props.name}</p>
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
    className="bg-primary grow flex flex-col overflow-hidden p-4 border-[1px] border-white/5"
  >
    <SectionHeader title="Testimonials" icon={StarHandIcon} />

    <p>What my clients say about me.</p>

    <div className="w-full h-8" />

    <div className="relative grow overflow-hidden">
      <div className="flex flex-col gap-2 before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-primary before:to-transparent">
        <Testimonial
          name={TESTIMONIALS[0][0]}
          company={TESTIMONIALS[0][1]}
          rating={TESTIMONIALS[0][2]}
          description={TESTIMONIALS[0][3]}
        />
        <Testimonial
          name={TESTIMONIALS[1][0]}
          company={TESTIMONIALS[1][1]}
          rating={TESTIMONIALS[1][2]}
          description={TESTIMONIALS[1][3]}
        />
      </div>

      <a
        href="/testimonials"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap flex gap-2 py-2 px-4 bg-primary border-[1px] border-white/5 font-semibold text-secondary *:first:size-5 items-center"
      >
        <RatingStarIcon />

        <p>View all testimonials</p>
      </a>
    </div>
  </div>
);
