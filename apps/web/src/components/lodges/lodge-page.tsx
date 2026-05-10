import { IconArrowRight, IconQuote, IconX } from "@tabler/icons-react";
import { Button } from "@wild-earth/ui/components/button";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@wild-earth/ui/components/carousel";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
} from "@wild-earth/ui/components/dialog";
import { cn } from "@wild-earth/ui/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	fadeLeft,
	fadeUp,
	staggerContainer,
	viewportOnce,
} from "@/lib/animations";
import type { LodgePageData, LodgePageRoom } from "@/lib/types";

function RoomGallery({
	onClose,
	room,
}: {
	onClose: () => void;
	room: LodgePageRoom;
}) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	const onSelect = useCallback(() => {
		if (!api) {
			return;
		}
		setCurrent(api.selectedScrollSnap());
	}, [api]);

	useEffect(() => {
		if (!api) {
			return;
		}
		onSelect();
		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api, onSelect]);

	return (
		<motion.div
			animate={{ opacity: 1, scale: 1 }}
			className="relative h-full w-full"
			initial={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
		>
			<DialogClose
				render={
					<button
						className="absolute top-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-black/50 text-white transition-colors hover:bg-black/70 sm:top-6 sm:right-6 sm:h-12 sm:w-12"
						onClick={onClose}
						type="button"
					/>
				}
			>
				<IconX size={20} />
				<span className="sr-only">Close</span>
			</DialogClose>

			<Carousel
				className="h-full w-full [&_[data-slot=carousel-content]]:h-full"
				opts={{ align: "start", loop: true }}
				setApi={setApi}
			>
				<CarouselContent className="ml-0 h-full">
					{room.images.map((image, index) => (
						<CarouselItem className="relative h-full pl-0" key={image}>
							<motion.img
								alt={`${room.name} - ${index + 1}`}
								animate={{ opacity: 1, scale: 1 }}
								className="h-full w-full object-cover"
								height={1080}
								initial={{ opacity: 0, scale: 1.05 }}
								src={image}
								transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
								width={1920}
							/>
						</CarouselItem>
					))}
				</CarouselContent>

				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="absolute inset-x-0 bottom-0 z-10"
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
				>
					<div className="bg-linear-to-t from-black/90 via-black/50 to-transparent px-4 pt-20 pb-6 sm:px-8 sm:pt-24 sm:pb-8">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<AnimatePresence mode="wait">
								<motion.div
									animate={{ opacity: 1, y: 0 }}
									className="max-w-xl"
									exit={{ opacity: 0, y: -10 }}
									initial={{ opacity: 0, y: 10 }}
									key={current}
									transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
								>
									<p className="text-[10px] text-accent uppercase tracking-[0.2em] sm:text-xs">
										{room.details}
									</p>
									<h3 className="mt-1 font-serif text-2xl text-white sm:mt-2 sm:text-4xl">
										{room.name}
									</h3>
									<p className="mt-2 text-white/70 text-xs leading-relaxed sm:mt-3 sm:text-sm">
										{room.description}
									</p>
								</motion.div>
							</AnimatePresence>

							<div className="flex shrink-0 items-center gap-3">
								<CarouselPrevious
									className="relative top-0 left-0 h-10 w-10 translate-x-0 translate-y-0 rounded-full border-none bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 hover:text-white sm:h-11 sm:w-11"
									variant="outline"
								/>
								<span className="min-w-12 text-center font-medium text-white/70 text-xs tabular-nums">
									{current + 1} / {room.images.length}
								</span>
								<CarouselNext
									className="relative top-0 right-0 h-10 w-10 translate-x-0 translate-y-0 rounded-full border-none bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 hover:text-white sm:h-11 sm:w-11"
									variant="outline"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</Carousel>
		</motion.div>
	);
}

