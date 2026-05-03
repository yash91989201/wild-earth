import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function LodgesHero() {
	return (
		<section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
			<img
				alt="Luxury Safari Lodge"
				className="absolute inset-0 h-full w-full object-cover"
				height={800}
				src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
				width={1920}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
				<motion.span
					className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Where Wilderness Meets Luxury
				</motion.span>
				<motion.h1
					className="mb-6 font-bold font-serif text-5xl md:text-7xl"
					initial="hidden"
					transition={{ delay: 0.15 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Our Signature Lodges
				</motion.h1>
				<motion.p
					className="text-white/90 text-xl"
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
