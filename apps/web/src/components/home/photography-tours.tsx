import { IconCamera, IconChevronRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

const features = [
	"Custom-modified camera-friendly jeeps",
	"On-field post-processing workshops",
	"Exclusive access to key wildlife zones",
];

const photos = [
	{
		alt: "Deer in a shadowed forest",
		className: "h-[360px] sm:h-[420px]",
		src: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=2070&auto=format&fit=crop",
		width: 518,
		height: 640,
	},
	{
		alt: "Lion resting in the grass",
		className: "h-[260px] sm:h-[300px]",
		src: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
		width: 518,
		height: 360,
	},
	{
		alt: "Safari jeep at sunset",
		className: "h-[300px] sm:h-[360px]",
		src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
		width: 517,
		height: 360,
	},
	{
		alt: "Sparrow on a branch",
		className: "h-[320px] sm:h-[400px]",
		src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop",
		width: 517,
		height: 300,
	},
];

export default function PhotographyTours() {
	return (
		<section className="px-6 py-24" id="photography">
			<motion.div
				className="mx-auto max-w-7xl overflow-hidden"
				initial="hidden"
				variants={fadeUp}
				viewport={viewportOnce}
				whileInView="visible"
			>
				<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
					<div className="relative order-2 lg:order-1">
						<div className="columns-1 gap-5 sm:columns-2 [&>*]:mb-5">
							{photos.map((photo) => (
								<div
									className={`group relative break-inside-avoid overflow-hidden rounded-[2rem] bg-gray-900 ring-1 ring-black/5 ${photo.className}`}
									key={photo.alt}
								>
									<img
										alt={photo.alt}
										className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
										height={photo.height}
										src={photo.src}
										width={photo.width}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10 opacity-80" />
									{photo.alt === "Sparrow on a branch" ? (
										<div className="absolute right-4 bottom-4 rounded-2xl border border-white/30 bg-primary p-3 text-primary-foreground shadow-xl shadow-black/20 backdrop-blur-md sm:right-5 sm:bottom-5 sm:p-4">
											<IconCamera className="h-6 w-6 sm:h-7 sm:w-7" />
										</div>
									) : null}
								</div>
							))}
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<h2 className="mb-8 font-bold font-serif text-4xl text-primary leading-tight md:text-5xl">
							Photography Tours: For the Perfect Frame
						</h2>
						<p className="mb-6 font-medium text-brand-brown text-sm uppercase tracking-widest">
							Fixed Departures &bull; Max 4 Participants
						</p>
						<p className="mb-10 text-lg text-muted-foreground">
							Led by award-winning wildlife photographers, these tours
							prioritize patience, lighting, and positioning. Gain exclusive
							insights into animal behavior while mastering your wildlife
							photography skills in the heart of the jungle.
						</p>
						<ul className="mb-10 space-y-4">
							{features.map((feature) => (
								<li className="flex items-center gap-3" key={feature}>
									<IconChevronRight className="h-5 w-5 flex-shrink-0 text-accent" />
									<span className="font-medium">{feature}</span>
								</li>
							))}
						</ul>
						<Link
							className="inline-block rounded-full bg-primary px-10 py-5 font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-lg"
							to="/photography"
						>
							Explore Photo Tours
						</Link>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