function ExperienceCard({
	index,
	item,
}: {
	index: number;
	item: LodgePageData["experiences"][0];
}) {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

	return (
		<motion.article
			className="group relative h-[90vh] min-h-[700px] w-full overflow-hidden"
			initial="hidden"
			ref={ref}
			variants={staggerContainer}
			viewport={{ once: true, margin: "-20%" }}
			whileInView="visible"
		>
			<motion.img
				alt={item.title}
				className="absolute inset-0 h-[120%] w-full object-cover"
				height={1080}
				src={item.image}
				style={{ y }}
				variants={{
					hidden: { scale: 1.05 },
					visible: {
						scale: 1,
						transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
					},
				}}
				width={1920}
			/>
			<div className="absolute inset-0 bg-black/35 transition-colors duration-700 group-hover:bg-black/40" />
			<div className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

			<div className="absolute inset-0 flex flex-col justify-end px-6 pb-24 sm:pb-32">
				<div className="mx-auto w-full max-w-7xl">
					<motion.div className="max-w-3xl" variants={fadeUp}>
						<div className="mb-6 flex items-center gap-4">
							<span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.2em]">
								0{index + 1}
							</span>
							<div className="h-px w-16 bg-accent" />
						</div>
						<h3 className="mb-6 font-serif text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
							{item.title}
						</h3>
						<p className="max-w-xl text-white/90 text-lg leading-relaxed sm:text-xl">
							{item.description}
						</p>
					</motion.div>
				</div>
			</div>
		</motion.article>
	);
}

