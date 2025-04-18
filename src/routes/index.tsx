import type { ComponentType } from "react";
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

const StarRating = (props: { rating: number }) => (
	<div className="flex gap-0.5">
		{[...Array(Math.floor(props.rating)).keys()].map(() => (
			<RatingStarIcon key={crypto.randomUUID()} />
		))}
		{[...Array(Math.floor(5 - props.rating)).keys()].map(() => (
			// Soon replace this with an empty rating star
			<div className="size-6" key={crypto.randomUUID()} />
		))}
	</div>
);

const Testimonial = (props: {
	name: string;
	company: string;
	rating: number;
	description: string;
}) => (
	<div className="p-4 bg-neutral-950/30 border-[1px] border-white/5">
		<div className="flex justify-between ">
			<div className="mb-4">
				<p>{props.name}</p>
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
	<div className="flex gap-2 p-2 border-[1px] border-white/5">
		<props.icon />

		<div className="flex w-full justify-between">
			<div className="flex flex-col">
				<p>{props.title}</p>
				<p>{props.description}</p>
			</div>

			<p>#{props.index}</p>
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

const NumbersGrid = () => (
	<div className="grid grid-cols-3 grid-rows-1 gap-4">
		<div className="flex flex-col items-center justify-center gap-1 p-4 border-[1px] border-white/10">
			<p className="text-6xl">19+</p>

			<Tag title="Projects" icon={WorkIcon} />
		</div>
		<div className="flex flex-col items-center justify-center gap-1 p-4 border-[1px] border-white/10">
			<p className="text-6xl">9+</p>

			<Tag title="Clients" icon={ClientsIcon} />
		</div>
		<div className="flex flex-col items-center justify-center gap-1 p-4 border-[1px] border-white/10">
			<p className="text-6xl">4+</p>

			<Tag title="YOE" icon={StarIcon} />
		</div>
	</div>
);

const Collab = () => (
	<div className="flex flex-col gap-4 items-center justify-center p-4 border-[1px] border-white/10">
		<div className="p-4 bg-neutral-950/75 border-[1px] border-white/10">
			<WorkClientsIcon />
		</div>

		<div className="text-center">
			<p>Let&apos;s work together</p>
			<p>and make your ideas come to life.</p>
		</div>

		<div className="flex gap-2 *:flex *:items-center *:px-4 *:py-2 *:bg-neutral-950 *:border-[1px] *:border-white/10">
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

const WorkProcess = () => (
	<div className="p-4 border-[1px] border-white/10">
		<div className="flex gap-2">
			<SpinArrowsIcon />

			<p>Work process</p>
		</div>

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

export const Testimonials = () => (
	<div className="p-4 border-[1px] border-white/10">
		<div className="flex gap-2">
			<StarHandIcon />

			<p>Testimonials</p>
		</div>

		<p>What my clients say about me.</p>

		<div className="w-full h-8" />

		<Testimonial
			name="Anom"
			company="Delvfox"
			rating={5}
			description="Working with Mihai was a great experience. He is always on time and ready to help."
		/>
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
				<NumbersGrid />
				<Collab />
			</div>

			<div className="flex flex-col gap-4">
				<WorkProcess />
				<Testimonials />
			</div>
		</div>
	);
}
