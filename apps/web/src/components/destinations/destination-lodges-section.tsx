import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@wild-earth/ui/components/tabs";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@wild-earth/ui/components/carousel";
import {
	fadeUp,
	viewportOnce,
} from "@/lib/animations";
import LodgeCarouselCard, { type Lodge } from "./lodge-carousel-card";

// ── Placeholder images ──────────────────────────────────────────────

const lodgeImages = [
	"/assets/ranthambore/lodges/juna-mahal/gallery/01.jpg",
	"/assets/ranthambore/lodges/juna-mahal/gallery/03.jpg",
	"/assets/ranthambore/lodges/juna-mahal/gallery/05.jpg",
	"/assets/ranthambore/lodges/juna-mahal/gallery/07.jpg",
	"/assets/ranthambore/lodges/juna-mahal/gallery/09.jpg",
	"/assets/ranthambore/lodges/juna-mahal/gallery/11.jpg",
	"/assets/ranthambore/lodges/juna-mahal/gallery/13.jpg",
	"/assets/ranthambore/lodges/juna-mahal/gallery/15.jpg",
	"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-01.jpg",
	"/assets/ranthambore/lodges/juna-mahal/rooms/villa-suite-02.jpg",
	"/assets/ranthambore/lodges/juna-mahal/rooms/terrace-villa-03.jpg",
] as const;

const lodges: Lodge[] = [
	// Luxury
	{
		name: "Juna Mahal",
		location: "Ranthambore",
		category: "luxury",
		description:
			"A regal heritage retreat blending Rajputana architecture with modern comforts. Each suite opens onto private courtyards with uninterrupted views of the Aravalli foothills.",
		image: lodgeImages[0],
	},
	{
		name: "Kipling Lodge",
		location: "Ranthambore",
		category: "luxury",
		description:
			"Named after the legendary storyteller, this colonial-style lodge channels vintage safari romance with campaign furniture, brass fixtures, and fire-lit evenings under the stars.",
		image: lodgeImages[1],
	},
	{
		name: "Tigress Resort",
		location: "Ranthambore",
		category: "luxury",
		description:
			"A boutique sanctuary designed around water bodies and native gardens. Spacious villas with plunge pools offer a private vantage for birdwatching between safari drives.",
		image: lodgeImages[2],
	},
	{
		name: "Nahargarh Resort",
		location: "Ranthambore",
		category: "luxury",
		description:
			"Sprawling across acres of restored wilderness, this resort pairs palace-inspired suites with an infinity pool that seems to dissolve into the reserve forest beyond.",
		image: lodgeImages[3],
	},
	// Premium
	{
		name: "Taj Sawai Vilas",
		location: "Ranthambore",
		category: "premium",
		description:
			"The Taj group's understated masterpiece near the park gates. Elegant rooms, a world-class spa, and seamless safari logistics make this a trusted choice for discerning travelers.",
		image: lodgeImages[4],
	},
	{
		name: "Maharaja Lodge",
		location: "Ranthambore",
		category: "premium",
		description:
			"A characterful mid-size property where the owner personally curates guest experiences. Expect home-style hospitality, excellent naturalist guides, and a loyal repeat clientele.",
		image: lodgeImages[5],
	},
	// Experiential
	{
		name: "Aman-i-Khas",
		location: "Ranthambore",
		category: "experiential",
		description:
			"Aman's tented camp redefines outdoor luxury. Ten billowing Mughal-inspired tents sit beside a watering hole where wildlife gathers at dawn and dusk.",
		image: lodgeImages[6],
	},
	{
		name: "Oberoi Vanya Vilas",
		location: "Ranthambore",
		category: "experiential",
		description:
			"Oberoi's flagship jungle camp features hand-embroidered canopies, private gardens, and personalized butler service within earshot of the park's core tiger habitat.",
		image: lodgeImages[7],
	},
	{
		name: "Sawai Shivir Ranthambore",
		location: "Ranthambore",
		category: "experiential",
		description:
			"An intimate tented camp with just a handful of safari suites. The small scale allows for flexible schedules, private jeep arrangements, and campfire storytelling with the resident naturalist.",
		image: lodgeImages[8],
	},
	{
		name: "Six Senses Fort Barwara",
		location: "Near Ranthambore",
		category: "experiential",
		description:
			"A restored 14th-century fortress turned wellness retreat. While slightly farther from the park, the Ayurvedic spa, organic dining, and suite curation make it a holistic safari base.",
		image: lodgeImages[9],
	},
	{
		name: "Sujah Sher Bagh",
		location: "Ranthambore",
		category: "experiential",
		description:
			"A Relais & Châteaux tented camp that balances colonial elegance with conservation ethos. Walk the organic gardens, spot leopards from your deck, and dine under a canopy of jamun trees.",
		image: lodgeImages[10],
	},
];

