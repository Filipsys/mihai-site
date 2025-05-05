import type { ComponentType } from "react";

export const SectionHeader = (props: {
  title: string;
  icon: ComponentType;
}) => (
  <div className="flex gap-2 items-center first:text-secondary">
    <props.icon />

    <p className="text-2xl font-bold text-text-secondary">{props.title}</p>
  </div>
);
