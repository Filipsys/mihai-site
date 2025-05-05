import type { ComponentType } from "react";

export const Tag = (props: { title: string; icon: ComponentType }) => (
  <div className="w-fit flex items-center gap-1 px-2 py-1 bg-primary border-[1px] border-white/5">
    <div className="*:text-secondary *:size-5">
      <props.icon />
    </div>

    <p className="font-semibold">{props.title}</p>
  </div>
);
