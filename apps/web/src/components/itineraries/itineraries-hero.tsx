import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function ItinerariesHero() {
	return (
		<section className="bg-secondary px-6 pt-32 pb-16">
			<div className="mx-auto max-w-3xl text-center">
				<motion.span
					className="mb-4 block font-bold text-accent text-xs uppercase tracking-[0.2em]"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Curated Journeys
				</motion.span>
				<motion.h1
					className="mb-6 font-bold font-serif text-5xl text-primary md:text-6xl"
					initial="hidden"
					transition={{ delay: 0.15 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Signature Itineraries
				</motion.h1>
				<motion.p
					className="text-muted-foreground text-xl"
					initial="hidden"
					transition={{ delay: 0.3 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Meticulously crafted journeys combining iconic wildlife encounters
					with unparalleled luxury and conservation-led practices.
				</motion.p>
			</div>
		</section>
	);
}
