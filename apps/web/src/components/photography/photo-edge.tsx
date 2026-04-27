import { IconDeviceDesktop, IconFocus, IconUsers } from "@tabler/icons-react";
import { motion } from "motion/react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const features = [
	{
		icon: IconFocus,
		title: "Customized Jeeps",
		description:
			"Our 4x4s are modified for photographers. With removed seats for extra space, specialized bean bag mounts on all rails, and a maximum of 3-4 photographers per vehicle.",
	},
	{
		icon: IconUsers,
		title: "Expert Mentorship",
		description:
			"Accompanied by award-winning wildlife photographers and local naturalists who understand animal behavior and anticipate action before it happens.",
	},
	{
		icon: IconDeviceDesktop,
		title: "Post-Processing",
		description:
			"Daily mid-day sessions at the lodge focusing on Lightroom/Photoshop workflows, image critiques, and developing your unique photographic style.",
	},
];

export default function PhotoEdge() {
	return (
		<section className="bg-[#1f4d2b] px-6 py-24 text-white">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="mb-16 text-center"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<h2 className="mb-6 font-bold font-serif text-4xl md:text-5xl">
						The WildEarth Photo Edge
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-white/70">
						We don&apos;t just take you to the animals; we place you in the best
						position to capture them.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 gap-12 md:grid-cols-3"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{features.map((feature) => (
						<motion.div
							className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
							key={feature.title}
							variants={staggerItem}
						>
							<feature.icon className="mb-6 h-10 w-10 text-[#d4af6a]" />
							<h3 className="mb-4 font-bold text-2xl">{feature.title}</h3>
							<p className="text-white/60 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
