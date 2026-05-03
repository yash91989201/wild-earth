import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { staggerItem } from "@/lib/animations";

export interface Park {
	bestTime: string;
	description: string;
	image: string;
	keySpecies: string;
	link: string;
	location: string;
	name: string;
}

export default function ParkCard({ park }: { park: Park }) {
	return (
		<motion.div
			className="group relative h-[600px] overflow-hidden rounded-[40px] bg-card shadow-2xl"
			variants={staggerItem}
		>
			<img
				alt={park.name}
				className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
				height={600}
				src={park.image}
				width={800}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
			<div className="absolute inset-0 flex flex-col justify-end p-10">
				<div className="mb-4 font-bold text-accent uppercase tracking-[0.2em]">
					{park.location}
				</div>
				<h2 className="mb-6 font-bold font-serif text-5xl text-white">
					{park.name}
				</h2>
				<p className="mb-8 max-w-lg text-lg text-white/80 leading-relaxed">
					{park.description}
				</p>
				<div className="mb-8 flex flex-wrap gap-3">
					<span className="rounded-full bg-white/20 px-4 py-2 font-medium text-sm text-white backdrop-blur-md">
						Best Time: {park.bestTime}
					</span>
					<span className="rounded-full bg-white/20 px-4 py-2 font-medium text-sm text-white backdrop-blur-md">
						Key Species: {park.keySpecies}
					</span>
				</div>
				<Link
					className="inline-flex w-max items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-bold text-accent-foreground text-lg transition-all hover:bg-brand-gold-strong"
					to={park.link}
				>
					Explore {park.name.split(" ")[0]}
					<IconArrowRight className="h-5 w-5" />
				</Link>
			</div>
		</motion.div>
	);
}
