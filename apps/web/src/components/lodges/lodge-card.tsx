import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { staggerItem } from "@/lib/animations";

export interface Lodge {
	description: string;
	image: string;
	imageAlt: string;
	location: string;
	name: string;
}

export default function LodgeCard({ lodge }: { lodge: Lodge }) {
	return (
		<motion.div className="group cursor-pointer" variants={staggerItem}>
			<div className="mb-6 h-80 overflow-hidden rounded-3xl">
				<img
					alt={lodge.imageAlt}
					className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					height={320}
					src={lodge.image}
					width={600}
				/>
			</div>
			<h3 className="mb-2 font-bold font-serif text-2xl text-primary">
				{lodge.name}
			</h3>
			<p className="mb-4 font-bold text-accent text-sm uppercase tracking-widest">
				{lodge.location}
			</p>
			<p className="mb-4 line-clamp-3 text-muted-foreground">{lodge.description}</p>
			<span className="flex items-center gap-2 font-bold text-sm transition-colors group-hover:text-accent">
				Explore Lodge
				<IconArrowRight className="h-4 w-4" />
			</span>
		</motion.div>
	);
}
