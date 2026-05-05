import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@wild-earth/ui/components/badge";
import { buttonVariants } from "@wild-earth/ui/components/button";
import { Card, CardContent, CardFooter } from "@wild-earth/ui/components/card";
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
		<motion.div variants={staggerItem}>
			<Card className="group relative flex h-[600px] flex-col justify-end overflow-hidden rounded-[40px] border-0 shadow-2xl">
				<img
					alt={park.name}
					className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
					height={600}
					src={park.image}
					width={800}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

				<CardContent className="relative z-10 border-0 bg-transparent px-10 py-10 pb-0 shadow-none">
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
						<Badge
							className="rounded-full border-white/20 bg-white/20 px-4 py-2 font-medium text-sm text-white backdrop-blur-md hover:bg-white/30"
							variant="outline"
						>
							Best Time: {park.bestTime}
						</Badge>
						<Badge
							className="rounded-full border-white/20 bg-white/20 px-4 py-2 font-medium text-sm text-white backdrop-blur-md hover:bg-white/30"
							variant="outline"
						>
							Key Species: {park.keySpecies}
						</Badge>
					</div>
				</CardContent>

				<CardFooter className="relative z-10 border-0 bg-transparent px-10 pb-10 shadow-none">
					<Link className={buttonVariants({ size: "lg" })} to={park.link}>
						Explore {park.name.split(" ")[0]}
						<IconArrowRight className="h-5 w-5" />
					</Link>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
