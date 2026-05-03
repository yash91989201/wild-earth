import { motion, useScroll, useTransform } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function ConservationHero() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);

	return (
		<section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
			<motion.img
				alt="Elephants in wild"
				className="absolute inset-0 h-full w-full object-cover will-change-transform"
				height={1080}
				src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop"
				style={{ y, scale: 1.15 }}
				width={1920}
			/>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
				<motion.span
					className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Our Ethos
				</motion.span>
				<motion.h1
					className="font-bold font-serif text-5xl leading-tight md:text-7xl"
					initial="hidden"
					transition={{ delay: 0.15 }}
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Care of the Land,
					<br />
					Care of the Wildlife,
					<br />
					Care of the People.
				</motion.h1>
			</div>
		</section>
	);
}
