import type { ComponentType } from "react";

export const SectionHeader = (props: {
  title: string;
  icon: ComponentType;
}) => (
  <div className="flex gap-2 items-center first:text-purple-300">
    <props.icon />

    <p className="text-2xl font-bold text-neutral-200">{props.title}</p>
  </div>
);
