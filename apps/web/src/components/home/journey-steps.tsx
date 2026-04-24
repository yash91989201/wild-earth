import { motion } from "motion/react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const steps = [
	{
		number: 1,
		title: "Share Preferences",
		description:
			"Tell us your dates, group size, and specific wildlife interests.",
	},
	{
		number: 2,
		title: "Tailored Plan",
		description:
			"Our ground teams verify availability and craft a 24-hour proposal.",
	},
	{
		number: 3,
		title: "Secure Payment",
		description:
			"Complete your booking via our global secure payment gateways.",
	},
	{
		number: 4,
		title: "Expert Experience",
		description:
			"Arrive and experience the wild with our dedicated naturalists.",
	},
];

export default function JourneySteps() {
	return (
		<div className="mx-auto max-w-7xl text-center">
			<motion.span
				className="mb-4 block font-bold text-[#d4af6a] text-xs uppercase tracking-[0.2em]"
				initial="hidden"
				variants={fadeUp}
				viewport={viewportOnce}
				whileInView="visible"
			>
				Operational Excellence
			</motion.span>
			<motion.h2
				className="mb-20 font-bold font-serif text-4xl text-[#1f4d2b] md:text-5xl"
				initial="hidden"
				variants={fadeUp}
				viewport={viewportOnce}
				whileInView="visible"
			>
				Your Journey to the Wild
			</motion.h2>

			<motion.div
				className="grid grid-cols-1 gap-12 md:grid-cols-4"
				initial="hidden"
				variants={staggerContainer}
				viewport={viewportOnce}
				whileInView="visible"
			>
				{steps.map((step, index) => (
					<motion.div
						className="relative flex flex-col items-center"
						key={step.number}
						variants={staggerItem}
					>
						<div
							className={`step-number relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 font-bold text-2xl ${index === 3 ? "border-[#1f4d2b] bg-[#1f4d2b] text-white" : "border-[#d4af6a] bg-white text-[#1f4d2b]"}`}
						>
							{step.number}
						</div>
						<h3 className="mb-3 font-bold text-xl">{step.title}</h3>
						<p className="px-4 text-gray-500 text-sm leading-relaxed">
							{step.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
