import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Button } from "@wild-earth/ui/components/button";
import { cn } from "@wild-earth/ui/lib/utils";
import {
	AnimatePresence,
	type MotionValue,
	motion,
	useScroll,
	useTransform,
} from "motion/react";
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

function WildlifeScrollytellingSection({
	wildlife,
	images,
}: {
	wildlife: DestinationPageData["wildlife"];
	images: string[];
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<section
			className="relative bg-black"
			data-hide-site-header
			ref={containerRef}
		>
			<div
				className="relative w-full"
				style={{ height: `${wildlife.items.length * 100}vh` }}
			>
				<div className="sticky top-0 h-screen w-full overflow-hidden">
					{wildlife.items.map((animal, index) => (
						<WildlifeItem
							animal={animal}
							images={images}
							index={index}
							key={animal.name}
							progress={scrollYProgress}
							total={wildlife.items.length}
						/>
					))}

					<div className="pointer-events-none absolute top-0 left-0 z-20 w-full bg-gradient-to-b from-black/80 to-transparent p-6 pt-24 md:p-12 md:pt-32">
						<div className="mx-auto max-w-7xl">
							<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
								{wildlife.eyebrow}
							</span>
							<h2 className="font-bold font-serif text-3xl text-white md:text-5xl">
								{wildlife.title}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function WildlifeItem({
	animal,
	index,
	total,
	images,
	progress,
}: {
	animal: DestinationPageData["wildlife"]["items"][0];
	index: number;
	total: number;
	images: string[];
	progress: MotionValue<number>;
}) {
	const start = index / total;
	const end = (index + 1) / total;

	const opacity = useTransform(
		progress,
		[Math.max(0, start - 0.05), start, end - 0.05, Math.min(1, end)],
		[0, 1, 1, 0]
	);

	const scale = useTransform(progress, [start, end], [1, 1.1]);
	const contentY = useTransform(
		progress,
		[Math.max(0, start - 0.03), start + 0.08, end - 0.12, Math.min(1, end)],
		[96, 0, 0, -32]
	);

	const imageSrc = images[index % images.length];

	return (
		<motion.div
			className="absolute inset-0 h-full w-full"
			style={{ opacity, zIndex: index }}
		>
			<motion.img
				alt={animal.name}
				className="absolute inset-0 h-full w-full object-cover"
				height={1080}
				src={imageSrc}
				style={{ scale }}
				width={1920}
			/>
			<div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

			<div className="absolute inset-0 flex flex-col justify-end p-6 pb-24 md:p-12 md:pb-32">
				<div className="mx-auto w-full max-w-7xl">
					<motion.div className="max-w-2xl" style={{ y: contentY }}>
						<div className="mb-4 flex items-baseline gap-4">
							<span className="font-serif text-4xl text-accent md:text-5xl">
								{String(index + 1).padStart(2, "0")}
							</span>
							<span className="text-white/60 text-xl">
								/ {String(total).padStart(2, "0")}
							</span>
						</div>
						<h3 className="mb-4 font-bold font-serif text-4xl text-white md:text-6xl">
							{animal.name}
						</h3>
						<p className="text-lg text-white/80 leading-relaxed md:text-xl">
							{animal.description}
						</p>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

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

				<div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/30 px-3 py-2 ring-1 ring-white/15 backdrop-blur-md">
					<button
						aria-label="Previous image"
						className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
						onClick={goToPrev}
						type="button"
					>
						<IconChevronLeft className="h-5 w-5" />
					</button>

					<div className="flex items-center gap-2">
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

					<button
						aria-label="Next image"
						className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
						onClick={goToNext}
						type="button"
					>
						<IconChevronRight className="h-5 w-5" />
					</button>
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
						className="max-w-3xl"
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
				</div>
			</section>

			<section className="relative overflow-hidden bg-primary px-6 py-16 text-primary-foreground sm:py-20">
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05)_0%,transparent_50%,rgba(0,0,0,0.1)_100%)]" />
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="relative z-10 grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-0"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{destination.keyFacts.map((fact) => (
							<motion.div
								className="flex flex-col items-center text-center"
								key={fact.label}
								variants={staggerItem}
							>
								<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/20">
									<fact.icon className="h-6 w-6 text-accent" />
								</div>
								<p className="mb-3 font-medium text-primary-foreground/70 text-xs uppercase tracking-[0.2em]">
									{fact.label}
								</p>
								<p className="font-bold font-serif text-2xl text-white tracking-tight md:text-3xl">
									{fact.value}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			<WildlifeScrollytellingSection
				images={destination.landscape.gallery}
				wildlife={destination.wildlife}
			/>

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

			<section className="bg-secondary px-6 py-24 md:py-32">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
						<motion.div
							className="lg:col-span-5"
							initial="hidden"
							variants={fadeUp}
							viewport={viewportOnce}
							whileInView="visible"
						>
							<div className="sticky top-24">
								<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
									{destination.bestTime.eyebrow}
								</span>
								<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-5xl">
									{destination.bestTime.title}
								</h2>
								<p className="text-lg text-muted-foreground leading-relaxed">
									{destination.bestTime.description}
								</p>
							</div>
						</motion.div>

						<motion.div
							className="lg:col-span-6 lg:col-start-7"
							initial="hidden"
							variants={staggerContainer}
							viewport={viewportOnce}
							whileInView="visible"
						>
							<div className="flex flex-col">
								{destination.bestTime.seasons.map((season) => (
									<motion.div
										className={cn(
											"relative border-primary/10 border-l-2 py-8 pl-8 md:py-12 md:pl-12",
											season.highlighted && "border-accent"
										)}
										key={season.name}
										variants={staggerItem}
									>
										<div
											className={cn(
												"absolute top-1/2 left-0 h-3 w-3 -translate-x-[7px] -translate-y-1/2 rounded-full ring-4 ring-secondary",
												season.highlighted ? "bg-accent" : "bg-primary/20"
											)}
										/>
										<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
											<h3
												className={cn(
													"mb-2 font-bold font-serif text-2xl md:text-3xl",
													season.highlighted
														? "text-primary"
														: "text-primary/60"
												)}
											>
												{season.name}
											</h3>
											<span
												className={cn(
													"mb-4 font-medium text-sm uppercase tracking-widest sm:mb-0",
													season.highlighted
														? "text-accent"
														: "text-muted-foreground"
												)}
											>
												{season.months}
											</span>
										</div>
										<p
											className={cn(
												"text-lg leading-relaxed",
												season.highlighted
													? "text-muted-foreground"
													: "text-muted-foreground/70"
											)}
										>
											{season.description}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
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