const categories = [
	{ id: "luxury", label: "Luxury", count: 4 },
	{ id: "premium", label: "Premium", count: 2 },
	{ id: "experiential", label: "Experiential", count: 5 },
] as const;

// ── Component ─────────────────────────────────────────────────────

export default function DestinationLodgesSection() {
	const [activeTab, setActiveTab] = useState<string>("luxury");
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();

	const filteredLodges = useMemo(
		() => lodges.filter((l) => l.category === activeTab),
		[activeTab]
	);

	const handleTabChange = useCallback((value: string) => {
		setActiveTab(value);
	}, []);

	// Autoplay
	useEffect(() => {
		if (!carouselApi || filteredLodges.length <= 1) return;

		const interval = setInterval(() => {
			carouselApi.scrollNext();
		}, 4000);

		return () => clearInterval(interval);
	}, [carouselApi, filteredLodges.length]);

	return (
		<section className="bg-secondary px-4 py-16 sm:px-6 sm:py-24" id="lodges">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<motion.div
					className="mb-10 max-w-3xl"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<span className="mb-3 block font-bold text-accent text-xs uppercase tracking-[0.2em] sm:mb-4 sm:text-sm">
						Stays & Camps
					</span>
					<h2 className="mb-4 font-bold font-serif text-2xl text-primary sm:text-3xl md:text-4xl">
						Ranthambore Lodges
					</h2>
					<p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
						We partner with the finest lodges and camps around
						Ranthambore — from ultra-luxury tented suites to authentic
						bush experiences. Every stay is hand-picked for location,
						service, and safari access.
					</p>
				</motion.div>

				{/* Tabs + Carousel */}
				<Tabs
					value={activeTab}
					onValueChange={handleTabChange}
					className="w-full"
				>
					{/* Tab List — filled container, accent active tab */}
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<TabsList className="mb-8 sm:mb-10 inline-flex rounded-full bg-muted p-1 max-w-full overflow-x-auto">
							{categories.map((cat) => (
								<TabsTrigger
									key={cat.id}
									value={cat.id}
									className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 sm:px-5 sm:py-2 sm:text-sm data-active:bg-accent data-active:text-accent-foreground hover:text-foreground whitespace-nowrap"
								>
									{cat.label}
									<span className="ml-1 text-[10px] opacity-70 sm:ml-1.5 sm:text-xs">
										({cat.count})
									</span>
								</TabsTrigger>
							))}
						</TabsList>
					</motion.div>

					{/* Tab Panels */}
					{categories.map((cat) => (
						<TabsContent key={cat.id} value={cat.id} className="mt-0">
							<Carousel
								setApi={setCarouselApi}
								opts={{
									align: "start",
									loop: filteredLodges.length > 1,
								}}
								className="w-full"
							>
								<CarouselContent className="-ml-3 sm:-ml-4">
									{filteredLodges.map((lodge) => (
										<CarouselItem
											key={lodge.name}
											className="pl-3 basis-full sm:pl-4 md:basis-1/2"
										>
											<LodgeCarouselCard lodge={lodge} />
										</CarouselItem>
									))}
								</CarouselContent>

								{filteredLodges.length > 1 && (
									<>
										<CarouselPrevious className="left-0 -translate-x-1/2 bg-background border-border hover:bg-muted hidden md:flex" />
										<CarouselNext className="right-0 translate-x-1/2 bg-background border-border hover:bg-muted hidden md:flex" />
									</>
								)}
							</Carousel>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
}
