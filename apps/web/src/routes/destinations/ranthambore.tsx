import {
	IconCalendar,
	IconMapPin,
	IconRuler,
	IconTree,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@wild-earth/ui/components/button";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const keyFacts = [
	{ icon: IconMapPin, label: "Location", value: "Sawai Madhopur, Rajasthan" },
	{ icon: IconRuler, label: "Area", value: "392 sq km" },
	{ icon: IconCalendar, label: "Established", value: "1980 (National Park)" },
	{ icon: IconTree, label: "Zones", value: "10 Safari Zones" },
];

const wildlife = [
	{
		name: "Bengal Tiger",
		desc: "The star attraction — Ranthambore is one of the best places in the world to spot wild tigers.",
	},
	{
		name: "Indian Leopard",
		desc: "Often seen resting on rocky outcrops or scampering through the dry deciduous forest.",
	},
	{
		name: "Sloth Bear",
		desc: "Shaggy and nocturnal, frequently spotted near the park's many berry-laden bushes.",
	},
	{
		name: "Crocodile",
		desc: "Mugger crocodiles bask along the banks of Padam Talao and Malik Talao.",
	},
	{
		name: "Sambar Deer",
		desc: "The largest Indian deer, a primary prey species and common sighting across all zones.",
	},
	{
		name: "Striped Hyena",
		desc: "Elusive scavenger most active at dawn and dusk in the park's quieter corners.",
	},
];

const zones = [
	{
		name: "Zone 1 – 5",
		desc: "The core tiger habitat with the highest density of sightings. Zone 3 and 4 are especially productive, surrounding Padam Talao and Malik Talao.",
	},
	{
		name: "Zone 6 – 10",
		desc: "The buffer zones offer a wilder, less-crowded experience with excellent birding and increasing tiger movement.",
	},
];

const carouselImages = [
	"/assets/ranthambore/01.jpg",
	"/assets/ranthambore/02.jpg",
	"/assets/ranthambore/03.jpg",
];

const gallery = [
	"/assets/ranthambore/01.jpg",
	"/assets/ranthambore/02.jpg",
	"/assets/ranthambore/03.jpg",
];

export const Route = createFileRoute("/destinations/ranthambore")({
	component: RouteComponent,
});

