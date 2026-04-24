import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function LodgesHero() {
	return (
		<section className="bg-white px-6 pt-32 pb-16">
			<div className="mx-auto max-w-3xl text-center">
				<motion.span
					className="mb-4 block font-bold text-[#d4af6a] text-xs uppercase tracking-[0.2em]"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Where Wilderness Meets Luxury
				</motion.span>
				<motion.h1
					className="mb-6 font-bold font-serif text-5xl text-[#1f4d2b] md:text-6xl"
					initial="hidden"
					transition={{ delay: 0.15 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Our Signature Lodges
				</motion.h1>
				<motion.p
					className="text-gray-600 text-xl"
					initial="hidden"
					transition={{ delay: 0.3 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					We partner exclusively with India&apos;s most exceptional eco-lux
					camps. Wake up to the roar of a tiger, sleep beneath a canvas of
					stars.
				</motion.p>
			</div>
		</section>
	);
}
