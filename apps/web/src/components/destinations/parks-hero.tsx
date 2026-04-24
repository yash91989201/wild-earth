import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function ParksHero() {
	return (
		<section className="bg-white px-6 pt-32 pb-16">
			<div className="mx-auto max-w-3xl text-center">
				<motion.h1
					className="mb-6 font-bold font-serif text-5xl text-[#1f4d2b] md:text-6xl"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					India&apos;s Premier National Parks
				</motion.h1>
				<motion.p
					className="text-gray-600 text-xl"
					initial="hidden"
					transition={{ delay: 0.15 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Explore the raw beauty of India&apos;s wilderness. We offer direct
					access to the most exclusive and wildlife-rich reserves in the
					country.
				</motion.p>
			</div>
		</section>
	);
}
