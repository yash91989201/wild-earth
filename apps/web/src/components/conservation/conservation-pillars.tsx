import { IconLeaf, IconPaw, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const pillars = [
	{
		icon: IconLeaf,
		title: "Care of the Land",
		description:
			"We operate with a zero-plastic policy across all our ground operations. Our camps utilize solar power and rainwater harvesting to ensure our footprint in the jungle is absolute zero. We leave the land exactly as we found it.",
	},
	{
		icon: IconPaw,
		title: "Care of the Wildlife",
		description:
			"A percentage of every safari goes directly to the Corbett and Ranthambore Foundation. We adhere to strict ethical viewing guidelines—never crowding an animal, and always prioritizing their peace over a photograph.",
	},
	{
		icon: IconUsers,
		title: "Care of the People",
		description:
			"100% of our naturalists, drivers, and guides are hired from local indigenous communities bordering the parks. By making wildlife tourism profitable for locals, we turn them into the fiercest protectors of the forest.",
	},
];

export default function ConservationPillars() {
	return (
		<section className="bg-white px-6 py-24">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="grid grid-cols-1 gap-16 lg:grid-cols-3"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{pillars.map((pillar) => (
						<motion.div key={pillar.title} variants={staggerItem}>
							<pillar.icon className="mb-6 h-12 w-12 text-accent" />
							<h3 className="mb-4 font-bold font-serif text-2xl text-primary">
								{pillar.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{pillar.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
