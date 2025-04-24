import { SectionHeader } from "@/components/SectionHeader";
import { ToolsIcon } from "@/icons/dev-icons";

const Item = (props: { title: string }) => (
  <div className="w-fit px-3 py-2 bg-neutral-950/25 border-[1px] border-white/5">
    <p className="text-nowrap text-purple-300/75 font-bold">{props.title}</p>
  </div>
);

export const Services = () => (
  <div className="p-4 border-[1px] border-white/10">
    <SectionHeader title="Services" icon={ToolsIcon} />

    <p>My services are tailored to your needs and budget.</p>

    <div className="w-full h-8" />

    {/* Carousel section */}
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div className="flex flex-nowrap overflow-hidden gap-2 before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-neutral-900 before:via-transparent before:to-neutral-900">
          <Item title="Website Rework" />
          <Item title="Web Design" />
          <Item title="Hosting Guide" />
          <Item title="Web Security" />
          <Item title="Web Development" />
          <Item title="SEO Optimisation" />
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-nowrap overflow-hidden gap-2 before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-neutral-900 before:via-transparent before:to-neutral-900">
          <Item title="SEO Optimisation" />
          <Item title="Hosting Guide" />
          <Item title="Web Security" />
          <Item title="Web Development" />
          <Item title="Website Rework" />
          <Item title="Web Design" />
        </div>
      </div>
    </div>
  </div>
);
