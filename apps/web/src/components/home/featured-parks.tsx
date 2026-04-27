import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@wild-earth/ui/components/button";
import { cn } from "@wild-earth/ui/lib/utils";
import { motion } from "motion/react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const parks = [
	{
		name: "Ranthambore",
		state: "Rajasthan",
		image:
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
		tags: ["Best: Oct - Jun", "Bengal Tiger"],
		link: "/ranthambore",
	},
	{
		name: "Jim Corbett",
		state: "Uttarakhand",
		image:
			"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
		tags: ["Best: Nov - Jun", "Asian Elephant"],
		link: "/corbett",
	},
	{
		name: "Kaziranga",
		state: "Assam",
		image:
			"https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2072&auto=format&fit=crop",
		tags: ["Best: Nov - Apr", "One-horned Rhino"],
		link: "/kaziranga",
	},
	{
		name: "Tadoba",
		state: "Maharashtra",
		image:
			"https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2070&auto=format&fit=crop",
		tags: ["Best: Oct - Jun", "Leopard & Tiger"],
		link: "/tadoba",
	},
];

function ParkCard({ park }: { park: (typeof parks)[number] }) {
	return (
		<div className="group relative h-[500px] overflow-hidden rounded-3xl bg-gray-900 shadow-xl">
			<img
				alt={park.name}
				className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
				height={500}
				src={park.image}
				width={400}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
			<div className="absolute bottom-0 left-0 w-full p-8">
				<div className="mb-2 font-bold text-accent text-xs uppercase tracking-widest">
					{park.state}
				</div>
				<h3 className="mb-4 font-bold font-serif text-3xl text-white">
					{park.name}
				</h3>
				<div className="mb-6 flex flex-wrap gap-2">
					{park.tags.map((tag) => (
						<span
							className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white backdrop-blur-sm"
							key={tag}
						>
							{tag}
						</span>
					))}
				</div>
				<Link
					className={cn(
						buttonVariants({ variant: "secondary" }),
						"w-full translate-y-4 py-3 font-bold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
					)}
					to={park.link}
				>
					View Safari Details
				</Link>
			</div>
		</div>
	);
}

export default function FeaturedParks() {
	return (
		<section className="px-6 py-24" id="parks">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<div className="max-w-2xl">
						<h2 className="mb-6 font-bold font-serif text-4xl text-primary md:text-5xl">
							The Heart of the Wild
						</h2>
						<p className="text-lg text-muted-foreground">
							Our deep expertise spans across India&apos;s most iconic wildlife
							reserves. From the tiger-rich hills of Ranthambore to the wetlands
							of Kaziranga, we ensure direct coordination with every local team.
						</p>
					</div>
					<Link
						className="group flex items-center gap-2 font-bold text-brand-brown text-sm uppercase tracking-widest"
						to="/destinations"
					>
						View All Parks
						<IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{parks.map((park) => (
						<motion.div key={park.name} variants={staggerItem}>
							<ParkCard park={park} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