function RouteComponent() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);
	const [currentImage, setCurrentImage] = useState(0);
	const [direction, setDirection] = useState(1);
	const [isDragging, setIsDragging] = useState(false);
	const dragStartX = useRef(0);

	const goToNext = () => {
		setDirection(1);
		setCurrentImage((prev) => (prev + 1) % carouselImages.length);
	};

	const goToPrev = () => {
		setDirection(-1);
		setCurrentImage(
			(prev) => (prev - 1 + carouselImages.length) % carouselImages.length
		);
	};

	const handleDragStart = (clientX: number) => {
		setIsDragging(true);
		dragStartX.current = clientX;
	};

	const handleDragEnd = (clientX: number) => {
		setIsDragging(false);
		const diff = clientX - dragStartX.current;
		if (Math.abs(diff) > 50) {
			if (diff < 0) {
				goToNext();
			} else {
				goToPrev();
			}
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isDragging) {
				setDirection(1);
				setCurrentImage((prev) => (prev + 1) % carouselImages.length);
			}
		}, 5000);
		return () => clearInterval(interval);
	}, [isDragging]);

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction > 0 ? "-100%" : "100%",
			opacity: 0,
		}),
	};

	return (
		<main className="flex-grow bg-background">
			{/* Hero */}
			<section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<AnimatePresence custom={direction} initial={false} mode="popLayout">
						<motion.img
							alt={`Ranthambore ${currentImage + 1}`}
							animate="center"
							className="absolute inset-0 h-full w-full object-cover will-change-transform cursor-grab active:cursor-grabbing"
							custom={direction}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.2}
							exit="exit"
							initial="enter"
							key={currentImage}
							onDragEnd={(_, info) => handleDragEnd(info.point.x)}
							onDragStart={(_, info) => handleDragStart(info.point.x)}
							src={carouselImages[currentImage]}
							style={{ y, scale: 1.15 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							variants={slideVariants}
						/>
					</AnimatePresence>
					<div className="absolute inset-0 bg-black/50" />
				</div>

				{/* Navigation Arrows */}
				<button
					aria-label="Previous image"
					className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/30"
					onClick={goToPrev}
				>
					<svg
						className="h-6 w-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M15 19l-7-7 7-7"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
						/>
					</svg>
				</button>
				<button
					aria-label="Next image"
					className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/30"
					onClick={goToNext}
				>
					<svg
						className="h-6 w-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M9 5l7 7-7 7"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
						/>
					</svg>
				</button>

				{/* Dots */}
				<div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
					{carouselImages.map((_, index) => (
						<button
							aria-label={`Go to image ${index + 1}`}
							className={`h-2 rounded-full transition-all ${
								index === currentImage
									? "w-8 bg-white"
									: "w-2 bg-white/50 hover:bg-white/75"
							}`}
							key={index}
							onClick={() => {
								setDirection(index > currentImage ? 1 : -1);
								setCurrentImage(index);
							}}
						/>
					))}
				</div>
				<motion.div
					className="relative z-10 max-w-4xl px-6 text-center text-white"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
						Rajasthan, India
					</span>
					<h1 className="font-bold font-serif text-5xl leading-tight md:text-7xl">
						Ranthambore
						<br />
						National Park
					</h1>
				</motion.div>
			</section>

			{/* Overview & Key Facts */}
			<section className="px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="mb-16 max-w-3xl"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
							About the Park
						</span>
						<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-4xl">
							Where Tigers Roam Ancient Ruins
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Ranthambore National Park is one of India's most celebrated
							wildlife reserves. Set against the dramatic backdrop of the
							10th-century Ranthambore Fort, the park's dry deciduous forests,
							open grasslands, and serene lakes create the perfect stage for
							unforgettable tiger encounters. Once the private hunting ground of
							the Maharajas of Jaipur, it is now a global beacon for
							conservation and responsible wildlife tourism.
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{keyFacts.map((fact) => (
							<motion.div
								className="rounded-lg bg-secondary p-6"
								key={fact.label}
								variants={staggerItem}
							>
								<fact.icon className="mb-4 h-8 w-8 text-accent" />
								<p className="mb-1 text-muted-foreground text-sm">
									{fact.label}
								</p>
								<p className="font-semibold text-foreground">{fact.value}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Wildlife */}
			<section className="bg-secondary px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="mb-16 max-w-3xl"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
							Wildlife
						</span>
						<h2 className="font-bold font-serif text-3xl text-primary md:text-4xl">
							What You May Encounter
						</h2>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{wildlife.map((animal) => (
							<motion.div
								className="rounded-lg bg-background p-8"
								key={animal.name}
								variants={staggerItem}
							>
								<h3 className="mb-3 font-bold font-serif text-primary text-xl">
									{animal.name}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{animal.desc}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Safari Zones */}
			<section className="px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
						<motion.div
							initial="hidden"
							variants={fadeUp}
							viewport={viewportOnce}
							whileInView="visible"
						>
							<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
								Safari Zones
							</span>
							<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-4xl">
								Navigate the Landscape
							</h2>
							<div className="space-y-8">
								{zones.map((zone) => (
									<div key={zone.name}>
										<h3 className="mb-2 font-bold text-foreground text-lg">
											{zone.name}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{zone.desc}
										</p>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							className="grid grid-cols-2 gap-4"
							initial="hidden"
							variants={staggerContainer}
							viewport={viewportOnce}
							whileInView="visible"
						>
							{gallery.map((src, i) => (
								<motion.div
									className={`group overflow-hidden rounded-lg ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
									key={src}
									variants={staggerItem}
								>
									<img
										alt={`Ranthambore ${i + 1}`}
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
										src={src}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Best Time */}
			<section className="bg-primary px-6 py-24 text-primary-foreground">
				<div className="mx-auto max-w-4xl text-center">
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
							Plan Your Visit
						</span>
						<h2 className="mb-6 font-bold font-serif text-3xl md:text-4xl">
							Best Time to Visit
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-primary-foreground/80 leading-relaxed">
							October to June is the prime window for tiger sightings. The
							summer months (April – June) offer the highest probability of
							encounters as animals gather around the park's remaining water
							bodies. The park remains closed during the monsoon season from
							July to September.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">
									Winter
								</p>
								<p className="font-bold text-lg">Oct – Feb</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">
									Pleasant weather, lush greens
								</p>
							</div>
							<div className="rounded-lg border border-accent bg-accent/10 p-6">
								<p className="mb-2 text-accent text-sm">Summer</p>
								<p className="font-bold text-lg">Mar – Jun</p>
								<p className="mt-2 text-primary-foreground/60 text-sm">
									Peak tiger sightings
								</p>
							</div>
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">
									Monsoon
								</p>
								<p className="font-bold text-lg">Jul – Sep</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">
									Park closed
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA */}
			<section className="px-6 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-4xl">
							Ready to Track the Tiger?
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
							Let us craft a bespoke Ranthambore safari experience for you —
							complete with expert naturalists, zone-optimized game drives, and
							stays at the finest lodges.
						</p>
						<Button className="bg-primary px-8 py-6 font-semibold text-lg text-primary-foreground hover:bg-primary/90">
							Enquire Now
						</Button>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
