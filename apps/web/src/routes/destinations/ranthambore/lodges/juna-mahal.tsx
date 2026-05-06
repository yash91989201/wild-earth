import { IconArrowRight, IconQuote, IconX } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@wild-earth/ui/components/button";
import {
	Carousel,
	CarouselApi,
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
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	fadeLeft,
	fadeRight,
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const experiences = [
	{
		title: "Gastronomy",
		desc: "Michelin-grade cuisine inspired by royal Rajasthani flavors, seasonal produce, and elegant candlelit service.",
		image: "/assets/ranthambore/lodges/juna-mahal/gallery/03.jpg",
	},
	{
		title: "Sanctuary Spa",
		desc: "Ancient therapies, aromatic oils, and restorative treatments designed to slow the pace of the wilderness.",
		image: "/assets/ranthambore/lodges/juna-mahal/gallery/04.jpg",
	},
	{
		title: "Bespoke Excursions",
		desc: "Private jeep safaris, curated village visits, and sunrise birding tailored by dedicated naturalists.",
		image: "/assets/ranthambore/lodges/juna-mahal/gallery/05.jpg",
	},
];

const rooms = [
	{
		name: "Deluxe Room",
		details: "Garden View • 450 sqft",
		description:
			"A well-appointed retreat with hand-blocked textiles, a private sit-out, and views of the manicured gardens and Aravalli foothills.",
		images: [
			"/assets/ranthambore/lodges/juna-mahal/rooms/deluxe-room-01.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/deluxe-room-02.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/deluxe-room-03.jpg",
		],
	},
	{
		name: "Suite",
		details: "Forest View • 650 sqft",
		description:
			"Spacious living area with traditional Rajasthani accents, a four-poster bed, and a private balcony overlooking the reserve forest.",
		images: [
			"/assets/ranthambore/lodges/juna-mahal/rooms/suite-01.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/suite-02.jpg",
		],
	},
	{
		name: "Terrace Villa",
		details: "Panoramic View • 900 sqft",
		description:
			"An elevated villa with a private rooftop terrace, open-air dining, and uninterrupted sunrise views across the wilderness.",
		images: [
			"/assets/ranthambore/lodges/juna-mahal/rooms/terrace-villa-01.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/terrace-villa-02.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/terrace-villa-03.jpg",
		],
	},
	{
		name: "Garden Room",
		details: "Courtyard Access • 550 sqft",
		description:
			"Opening onto a private courtyard with indigenous flowering plants, this room blends indoor comfort with the fragrance of the garden.",
		images: [
			"/assets/ranthambore/lodges/juna-mahal/rooms/garden-room-01.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/garden-room-02.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/garden-room-03.jpg",
		],
	},
	{
		name: "Villa Suite",
		details: "Partial Pool View • 1,200 sqft",
		description:
			"A grand suite with separate living and sleeping quarters, heritage furnishings, and views of the central reflection pool.",
		images: [
			"/assets/ranthambore/lodges/juna-mahal/rooms/villa-suite-01.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/villa-suite-02.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/villa-suite-03.jpg",
		],
	},
	{
		name: "Pool Villa",
		details: "Private Pool • 1,800 sqft",
		description:
			"A standalone villa with a private plunge pool, dedicated butler service, and uninterrupted views of the Aravalli hills at sunset.",
		images: [
			"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-01.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-02.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-03.jpg",
			"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-04.jpg",
		],
	},
];

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/juna-mahal"
)({
	component: RouteComponent,
});

