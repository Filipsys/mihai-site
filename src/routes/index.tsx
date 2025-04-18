import type { ComponentType } from "react";
import {
	CalendarIcon,
	CoffeeIcon,
	GithubIcon,
	GlobalTimeIcon,
	GlobeIcon,
	HomeIcon,
	MailIcon,
	NextJSIcon,
	NodeJSIcon,
	PinIcon,
	ShadcnUIIcon,
	StackIcon,
	TailwindCSSIcon,
	ToolsIcon,
	WorkIcon,
} from "@/icons/dev-icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

const Badge = (props: { title: string }) => (
	<div className="w-fit px-2 py-1 bg-green-500/20 text-green-500">
		<p className="text-xs font-bold">{props.title}</p>
	</div>
);

const Tag = (props: { title: string; icon: ComponentType }) => (
	<div className="w-fit flex items-center gap-1 px-2 py-1 bg-neutral-800">
		<props.icon />

		<p>{props.title}</p>
	</div>
);

const Item = (props: { title: string }) => (
	<div className="w-fit text-nowrap px-3 py-2 bg-neutral-950/30 text-purple-300/75 font-bold border-[1px] border-white/5">
		<p>{props.title}</p>
	</div>
);

const TechCard = (props: { title: string; icon: ComponentType }) => (
	<div className="h-16 flex gap-2 p-2 items-center bg-neutral-950/30 border-[1px] border-white/5">
		<div className="h-full bg-white/5 border-[1px] border-white/5 flex items-center justify-center aspect-square fill-purple-300/75 *:size-6">
			<props.icon />
		</div>

		<p>{props.title}</p>
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

				<p>Mihai</p>
				<p>I'm a full-stack developer</p>
			</div>
		</div>

		<div className="flex gap-2 flex-wrap p-2 bg-neutral-950/30 border-[1px] border-white/5">
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

		<div className="flex gap-4 *:grow *:flex *:gap-1 *:items-center *:justify-center">
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
		<div className="flex gap-2">
			<ToolsIcon />

			<p>Services</p>
		</div>

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
		<div className="flex gap-2">
			<WorkIcon />

			<p>Projects</p>
		</div>

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
		<div className="flex gap-2">
			<StackIcon />

			<p>My tech stack</p>
		</div>

		<p>My favourite tech stack I use on my projects.</p>

		<div className="w-full h-8" />

		<div className="grid grid-rows-2 grid-cols-2 gap-2">
			{(
				[
					["Next.js", NextJSIcon],
					["TailwindCSS", TailwindCSSIcon],
					["Shadcn/ui", ShadcnUIIcon],
					["Node.js", NodeJSIcon],
				] as [string, ComponentType][]
			).map((element) => (
				<TechCard
					title={element[0]}
					icon={element[1]}
					key={`techcard-${element[0]}-${element[1]}`}
				/>
			))}
		</div>
	</div>
);

function App() {
	return (
		<div className="min-h-screen flex flex-col gap-4 p-4 bg-neutral-900 text-white">
			<div className="flex flex-col gap-4">
				<MainInfo />
				<Services />
				<Projects />
			</div>

			<div className="flex flex-col gap-4">
				<TechStack />
			</div>

			<div className="flex flex-col gap-4">
				<div />
			</div>
		</div>
	);
}
