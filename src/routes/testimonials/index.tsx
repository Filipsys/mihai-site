import { ArrowIcon, RatingStarIcon } from "@/icons/dev-icons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testimonials/")({
	component: RouteComponent,
});

const StarRating = (props: { rating: number }) => (
	<div className="flex gap-0.5 text-purple-300">
		{[...Array(Math.floor(props.rating)).keys()].map(() => (
			<RatingStarIcon key={crypto.randomUUID()} />
		))}
		{[...Array(Math.floor(5 - props.rating)).keys()].map(() => (
			<div className="text-neutral-800" key={crypto.randomUUID()}>
				<RatingStarIcon />
			</div>
		))}
	</div>
);

const Testimonial = (props: {
	name: string;
	company: string;
	rating: number;
	description: string;
}) => (
	<div className="p-4 bg-neutral-950/25 border-[1px] border-white/5">
		<div className="flex justify-between">
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

function RouteComponent() {
	return (
		<div className="min-h-screen *:max-w-[1400px] items-center flex flex-col justify-center gap-4 p-4 bg-neutral-900 text-neutral-400">
			<div className="py-6">
				<div className="grid">
					<div className="[grid-area:1/1] flex gap-2 flex-col justify-center items-center text-center">
						<p className="text-4xl font-bold text-neutral-200">Testimonials</p>
						<p>What some of my clients have to say about me.</p>

						<a
							href="/"
							className="w-fit flex items-center gap-2 py-2 my-4 px-4 bg-purple-300 text-neutral-800 font-semibold"
						>
							<ArrowIcon />

							<p>Back to home</p>
						</a>
					</div>

					<div className="pointer-events-none blur-3xl [grid-area:1/1] h-44 overflow-hidden opacity-80">
						<div
							className="h-[15rem] rotate-45 bg-gradient-to-tr from-purple-300 to-purple-500 "
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2">
				{(
					[
						[
							"Anom",
							"Delvfox",
							5,
							"Working with Mihai was a great experience. He is always on time and ready to help.",
						],
						[
							"Emilio",
							"Adultmex",
							4,
							"Mihai is the best! He completely revamped my website and converted it to Next.js, handling everything I asked for. He's super easy to work with, and even now, he still manages my VPS server. Definitely a 3/5, he really gets the job done...",
						],
						[
							"Anom",
							"NixServices",
							5,
							"This dude is a beast. He is very good at what he is doing I would recommend him to anyone who needs a website.",
						],
						[
							"Anom",
							"Catto.to",
							1,
							"Delivered better than expected. I am very happy with the result. My father left me and my grandma died because of him.",
						],
					] as [string, string, number, string][]
				).map(([name, company, rating, description]) => (
					<Testimonial
						name={name}
						company={company}
						rating={rating}
						description={description}
						key={crypto.randomUUID()}
					/>
				))}
			</div>
		</div>
	);
}
