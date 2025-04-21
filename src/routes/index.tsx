import { useEffect, useRef, type ComponentType, type RefObject } from "react";
import {
  CalendarIcon,
  ClientsIcon,
  ClientThoughtsIcon,
  CodeTagIcon,
  CoffeeIcon,
  GithubIcon,
  GlobalTimeIcon,
  GlobeIcon,
  HomeIcon,
  LinkArrow,
  MailIcon,
  NextJSIcon,
  NodeJSIcon,
  PaperPlaneIcon,
  PinIcon,
  RatingStarIcon,
  RocketIcon,
  ShadcnUIIcon,
  SpinArrowsIcon,
  StackIcon,
  StarHandIcon,
  StarIcon,
  TailwindCSSIcon,
  TestingFlaskIcon,
  ToolsIcon,
  WorkClientsIcon,
  WorkIcon,
} from "@/icons/dev-icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

const Badge = (props: { title: string }) => (
  <div className="w-fit px-2 py-1 bg-green-700/20 text-green-600">
    <p className="text-xs font-bold">{props.title}</p>
  </div>
);

const Tag = (props: { title: string; icon: ComponentType }) => (
  <div className="w-fit flex items-center gap-1 px-2 py-1 bg-neutral-800/50">
    <div className="*:text-purple-300 *:size-5">
      <props.icon />
    </div>

    <p className="font-semibold">{props.title}</p>
  </div>
);

const Item = (props: { title: string }) => (
  <div className="w-fit text-nowrap px-3 py-2 bg-neutral-950/25 text-purple-300/75 font-bold border-[1px] border-white/5">
    <p>{props.title}</p>
  </div>
);

const TechCard = (props: {
  title: string;
  link: string;
  icon: ComponentType;
}) => (
  <div className="flex justify-between items-center p-2 pr-4 text-neutral-200 bg-neutral-950/25 border-[1px] border-white/5">
    <div className="flex gap-2 items-center">
      <div className="h-full p-2 bg-white/5 border-[1px] border-white/5 flex items-center justify-center aspect-square fill-purple-300 *:size-6">
        <props.icon />
      </div>

      <p>{props.title}</p>
    </div>

    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="*:text-purple-300"
    >
      <LinkArrow />
    </a>
  </div>
);

const StarRating = (props: { rating: number }) => (
  <div className="flex gap-0.5 text-purple-300">
    {[...Array(Math.floor(props.rating)).keys()].map(() => (
      <RatingStarIcon key={crypto.randomUUID()} />
    ))}
    {[...Array(Math.floor(5 - props.rating)).keys()].map(() => (
      // Soon replace this with an empty rating star
      <div className="size-6 text-neutral-800" key={crypto.randomUUID()} />
    ))}
  </div>
);

const SectionHeader = (props: { title: string; icon: ComponentType }) => (
  <div className="flex gap-2 items-center">
    <div className="text-purple-300">
      <props.icon />
    </div>

    <p className="text-2xl font-bold text-neutral-200">{props.title}</p>
  </div>
);

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

export const ProcessCard = (props: {
  title: string;
  description: string;
  index: number;
  icon: ComponentType;
}) => (
  <div className="relative md:cursor-pointer p-4 h-full border-[1px] group border-white/5 bg-neutral-950/25 flex gap-4 *:first:text-purple-300 *:first:h-fit md:items-center md:py-2">
    <props.icon />

    <div className="flex w-full h-full justify-between md:items-center">
      <div className="flex flex-col">
        <p className="text-neutral-200">{props.title}</p>
        <p className="md:hidden">{props.description}</p>
      </div>

      <p className="italic text-neutral-200/25">#{props.index}</p>
    </div>

    <div className="hidden cursor-auto md:group-hover:block absolute bg-neutral-900 z-10 p-2 px-4 border-[1px] border-white/5 bottom-0 left-0 translate-y-full w-[calc(100%+2px)] -translate-x-[1px]">
      {/* I have to add the -1px translation to compensate for the 1px border */}
      <p>{props.description}</p>
    </div>
  </div>
);

const MainInfo = () => (
  <div className="flex flex-col gap-4 p-4 border-[1px] border-white/10">
    <div className="flex gap-4">
      <img
        src="cat-profile-picture.webp"
        alt="profile-picture"
        className="size-24"
      />

      <div>
        <Badge title="Available to Work" />

        <p className="text-purple-300 text-3xl font-bold">Mihai</p>
        <p>
          I'm a{" "}
          <span className="text-purple-300 font-bold">
            full-stack developer
          </span>
        </p>
      </div>
    </div>

    <div className="flex gap-2 flex-wrap p-2 bg-neutral-950/25 border-[1px] border-white/5">
      {/* Is this actually better than using
			multiple <Tag /> elements? I thought it
			would be better, look more compact and
			feel like better code, but it just seems
			like overdoing it. I'll just leave it be,
			I spent 10 minutes on refactoring this. */}

      {(
        [
          ["English & Romanian", GlobeIcon],
          ["Romania", PinIcon],
          ["UTC+3", GlobalTimeIcon],
          ["Coffee Addict", CoffeeIcon],
          ["Freelancer", HomeIcon],
          ["17 y/o", CalendarIcon],
        ] as [string, ComponentType][]
      ).map((element, index) => (
        <Tag
          title={element[0]}
          icon={element[1]}
          key={`tag-${element[0]}-${index}`}
        />
      ))}
    </div>

    <div className="flex gap-4 font-semibold *:grow *:flex *:gap-2 *:items-center *:justify-center">
      <a
        href="mailto:"
        target="_blank"
        rel="noreferrer"
        type="button"
        className="py-2 bg-blue-300 text-neutral-800"
      >
        <MailIcon />

        <p>Hire me</p>
      </a>

      <a
        href="https://github.com/kkmihai"
        target="_blank"
        rel="noreferrer"
        type="button"
        className="bg-white/10 text-neutral-200"
      >
        <GithubIcon />

        <p>Github</p>
      </a>
    </div>
  </div>
);

