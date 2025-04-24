import {
  WorkClientsIcon,
  MailIcon,
  PaperPlaneIcon,
  GithubIcon,
} from "@/icons/dev-icons";

export const Collab = () => (
  <div className="h-full flex flex-col gap-4 items-center justify-center p-4 border-[1px] border-white/10">
    <div className="p-4 bg-neutral-950/25 text-purple-300 border-[1px] border-white/10">
      <WorkClientsIcon />
    </div>

    <div className="text-center">
      <p className="text-2xl font-bold text-neutral-200">
        Let&apos;s work together
      </p>
      <p className="font-semibold">and make your ideas come to life.</p>
    </div>

    <div className="flex gap-2 *:flex *:items-center *:px-4 *:py-2 *:bg-neutral-950/25 *:fill-neutral-200 *:text-neutral-200 *:border-[1px] *:border-white/10">
      <div className="hover:bg-neutral-800/25">
        <MailIcon />
      </div>
      <div className="hover:bg-neutral-800/25">
        <PaperPlaneIcon />
      </div>
      <div className="hover:bg-neutral-800/25 fill-neutral-200 *:size-6">
        <GithubIcon />
      </div>
    </div>
  </div>
);