export default function LodgePage({ lodge }: { lodge: LodgePageData }) {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);
	const [selectedRoom, setSelectedRoom] = useState<LodgePageRoom | null>(null);
	const displayRoomRef = useRef<LodgePageRoom | null>(null);
	if (selectedRoom) {
		displayRoomRef.current = selectedRoom;
	}

	return (
		<main className="flex-grow bg-background">
			<section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
				<motion.img
					alt=""
					aria-hidden="true"
					className="absolute inset-0 h-full w-full object-cover blur-2xl"
					height={1080}
					src={lodge.hero.image}
					style={{ y, scale: 1.3 }}
					width={1920}
				/>
				<motion.img
					alt={lodge.hero.imageAlt}
					className="absolute inset-0 h-full w-full object-cover"
					height={1080}
					initial={{ scale: 1.15 }}
					src={lodge.hero.image}
					style={{ y, scale: 1.15 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					width={1920}
				/>
				<div className="absolute inset-0 bg-black/50" />

				<motion.div
					className="relative z-10 max-w-5xl px-6 text-center text-white"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<span className="mb-6 block text-accent text-sm uppercase tracking-[0.3em]">
						{lodge.hero.eyebrow}
					</span>
					<h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
						{lodge.hero.title}
					</h1>
					<div className="mx-auto mt-8 h-px w-24 bg-accent" />
				</motion.div>
			</section>

			<section className="relative overflow-hidden px-6 py-32 sm:py-40">
				<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
					<motion.div
						className="relative z-10 flex flex-col items-start"
						initial="hidden"
						variants={fadeLeft}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<div className="mb-6 flex items-center gap-4">
							<div className="h-px w-8 bg-accent" />
							<span className="text-accent text-sm font-medium uppercase tracking-[0.3em]">
								{lodge.philosophy.eyebrow}
							</span>
						</div>
						<h2 className="mb-8 font-serif text-3xl text-primary sm:text-4xl lg:text-5xl lg:leading-tight">
							{lodge.philosophy.title}
						</h2>
						<div className="mb-10 space-y-6">
							{lodge.philosophy.paragraphs.map((paragraph, index) => (
								<p
									className={cn(
										"text-muted-foreground leading-relaxed",
										index === 0 ? "text-lg" : "text-base"
									)}
									key={paragraph}
								>
									{paragraph}
								</p>
							))}
						</div>
						{lodge.philosophy.buttonLabel && (
							<Button className="group relative overflow-hidden bg-primary px-8 py-6 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20">
								<span className="relative z-10 flex items-center gap-2">
									{lodge.philosophy.buttonLabel}
									<IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
								</span>
							</Button>
						)}
					</motion.div>

					<div className="relative mt-10 lg:mt-0">
						<div className="absolute -inset-y-20 -right-20 -z-10 w-full rounded-l-[100px] bg-secondary/50" />

						<div className="relative mx-auto max-w-lg lg:max-w-none">
							<motion.div
								className="relative z-10"
								initial={{ opacity: 0, y: 40 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								viewport={viewportOnce}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<img
									alt={lodge.philosophy.images.primary.alt}
									className="aspect-4/5 w-[85%] rounded-2xl object-cover shadow-2xl"
									height={1125}
									src={lodge.philosophy.images.primary.src}
									width={900}
								/>
							</motion.div>

							<motion.div
								className="absolute -right-4 -bottom-12 z-20 w-3/5 sm:-right-12 sm:-bottom-20"
								initial={{ opacity: 0, y: 60 }}
								transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
								viewport={viewportOnce}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div className="rounded-2xl bg-background p-2 shadow-xl">
									<img
										alt={lodge.philosophy.images.secondary.alt}
										className="aspect-square w-full rounded-xl object-cover"
										height={800}
										src={lodge.philosophy.images.secondary.src}
										width={800}
									/>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-background">
				<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
					<motion.div
						className="flex flex-col items-start"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-6 block text-accent text-[0.75rem] font-bold uppercase tracking-[0.2em]">
							Field Notes
						</span>
						<h2 className="max-w-3xl font-serif text-4xl text-primary sm:text-5xl md:text-6xl lg:text-7xl">
							{lodge.experiencesTitle}
						</h2>
					</motion.div>
				</div>

				<div className="w-full">
					{lodge.experiences.map((item, index) => (
						<ExperienceCard index={index} item={item} key={item.title} />
					))}
				</div>
			</section>

			<section className="bg-background px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<Carousel className="w-full" opts={{ align: "start", loop: true }}>
						<motion.div
							className="mb-8 flex items-end justify-between gap-4"
							initial="hidden"
							variants={fadeUp}
							viewport={viewportOnce}
							whileInView="visible"
						>
							<div>
								<span className="mb-3 block text-accent text-sm uppercase tracking-[0.3em]">
									{lodge.accommodations.eyebrow}
								</span>
								<h2 className="font-serif text-2xl text-primary sm:text-3xl md:text-4xl">
									{lodge.accommodations.title}
								</h2>
							</div>
							<div className="flex items-center gap-3">
								<CarouselPrevious
									className="relative top-0 left-0 translate-x-0 translate-y-0"
									size="icon-lg"
									variant="outline"
								/>
								<CarouselNext
									className="relative top-0 right-0 translate-x-0 translate-y-0"
									size="icon-lg"
									variant="outline"
								/>
							</div>
						</motion.div>

						<CarouselContent className="-ml-4">
							{lodge.rooms.map((room) => (
								<CarouselItem
									className="basis-full pl-4 md:basis-1/2"
									key={room.name}
								>
									<div className="group relative h-[50vh] overflow-hidden rounded-3xl sm:h-[60vh] md:h-[70vh]">
										<img
											alt={room.name}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											height={1200}
											src={room.images[0]}
											width={1600}
										/>
										<div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/50" />
										<div className="absolute inset-x-0 bottom-0 p-8 text-white">
											<p className="mb-2 text-accent text-sm uppercase tracking-[0.3em]">
												{room.details}
											</p>
											<h3 className="font-serif text-3xl">{room.name}</h3>
											<button
												className="mt-4 cursor-pointer border-none bg-transparent text-sm text-white uppercase tracking-[0.3em] opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100"
												onClick={() => setSelectedRoom(room)}
												type="button"
											>
												Explore
											</button>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>

				<Dialog
					onOpenChange={(open) => !open && setSelectedRoom(null)}
					open={!!selectedRoom}
				>
					<DialogContent
						className="!max-w-none flex h-screen w-screen flex-col gap-0 overflow-hidden rounded-none border-none bg-black p-0 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-[75vh] sm:w-[75vw] sm:rounded-[40px]"
						overlayClassName="duration-500"
						showCloseButton={false}
					>
						<DialogTitle className="sr-only">
							{displayRoomRef.current?.name ?? ""}
						</DialogTitle>
						{displayRoomRef.current && (
							<RoomGallery
								onClose={() => setSelectedRoom(null)}
								room={displayRoomRef.current}
							/>
						)}
					</DialogContent>
				</Dialog>
			</section>

			{lodge.testimonial && (
				<section className="bg-primary px-6 py-24 text-primary-foreground">
					<div className="mx-auto flex max-w-4xl flex-col items-center text-center">
						<motion.div
							initial="hidden"
							variants={fadeUp}
							viewport={viewportOnce}
							whileInView="visible"
						>
							<IconQuote className="mx-auto mb-6 h-14 w-14 text-accent/50" />
							<p className="font-serif text-2xl leading-relaxed sm:text-3xl md:text-5xl">
								&quot;{lodge.testimonial.quote}&quot;
							</p>
							<p className="mt-8 text-accent text-sm uppercase tracking-widest">
								— {lodge.testimonial.attribution}
							</p>
						</motion.div>
					</div>
				</section>
			)}

			<section className="bg-background px-6 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<h2 className="font-serif text-2xl text-primary sm:text-3xl md:text-4xl">
							{lodge.cta.title}
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-8">
							{lodge.cta.description}
						</p>
						<div className="mt-10">
							<Button className="bg-primary px-8 py-6 font-semibold text-lg text-primary-foreground hover:bg-primary/90">
								{lodge.cta.buttonLabel}
								<IconArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
