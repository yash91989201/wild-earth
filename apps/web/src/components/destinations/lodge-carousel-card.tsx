import { motion } from "motion/react";
import { staggerItem } from "@/lib/animations";

export interface Lodge {
	name: string;
	location: string;
	description: string;
	image: string;
	category: "luxury" | "premium" | "experiential";
}

interface LodgeCarouselCardProps {
	lodge: Lodge;
}

export default function LodgeCarouselCard({ lodge }: LodgeCarouselCardProps) {
	return (
		<motion.div
			className="group flex flex-col h-full cursor-default"
			variants={staggerItem}
		>
			{/* Image */}
			<div className="relative mb-5 overflow-hidden rounded-[40px] aspect-[4/3]">
				<img
					alt={lodge.name}
					src={lodge.image}
					className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
			</div>

			{/* Content */}
			<div className="flex flex-col flex-1 px-1">
				<p className="mb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
					{lodge.location}
				</p>
				<h3 className="mb-2 font-serif text-xl font-bold text-primary leading-tight">
					{lodge.name}
				</h3>
				<p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
					{lodge.description}
				</p>
			</div>
		</motion.div>
	);
}
