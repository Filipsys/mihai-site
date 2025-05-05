import {
  WorkClientsIcon,
  MailIcon,
  PaperPlaneIcon,
  GithubIcon,
} from "@/icons/dev-icons";

export const Collab = () => (
  <div className="bg-primary h-full flex flex-col text-center gap-4 items-center justify-center p-4 border-[1px] border-white/5">
    <div className="p-4 bg-primary text-secondary border-[1px] border-white/5">
      <WorkClientsIcon />
    </div>

    <div>
      <p className="text-2xl font-bold text-text-secondary">
        Let&apos;s work together
      </p>
      <p className="font-semibold">and make your ideas come to life.</p>
    </div>

    <div className="flex gap-2 *:cursor-pointer *:transition-colors *:duration-200 *:flex *:items-center *:px-4 *:py-2 *:bg-primary *:fill-text-secondary *:text-text-secondary *:border-[1px] *:border-white/5">
      <button type="button" className="hover:bg-primary-hover">
        <MailIcon />
      </button>
      <button type="button" className="hover:bg-primary-hover">
        <PaperPlaneIcon />
      </button>
      <button
        type="button"
        className="hover:bg-primary-hover fill-text-secondary *:size-6"
      >
        <GithubIcon />
      </button>
    </div>
  </div>
);
