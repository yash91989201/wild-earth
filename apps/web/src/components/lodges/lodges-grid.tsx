import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import LodgeCard, { type Lodge } from "./lodge-card";

const lodges: Lodge[] = [
	{
		name: "The Banyan Camp",
		location: "Ranthambore",
		description:
			"Recalling the nostalgia of the 1920s safari era, these opulent tents are furnished with campaign-style furniture and brass bathtubs, set around a crackling campfire.",
		image:
			"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
		imageAlt: "Luxury Tent",
	},
	{
		name: "River Retreat",
		location: "Jim Corbett",
		description:
			"Perched on the banks of the Ramganga river, this eco-lodge offers panoramic views of the Himalayan foothills. Fall asleep to the sound of the rushing waters.",
		image:
			"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
		imageAlt: "Jungle Lodge",
	},
	{
		name: "The Canopy Treehouse",
		location: "Kanha",
		description:
			"Elevate your safari experience. These luxurious treehouses hide within the sal forests, offering eye-level views with canopy birdlife and unparalleled privacy.",
		image:
			"https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop",
		imageAlt: "Treehouse",
	},
];

export default function LodgesGrid() {
	return (
		<section className="bg-background px-6 pb-24">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{lodges.map((lodge) => (
						<LodgeCard key={lodge.name} lodge={lodge} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
