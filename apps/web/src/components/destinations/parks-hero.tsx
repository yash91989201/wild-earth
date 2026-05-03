import { motion, useScroll, useTransform } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function ParksHero() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);

	return (
		<section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
			<motion.img
				alt="Indian National Parks"
				className="absolute inset-0 h-full w-full object-cover will-change-transform"
				height={800}
				src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop"
				style={{ y, scale: 1.15 }}
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
					Explore the Wild
				</motion.span>
				<motion.h1
					className="mb-6 font-bold font-serif text-5xl md:text-7xl"
					initial="hidden"
					transition={{ delay: 0.15 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					India&apos;s Premier National Parks
				</motion.h1>
				<motion.p
					className="text-white/90 text-xl"
					initial="hidden"
					transition={{ delay: 0.3 }}
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
