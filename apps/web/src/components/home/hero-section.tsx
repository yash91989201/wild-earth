import { IconArrowRight, IconShieldCheck } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

function AnimatedCounter({
	target,
	suffix,
	duration = 2000,
}: {
	target: number;
	suffix: string;
	duration?: number;
}) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	useEffect(() => {
		if (!isInView) {
			return;
		}
		const startTime = performance.now();
		const update = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - (1 - progress) ** 3;
			const current = Math.floor(target * eased);
			setCount(current);
			if (progress < 1) {
				requestAnimationFrame(update);
			}
		};
		requestAnimationFrame(update);
	}, [isInView, target, duration]);

	return (
		<span ref={ref}>
			{count.toLocaleString()}
			{suffix}
		</span>
	);
}

export default function HeroSection() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);

	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 sm:py-24">
			<div className="absolute inset-0 z-0">
				<motion.img
					alt="Safari Jungle Background"
					className="absolute inset-0 h-full w-full object-cover will-change-transform"
					height={1080}
					src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop"
					style={{ y, scale: 1.15 }}
					width={1920}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
			</div>

			<div className="relative z-10 max-w-5xl px-4 text-center sm:px-6">
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
					initial={false}
					transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
				>
					<IconShieldCheck className="h-4 w-4 text-accent" />
					<span className="font-bold text-white text-[10px] uppercase tracking-[0.2em] sm:text-xs">
						Verified Ground Operations &bull; Direct Booking
					</span>
				</motion.div>

				<motion.h1
					animate={{ opacity: 1, y: 0 }}
					className="mb-6 font-bold font-serif text-4xl text-white leading-[1.05] sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl"
					initial={false}
					transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.4 }}
				>
					Experience the Wild <br />
					Without the Middleman
				</motion.h1>

				<motion.p
					animate={{ opacity: 1, y: 0 }}
					className="mx-auto mb-10 max-w-2xl text-base text-white/90 leading-relaxed sm:text-lg md:mb-12 md:text-xl"
					initial={false}
					transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.6 }}
				>
					Direct access to India&apos;s premier national parks. Expert-led
					safaris managed entirely by our verified on-ground teams.
				</motion.p>

				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6"
					initial={false}
					transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.8 }}
				>
					<Link
						className="w-full rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-xl sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
						hash="booking-form"
						to="/"
					>
						Start Your Journey
					</Link>
					<Link
						className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
						to="/destinations"
					>
						Explore All Parks
						<IconArrowRight className="h-5 w-5" />
					</Link>
				</motion.div>

				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="mt-14 grid grid-cols-2 gap-6 border-white/10 border-t pt-8 md:mt-20 md:grid-cols-4 md:gap-8 md:pt-10"
					initial={false}
					transition={{ duration: 0.8, ease: easeOutExpo, delay: 1.0 }}
				>
					<div className="flex flex-col items-center">
						<span className="font-bold font-serif text-2xl text-accent sm:text-3xl">
							<AnimatedCounter suffix="+" target={5000} />
						</span>
						<span className="mt-1 text-center text-[10px] text-white/60 uppercase tracking-widest sm:text-xs">
							Happy Explorers
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="font-bold font-serif text-2xl text-accent sm:text-3xl">
							<AnimatedCounter suffix="%" target={100} />
						</span>
						<span className="mt-1 text-center text-[10px] text-white/60 uppercase tracking-widest sm:text-xs">
							Direct Operations
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="font-bold font-serif text-2xl text-accent sm:text-3xl">
							<AnimatedCounter suffix="hr" target={24} />
						</span>
						<span className="mt-1 text-center text-[10px] text-white/60 uppercase tracking-widest sm:text-xs">
							Rapid Response
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="font-bold font-serif text-2xl text-accent sm:text-3xl">
							ISO
						</span>
						<span className="mt-1 text-center text-[10px] text-white/60 uppercase tracking-widest sm:text-xs">
							Safety Certified
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
