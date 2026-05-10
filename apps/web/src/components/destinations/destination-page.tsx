import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Button } from "@wild-earth/ui/components/button";
import { cn } from "@wild-earth/ui/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

type DestinationFactIcon = ComponentType<{ className?: string }>;

export type DestinationPageData = {
	hero: {
		eyebrow: string;
		title: [string, ...string[]];
		images: [string, ...string[]];
		imageAlt: string;
	};
	overview: {
		eyebrow: string;
		title: string;
		description: string;
	};
	keyFacts: Array<{
		icon: DestinationFactIcon;
		label: string;
		value: string;
	}>;
	wildlife: {
		eyebrow: string;
		title: string;
		items: Array<{
			name: string;
			description: string;
		}>;
	};
	landscape: {
		eyebrow: string;
		title: string;
		items: Array<{
			name: string;
			description: string;
		}>;
		gallery: [string, ...string[]];
		galleryAlt: string;
	};
	bestTime: {
		eyebrow: string;
		title: string;
		description: string;
		seasons: Array<{
			name: string;
			months: string;
			description: string;
			highlighted?: boolean;
		}>;
	};
	cta: {
		title: string;
		description: string;
		buttonLabel: string;
	};
};

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

export default function DestinationPage({
	destination,
}: {
	destination: DestinationPageData;
}) {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);
	const [currentImage, setCurrentImage] = useState(0);
	const [direction, setDirection] = useState(1);
	const [isDragging, setIsDragging] = useState(false);
	const dragStartX = useRef(0);

	const imageCount = destination.hero.images.length;

	const goToNext = () => {
		setDirection(1);
		setCurrentImage((prev) => (prev + 1) % imageCount);
	};

	const goToPrev = () => {
		setDirection(-1);
		setCurrentImage((prev) => (prev - 1 + imageCount) % imageCount);
	};

	const handleDragStart = (clientX: number) => {
		setIsDragging(true);
		dragStartX.current = clientX;
	};

	const handleDragEnd = (clientX: number) => {
		setIsDragging(false);
		const diff = clientX - dragStartX.current;

		if (Math.abs(diff) <= 50) {
			return;
		}

		if (diff < 0) {
			goToNext();
			return;
		}

		goToPrev();
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isDragging) {
				setDirection(1);
				setCurrentImage((prev) => (prev + 1) % imageCount);
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [imageCount, isDragging]);

	return (
		<main className="flex-grow bg-background">
			<section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<AnimatePresence custom={direction} initial={false} mode="popLayout">
						<motion.img
							alt={`${destination.hero.imageAlt} ${currentImage + 1}`}
							animate="center"
							className="absolute inset-0 h-full w-full cursor-grab object-cover will-change-transform active:cursor-grabbing"
							custom={direction}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.2}
							exit="exit"
							height={1080}
							initial="enter"
							key={currentImage}
							onDragEnd={(_, info) => handleDragEnd(info.point.x)}
							onDragStart={(_, info) => handleDragStart(info.point.x)}
							src={destination.hero.images[currentImage]}
							style={{ y, scale: 1.15 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							variants={slideVariants}
							width={1920}
						/>
					</AnimatePresence>
					<div className="absolute inset-0 bg-black/50" />
				</div>

				<button
					aria-label="Previous image"
					className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/30"
					onClick={goToPrev}
					type="button"
				>
					<IconChevronLeft className="h-6 w-6 text-white" />
				</button>
				<button
					aria-label="Next image"
					className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors hover:bg-white/30"
					onClick={goToNext}
					type="button"
				>
					<IconChevronRight className="h-6 w-6 text-white" />
				</button>

				<div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
					{destination.hero.images.map((image, index) => (
						<button
							aria-label={`Go to image ${index + 1}`}
							className={cn(
								"h-2 rounded-full transition-all",
								index === currentImage && "w-8 bg-white",
								index !== currentImage && "w-2 bg-white/50 hover:bg-white/75"
							)}
							key={image}
							onClick={() => {
								setDirection(index > currentImage ? 1 : -1);
								setCurrentImage(index);
							}}
							type="button"
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
						{destination.hero.eyebrow}
					</span>
					<h1 className="font-bold font-serif text-5xl leading-tight md:text-7xl">
						{destination.hero.title.map((line, index) => (
							<span key={line}>
								{line}
								{index < destination.hero.title.length - 1 && <br />}
							</span>
						))}
					</h1>
				</motion.div>
			</section>

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
							{destination.overview.eyebrow}
						</span>
						<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-4xl">
							{destination.overview.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							{destination.overview.description}
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{destination.keyFacts.map((fact) => (
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
							{destination.wildlife.eyebrow}
						</span>
						<h2 className="font-bold font-serif text-3xl text-primary md:text-4xl">
							{destination.wildlife.title}
						</h2>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{destination.wildlife.items.map((animal) => (
							<motion.div
								className="rounded-lg bg-background p-8"
								key={animal.name}
								variants={staggerItem}
							>
								<h3 className="mb-3 font-bold font-serif text-primary text-xl">
									{animal.name}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{animal.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

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
								{destination.landscape.eyebrow}
							</span>
							<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-4xl">
								{destination.landscape.title}
							</h2>
							<div className="space-y-8">
								{destination.landscape.items.map((item) => (
									<div key={item.name}>
										<h3 className="mb-2 font-bold text-foreground text-lg">
											{item.name}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{item.description}
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
							{destination.landscape.gallery.map((src, index) => (
								<motion.div
									className={cn(
										"group overflow-hidden rounded-lg",
										index === 0 && "col-span-2 aspect-video",
										index !== 0 && "aspect-square"
									)}
									key={src}
									variants={staggerItem}
								>
									<img
										alt={`${destination.landscape.galleryAlt} ${index + 1}`}
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
										height={900}
										src={src}
										width={1600}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			<section className="bg-primary px-6 py-24 text-primary-foreground">
				<div className="mx-auto max-w-4xl text-center">
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
							{destination.bestTime.eyebrow}
						</span>
						<h2 className="mb-6 font-bold font-serif text-3xl md:text-4xl">
							{destination.bestTime.title}
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-primary-foreground/80 leading-relaxed">
							{destination.bestTime.description}
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							{destination.bestTime.seasons.map((season) => (
								<div
									className={cn(
										"rounded-lg border p-6",
										season.highlighted && "border-accent bg-accent/10",
										!season.highlighted && "border-white/20"
									)}
									key={season.name}
								>
									<p
										className={cn(
											"mb-2 text-sm",
											season.highlighted && "text-accent",
											!season.highlighted && "text-primary-foreground/60"
										)}
									>
										{season.name}
									</p>
									<p className="font-bold text-lg">{season.months}</p>
									<p
										className={cn(
											"mt-2 text-sm",
											season.highlighted && "text-primary-foreground/60",
											!season.highlighted && "text-primary-foreground/50"
										)}
									>
										{season.description}
									</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<section className="px-6 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-4xl">
							{destination.cta.title}
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
							{destination.cta.description}
						</p>
						<Button className="bg-primary px-8 py-6 font-semibold text-lg text-primary-foreground hover:bg-primary/90">
							{destination.cta.buttonLabel}
						</Button>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
