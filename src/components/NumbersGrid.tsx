import { ClientsIcon, StarIcon, WorkIcon } from "@/icons/dev-icons";
import { Tag } from "@/components/Tag";

export const NumbersGrid = () => (
  <div className="h-full grid grid-cols-2 grid-rows-2 gap-4 text-neutral-200">
    <div className="flex flex-col items-center justify-center gap-1 p-4 border-[1px] border-white/10">
      <p className="text-4xl">19+</p>

      <Tag title="Projects" icon={WorkIcon} />
    </div>
    <div className="flex flex-col items-center justify-center gap-1 p-4 border-[1px] border-white/10">
      <p className="text-4xl">9+</p>

      <Tag title="Clients" icon={ClientsIcon} />
    </div>
    <div className="col-span-2 flex flex-col items-center justify-center gap-1 p-4 border-[1px] border-white/10">
      <p className="text-4xl">4+</p>

      <Tag title="Years of Experience" icon={StarIcon} />
    </div>
  </div>
);
