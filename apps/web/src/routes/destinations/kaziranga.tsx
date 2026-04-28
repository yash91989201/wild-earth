import {
	IconCalendar,
	IconMapPin,
	IconRuler,
	IconTree,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@wild-earth/ui/components/button";
import { motion } from "motion/react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const keyFacts = [
	{ icon: IconMapPin, label: "Location", value: "Assam, India" },
	{ icon: IconRuler, label: "Area", value: "430 sq km" },
	{ icon: IconCalendar, label: "Established", value: "1905 (UNESCO WHS)" },
	{ icon: IconTree, label: "Famous For", value: "One-horned Rhinos" },
];

const wildlife = [
	{
		name: "One-Horned Rhino",
		desc: "The symbol of Kaziranga, seen grazing peacefully in the tall elephant grass and marshlands. The park hosts two-thirds of the world's population.",
	},
	{
		name: "Asian Elephant",
		desc: "Massive herds traverse the park, utilizing the abundant water resources of the Brahmaputra and its tributaries.",
	},
	{
		name: "Wild Water Buffalo",
		desc: "Kaziranga hosts one of the last remaining populations of purebred wild water buffalos, often seen wallowing in mud.",
	},
	{
		name: "Bengal Tiger",
		desc: "The park boasts the highest density of tigers among protected areas in the world, making it a critical conservation stronghold.",
	},
	{
		name: "Swamp Deer",
		desc: "Large breeding populations of swamp deer thrive in the park's marshlands and tall grass ecosystems.",
	},
	{
		name: "Elephant Grass",
		desc: "Growing up to 5 meters tall, these grasslands provide the perfect cover for the park's megafauna and shape the entire landscape.",
	},
];

const zones = [
	{
		name: "Central Range (Kohora)",
		desc: "The most accessible and popular zone, offering the highest density of one-horned rhinos and frequent tiger sightings along well-maintained trails.",
	},
	{
		name: "Western Range (Bagori)",
		desc: "Known for large herds of elephants and water buffalo, this range features expansive grasslands with exceptional sunset views.",
	},
];

const gallery = [
	"https://images.unsplash.com/photo-1629813244248-3568779a5573?q=80&w=2072&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1603525281486-0925dbdb9bce?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1581007871115-f14bc016e0a4?q=80&w=2070&auto=format&fit=crop",
];

export const Route = createFileRoute("/destinations/kaziranga")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-white">
			{/* Hero */}
			<section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						alt="Kaziranga National Park"
						className="absolute inset-0 h-full w-full scale-[1.15] object-cover"
						src="https://images.unsplash.com/photo-1629813244248-3568779a5573?q=80&w=2072&auto=format&fit=crop"
					/>
					<div className="absolute inset-0 bg-black/50" />
				</div>
				<motion.div
					className="relative z-10 max-w-4xl px-6 text-center text-white"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<span className="mb-4 block font-bold text-[#d4af6a] text-sm uppercase tracking-[0.2em]">
						Assam, India
					</span>
					<h1 className="font-bold font-serif text-5xl leading-tight md:text-7xl">
						Kaziranga
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
						<span className="mb-4 block font-bold text-[#d4af6a] text-sm uppercase tracking-[0.2em]">
							About the Park
						</span>
						<h2 className="mb-6 font-bold font-serif text-3xl text-[#1f4d2b] md:text-4xl">
							The Wetlands of the East
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Kaziranga National Park is a massive expanse of tall elephant
							grass, marshland, and dense tropical moist broadleaf forests,
							crisscrossed by four major rivers, including the mighty
							Brahmaputra. Recognized as a UNESCO World Heritage Site, it's a
							profound conservation success story.
						</p>
						<p className="mt-4 text-gray-600 leading-relaxed">
							It hosts two-thirds of the world's great one-horned rhinoceroses.
							The park also boasts the highest density of tigers among protected
							areas in the world and is home to large breeding populations of
							elephants, wild water buffalo, and swamp deer.
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
								className="rounded-lg bg-[#f5f1ed] p-6"
								key={fact.label}
								variants={staggerItem}
							>
								<fact.icon className="mb-4 h-8 w-8 text-[#d4af6a]" />
								<p className="mb-1 text-gray-500 text-sm">{fact.label}</p>
								<p className="font-semibold text-[#1a1a1a]">{fact.value}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Wildlife */}
			<section className="bg-[#f5f1ed] px-6 py-24">
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="mb-16 max-w-3xl"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-4 block font-bold text-[#d4af6a] text-sm uppercase tracking-[0.2em]">
							Wildlife
						</span>
						<h2 className="font-bold font-serif text-3xl text-[#1f4d2b] md:text-4xl">
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
								className="rounded-lg bg-white p-8"
								key={animal.name}
								variants={staggerItem}
							>
								<h3 className="mb-3 font-bold font-serif text-[#1f4d2b] text-xl">
									{animal.name}
								</h3>
								<p className="text-gray-600 leading-relaxed">{animal.desc}</p>
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
							<span className="mb-4 block font-bold text-[#d4af6a] text-sm uppercase tracking-[0.2em]">
								Safari Zones
							</span>
							<h2 className="mb-6 font-bold font-serif text-3xl text-[#1f4d2b] md:text-4xl">
								Navigate the Landscape
							</h2>
							<div className="space-y-8">
								{zones.map((zone) => (
									<div key={zone.name}>
										<h3 className="mb-2 font-bold text-[#1a1a1a] text-lg">
											{zone.name}
										</h3>
										<p className="text-gray-600 leading-relaxed">{zone.desc}</p>
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
										alt={`Kaziranga ${i + 1}`}
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
			<section className="bg-[#1f4d2b] px-6 py-24 text-white">
				<div className="mx-auto max-w-4xl text-center">
					<motion.div
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<span className="mb-4 block font-bold text-[#d4af6a] text-sm uppercase tracking-[0.2em]">
							Plan Your Visit
						</span>
						<h2 className="mb-6 font-bold font-serif text-3xl md:text-4xl">
							Best Time to Visit
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-white/80 leading-relaxed">
							November to April is the ideal window for visiting Kaziranga. The
							winter months offer pleasant weather and lush green landscapes.
							The park remains closed during the monsoon season from May to
							October due to flooding.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-gray-300 text-sm">Winter</p>
								<p className="font-bold text-lg">Nov – Feb</p>
								<p className="mt-2 text-gray-400 text-sm">
									Pleasant weather, lush greens
								</p>
							</div>
							<div className="rounded-lg border border-[#d4af6a] bg-[#d4af6a]/10 p-6">
								<p className="mb-2 text-[#d4af6a] text-sm">Spring</p>
								<p className="font-bold text-lg">Mar – Apr</p>
								<p className="mt-2 text-gray-300 text-sm">
									Best for wildlife viewing
								</p>
							</div>
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-gray-300 text-sm">Monsoon</p>
								<p className="font-bold text-lg">May – Oct</p>
								<p className="mt-2 text-gray-400 text-sm">Park closed</p>
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
						<h2 className="mb-6 font-bold font-serif text-3xl text-[#1f4d2b] md:text-4xl">
							Ready to Meet the Rhinos?
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-gray-600 leading-relaxed">
							Let us craft a bespoke Kaziranga safari experience for you —
							complete with expert naturalists, zone-optimized game drives, and
							stays at the finest lodges.
						</p>
						<Button className="bg-[#1f4d2b] px-8 py-6 font-semibold text-lg text-white hover:bg-[#163b21]">
							Enquire Now
						</Button>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
