import { SectionHeader } from "@/components/SectionHeader";
import { SERVICES } from "@/constants";
import { ToolsIcon } from "@/icons/dev-icons";

const Item = (props: { title: string }) => (
  <div className="w-fit px-3 py-2 bg-primary border-[1px] border-white/5">
    <p className="text-nowrap text-secondary font-bold">{props.title}</p>
  </div>
);

const Carousel = (props: { direction: "left" | "right" }) => (
  <div className="relative h-12">
    <div
      className={`absolute flex flex-nowrap gap-2 ${props.direction === "left" ? "animate-slide-left" : "animate-slide-right"}`}
    >
      {(props.direction === "left"
        ? [...SERVICES, ...SERVICES]
        : [...SERVICES, ...SERVICES].reverse()
      ).map((item, index) => (
        <Item
          title={item[0]}
          key={`carousel-${props.direction}-${index}-${item[1]}`}
        />
      ))}
    </div>
  </div>
);

export const Services = () => (
  <div className="bg-primary p-4 border-[1px] border-white/5">
    <SectionHeader title="Services" icon={ToolsIcon} />

    <p>My services are tailored to your needs and budget.</p>

    <div className="w-full h-8" />

    {/* Carousel section */}
    <div className="flex flex-col gap-2">
      <div className="relative h-32 overflow-hidden before:pointer-events-none before:z-10 before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-primary before:via-transparent before:to-primary">
        <Carousel direction="left" />
        <Carousel direction="right" />
      </div>

      {/* <div className="relative">
        <div className="flex flex-nowrap overflow-hidden gap-2 before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-primary before:via-transparent before:to-primary">
          <Item title="SEO Optimisation" />
          <Item title="Hosting Guide" />
          <Item title="Web Security" />
          <Item title="Web Development" />
          <Item title="Website Rework" />
          <Item title="Web Design" />
        </div>
      </div> */}
    </div>
  </div>
);