function RoomGallery({
	room,
	onClose,
}: {
	room: (typeof rooms)[number];
	onClose: () => void;
}) {
	const [api, setApi] = useState<CarouselApi>(undefined);
	const [current, setCurrent] = useState(0);

	const onSelect = useCallback(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
	}, [api]);

	useEffect(() => {
		if (!api) return;
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
				<CarouselContent className="ml-0 h-full"
				>
					{room.images.map((image, i) => (
						<CarouselItem
							key={i}
							className="relative h-full pl-0"
						>
							<motion.img
								alt={`${room.name} - ${i + 1}`}
								animate={{ opacity: 1, scale: 1 }}
								className="h-full w-full object-cover"
								initial={{ opacity: 0, scale: 1.05 }}
								src={image}
								transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
					<div className="bg-linear-to-t from-black/90 via-black/50 to-transparent px-4 pb-6 pt-20 sm:px-8 sm:pb-8 sm:pt-24">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<AnimatePresence mode="wait">
								<motion.div
									key={current}
									animate={{ opacity: 1, y: 0 }}
									className="max-w-xl"
									exit={{ opacity: 0, y: -10 }}
									initial={{ opacity: 0, y: 10 }}
									transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
								>
									<p className="text-[10px] uppercase tracking-[0.2em] text-accent sm:text-xs">
										{room.details}
									</p>
									<h3 className="mt-1 font-serif text-2xl text-white sm:mt-2 sm:text-3xl sm:text-4xl">
										{room.name}
									</h3>
									<p className="mt-2 text-xs leading-relaxed text-white/70 sm:mt-3 sm:text-sm">
										{room.description}
									</p>
								</motion.div>
							</AnimatePresence>

							<div className="flex shrink-0 items-center gap-3">
								<CarouselPrevious
									className="relative left-0 top-0 h-10 w-10 translate-x-0 translate-y-0 rounded-full border-none bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 hover:text-white sm:h-11 sm:w-11"
									variant="outline"
								/>
								<span className="min-w-[3rem] text-center text-xs font-medium tabular-nums text-white/70">
									{current + 1} / {room.images.length}
								</span>
								<CarouselNext
									className="relative right-0 top-0 h-10 w-10 translate-x-0 translate-y-0 rounded-full border-none bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 hover:text-white sm:h-11 sm:w-11"
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

function RouteComponent() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);
	const [selectedRoom, setSelectedRoom] = useState<
		(typeof rooms)[number] | null
	>(null);
	const displayRoomRef = useRef<(typeof rooms)[number] | null>(null);
	if (selectedRoom) {
		displayRoomRef.current = selectedRoom;
	}

	return (
		<main className="flex-grow bg-background">
			<section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
				<motion.img
					alt="Juna Mahal lodge"
					className="absolute inset-0 h-full w-full object-cover"
					initial={{ scale: 1.15 }}
					src="/assets/ranthambore/lodges/juna-mahal/image.jpg"
					style={{ y, scale: 1.15 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
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
						A World Apart
					</span>
					<h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
						Juna Mahal
					</h1>
					<div className="mx-auto mt-8 h-px w-24 bg-accent" />
				</motion.div>
			</section>

			<section className="px-6 py-24">
				<div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
					<motion.div
						initial="hidden"
						variants={fadeLeft}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-4 block text-accent text-sm uppercase tracking-[0.3em]">
							Our Philosophy
						</span>
						<h2 className="mb-6 font-serif text-2xl text-primary sm:text-3xl md:text-4xl">
							Where Heritage Meets the Wild
						</h2>
						<p className="mb-4 text-muted-foreground leading-8">
							Juna Mahal brings the grace of Rajasthan into the untamed
							landscape of Ranthambore. Every space is shaped to feel intimate,
							indulgent, and closely connected to the forest beyond.
						</p>
						<p className="mb-8 text-muted-foreground leading-8">
							From dawn safaris to sunset dinners, the lodge balances
							conservation, craft, and quiet luxury in a way that feels both
							grounded and rare.
						</p>
						<Button className="bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
							Discover The Resort <IconArrowRight className="ml-2 h-5 w-5" />
						</Button>
					</motion.div>

					<motion.div
						className="relative min-h-[24rem] sm:min-h-[32rem]"
						initial="hidden"
						variants={fadeRight}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<img
							alt="Juna Mahal interior"
							className="aspect-[4/5] w-4/5 rounded-3xl object-cover shadow-2xl"
							src="/assets/ranthambore/lodges/juna-mahal/gallery/01.jpg"
						/>
						<img
							alt="Juna Mahal detail"
							className="absolute bottom-0 right-0 sm:-bottom-10 sm:-right-4 aspect-square w-5/12 sm:w-1/2 rounded-3xl object-cover shadow-2xl"
							src="/assets/ranthambore/lodges/juna-mahal/gallery/02.jpg"
						/>
					</motion.div>
				</div>
			</section>

			<section className="bg-secondary px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="mb-12 text-center"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<h2 className="font-serif text-2xl text-primary sm:text-3xl md:text-4xl">
							Curated Experiences
						</h2>
					</motion.div>

					<motion.div
						className="grid gap-8 md:grid-cols-3"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{experiences.map((item) => (
							<motion.article key={item.title} variants={staggerItem}>
								<div className="group overflow-hidden rounded-2xl bg-background shadow-lg">
									<div className="aspect-video sm:aspect-3/4 overflow-hidden">
										<img
											alt={item.title}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											src={item.image}
										/>
									</div>
									<div className="space-y-3 p-6">
										<h3 className="font-serif text-xl text-primary">
											{item.title}
										</h3>
										<p className="text-muted-foreground leading-7">
											{item.desc}
										</p>
									</div>
								</div>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>

			<section className="bg-background px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<Carousel
						className="w-full"
						opts={{
							align: "start",
							loop: true,
						}}
					>
						<motion.div
							className="mb-8 flex items-end justify-between gap-4"
							initial="hidden"
							variants={fadeUp}
							viewport={viewportOnce}
							whileInView="visible"
						>
							<div>
								<span className="mb-3 block text-accent text-sm uppercase tracking-[0.3em]">
									Accommodations
								</span>
								<h2 className="font-serif text-2xl text-primary sm:text-3xl md:text-4xl">
									Suites & Villas
								</h2>
							</div>
							<div className="flex items-center gap-3">
								<CarouselPrevious
									className="relative left-0 top-0 translate-x-0 translate-y-0"
									size="icon-lg"
									variant="outline"
								/>
								<CarouselNext
									className="relative right-0 top-0 translate-x-0 translate-y-0"
									size="icon-lg"
									variant="outline"
								/>
							</div>
						</motion.div>

						<CarouselContent className="-ml-4">
							{rooms.map((room) => (
								<CarouselItem
									className="pl-4 basis-full md:basis-1/2"
									key={room.name}
								>
									<div className="group relative h-[50vh] sm:h-[60vh] overflow-hidden rounded-3xl md:h-[70vh]">
										<img
											alt={room.name}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											src={room.images[0]}
										/>
										<div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/50" />
										<div className="absolute inset-x-0 bottom-0 p-8 text-white">
											<p className="mb-2 text-sm uppercase tracking-[0.3em] text-accent">
												{room.details}
											</p>
											<h3 className="font-serif text-3xl">{room.name}</h3>
											<button
												className="mt-4 text-sm uppercase tracking-[0.3em] opacity-100 transition-opacity duration-500 cursor-pointer bg-transparent border-none text-white sm:opacity-0 sm:group-hover:opacity-100"
												onClick={() => setSelectedRoom(room)}
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
					open={!!selectedRoom}
					onOpenChange={(open) => !open && setSelectedRoom(null)}
				>
				<DialogContent
					showCloseButton={false}
					overlayClassName="duration-500"
					className="h-screen w-screen !max-w-none overflow-hidden rounded-none border-none bg-black p-0 !flex !flex-col !gap-0 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-[75vh] sm:w-[75vw] sm:rounded-[40px]"
				>
					<DialogTitle className="sr-only">
						{displayRoomRef.current?.name ?? ""}
					</DialogTitle>
					{displayRoomRef.current && (
						<RoomGallery room={displayRoomRef.current} onClose={() => setSelectedRoom(null)} />
					)}
				</DialogContent>
				</Dialog>
			</section>

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
							&quot;An absolute triumph of hospitality. Juna Mahal redefines
							what it means to escape into the wild.&quot;
						</p>
						<p className="mt-8 text-accent text-sm uppercase tracking-widest">
							— Condé Nast Traveler
						</p>
					</motion.div>
				</div>
			</section>

			<section className="bg-background px-6 py-24">
				<div className="mx-auto max-w-4xl text-center">
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<h2 className="font-serif text-2xl text-primary sm:text-3xl md:text-4xl">
							Ready to Experience Juna Mahal?
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-8">
							Plan a stay shaped by comfort, craft, and the thrill of
							Ranthambore&apos;s wild heart.
						</p>
						<div className="mt-10">
							<Button className="bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
								Book Your Stay <IconArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