const Services = () => (
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

const Projects = () => (
  <div className="p-4 border-[1px] border-white/10">
    <SectionHeader title="Projects" icon={WorkIcon} />

    <p>Here are some of my projects I have worked on.</p>

    <div className="w-full h-8" />

    <div className="relative">
      <div className="flex gap-2 *:h-24 overflow-hidden before:w-full before:h-full before:absolute before:bg-gradient-to-r before:from-neutral-900 before:via-transparent before:to-neutral-900">
        {[
          "catto.webp",
          "delvfox.webp",
          "mega-foxy.webp",
          "nix-services.webp",
          "shop.webp",
        ].map((element, index) => (
          <img
            src={`project-images/${element}`}
            key={`showcase-${element}-${
              // biome-ignore lint/suspicious/noArrayIndexKey: Key will never be the same here
              index
            }`}
            alt={element}
          />
        ))}
      </div>
    </div>
  </div>
);

const TechStack = () => (
  <div className="p-4 border-[1px] border-white/10">
    <SectionHeader title="My tech stack" icon={StackIcon} />

    <p>My favourite tech stack I use on my projects.</p>

    <div className="w-full h-8" />

    <div className="grid gap-2 grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2">
      {(
        [
          ["Next.js", "https://nextjs.org", NextJSIcon],
          ["Tailwind", "https://tailwindcss.com", TailwindCSSIcon],
          ["Shadcn/ui", "https://ui.shadcn.com", ShadcnUIIcon],
          ["Node.js", "https://nodejs.org", NodeJSIcon],
        ] as [string, string, ComponentType][]
      ).map((element) => (
        <TechCard
          title={element[0]}
          icon={element[2]}
          link={element[1]}
          key={`techcard-${element[0]}-${element[1]}`}
        />
      ))}
    </div>
  </div>
);

const NumbersGrid = () => (
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

const Collab = () => (
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

    <div className="flex gap-2 *:flex *:items-center *:px-4 *:py-2 *:bg-neutral-950/25 *:text-neutral-200 *:border-[1px] *:border-white/10">
      <div className="hover:bg-neutral-800/25">
        <MailIcon />
      </div>
      <div className="hover:bg-neutral-800/25">
        <PaperPlaneIcon />
      </div>
      <div className="hover:bg-neutral-800/25 *:size-6">
        <GithubIcon />
      </div>
    </div>
  </div>
);

const WorkProcess = (props: { ref: RefObject<HTMLDivElement | null> }) => (
  <div
    ref={props.ref}
    className="h-fit flex flex-col p-4 border-[1px] border-white/10"
  >
    <SectionHeader title="Work process" icon={SpinArrowsIcon} />

    <p>The work process explained in 4 simple steps.</p>

    <div className="w-full h-8" />

    <div className="grid grid-rows-4 grid-cols-1 gap-2">
      {(
        [
          [
            "Project Breif",
            "We will discuss your project and its goals.",
            ClientThoughtsIcon,
          ],
          [
            "Design & Develop",
            "I will design and develop your website according to your needs.",
            CodeTagIcon,
          ],
          [
            "Testing & Review",
            "I will let you test the website and make any changes if needed.",
            TestingFlaskIcon,
          ],
          [
            "Launch",
            "I will give you the source code and help you with the launch.",
            RocketIcon,
          ],
        ] as [string, string, ComponentType][]
      ).map((element, index) => (
        <ProcessCard
          title={element[0]}
          description={element[1]}
          index={index + 1}
          icon={element[2]}
          key={`process-step-${
            // biome-ignore lint/suspicious/noArrayIndexKey: There will never be an index that will be equal here too. It's a static array of four elements
            index
          }`}
        />
      ))}
    </div>
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap flex gap-2 py-2 px-4 bg-purple-300 text-neutral-800 font-semibold"
      >
        <RatingStarIcon />

        <p>View all testimonials</p>
      </a>
    </div>
  </div>
);

const Footer = () => (
  <div className="grow flex flex-col py-8 bg-neutral-900 text-neutral-200/50 text-center items-center justify-end text-sm">
    <p>
      Made with 💖 by{" "}
      <a
        href="https://github.com/kkmihai"
        target="_blank"
        rel="noreferrer"
        className="text-purple-300 text-shadow-[0_0_15px] text-shadow-purple-300 hover:underline"
      >
        kkMihai
      </a>
    </p>

    <p>&copy; 2025 All rights reserved</p>
  </div>
);

function App() {
  const workRef = useRef<HTMLDivElement>(null);
  const testimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const workDiv = workRef.current;
    const testimDiv = testimRef.current;
    if (!workDiv || !testimDiv) return;

    testimDiv.style.height = `${workDiv.offsetHeight}px`;
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen p-4 bg-neutral-900 text-neutral-400">
        <div className="grid gap-4 grid-cols-1 *:max-w-[1400px] md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <MainInfo />
            <Services />
            <NumbersGrid />
          </div>

          <div className="flex flex-col gap-4">
            <Projects />
            <TechStack />
            <Collab />
          </div>

          <div className="w-full flex gap-4 flex-col col-span-1 md:col-span-2 md:flex-row md:*:w-full lg:flex-col lg:col-span-1">
            <WorkProcess ref={workRef} />
            <Testimonials ref={testimRef} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
