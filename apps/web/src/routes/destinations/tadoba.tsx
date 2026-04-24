import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendar, MapPin, Ruler, TreePine } from "lucide-react";
import { Button } from "@wild-earth/ui/components/button";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const keyFacts = [
	{ icon: MapPin, label: "Location", value: "Chandrapur, Maharashtra" },
	{ icon: Ruler, label: "Area", value: "1,727 sq km" },
	{ icon: Calendar, label: "Established", value: "1955 (Tiger Reserve 1995)" },
	{ icon: TreePine, label: "Zones", value: "7 Safari Gates" },
];

const wildlife = [
	{ name: "Bengal Tiger", desc: "Tadoba's headline act — exceptionally high density and remarkably reliable sightings, especially around Tadoba Lake in summer." },
	{ name: "Indian Leopard", desc: "Frequently spotted in the bamboo thickets and along the park's rugged cliff lines." },
	{ name: "Sloth Bear", desc: "Nocturnal and shaggy, often seen foraging for termites and wild berries at dawn and dusk." },
	{ name: "Wild Dog (Dhole)", desc: "Highly social pack hunters whose coordinated chases through teak forest are a thrilling spectacle." },
	{ name: "Gaur (Indian Bison)", desc: "Massive wild cattle that roam the forest edges and grasslands in small herds." },
	{ name: "Crocodile", desc: "Mugger crocodiles inhabit the park's perennial lakes, often seen basking on muddy banks." },
];

const zones = [
	{ name: "Moharli (Tadoba) & Kolsa", desc: "The core zones offer the best all-round experience — tiger sightings at Tadoba Lake, expansive grasslands, and the rugged Kolsa range with its waterfalls and bamboo forests." },
	{ name: "Navegaon, Pangdi, Zari & Buffer Gates", desc: "These buffer and satellite gates offer a wilder, less-crowded alternative with excellent leopard, sloth bear, and wild dog encounters amidst teak and bamboo." },
];

const gallery = [
	"https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
];

export const Route = createFileRoute("/destinations/tadoba")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-white">
			{/* Hero */}
			<section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						alt="Tiger in Tadoba"
						className="absolute inset-0 h-full w-full scale-[1.15] object-cover"
						src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2070&auto=format&fit=crop"
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
						Maharashtra, India
					</span>
					<h1 className="font-bold font-serif text-5xl leading-tight md:text-7xl">
						Tadoba Andhari
						<br />
						Tiger Reserve
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
							The Jewel of Vidarbha
						</h2>
						<p className="leading-relaxed text-gray-600">
							Known as the &quot;Jewel of Vidarbha,&quot; Tadoba Andhari Tiger Reserve is Maharashtra&apos;s
							oldest and largest protected wilderness. A landscape of teak forests, bamboo
							thickets, serene lakes, and rugged cliffs, it offers some of the most consistent
							tiger sightings in India. Unlike its more famous northern counterparts, Tadoba
							retains a raw, unspoiled charm — fewer crowds, more intimate encounters, and a
							wilderness that feels truly alive.
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
								key={fact.label}
								className="rounded-lg bg-[#f5f1ed] p-6"
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
								key={animal.name}
								className="rounded-lg bg-white p-8"
								variants={staggerItem}
							>
								<h3 className="mb-3 font-bold font-serif text-xl text-[#1f4d2b]">
									{animal.name}
								</h3>
								<p className="leading-relaxed text-gray-600">{animal.desc}</p>
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
										<h3 className="mb-2 font-bold text-lg text-[#1a1a1a]">{zone.name}</h3>
										<p className="leading-relaxed text-gray-600">{zone.desc}</p>
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
									key={src}
									className={`group overflow-hidden rounded-lg ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
									variants={staggerItem}
								>
									<img
										alt={`Tadoba ${i + 1}`}
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
						<p className="mx-auto mb-10 max-w-2xl leading-relaxed text-white/80">
							October to June is the prime season, with summer months (March – June)
							delivering the most dramatic tiger sightings as animals congregate around
							the park&apos;s perennial lakes. Winter offers pleasant weather and lush green
							landscapes, while the monsoon brings closure for forest rejuvenation.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-gray-300 text-sm">Winter</p>
								<p className="font-bold text-lg">Oct – Feb</p>
								<p className="mt-2 text-gray-400 text-sm">Cool weather, verdant forests</p>
							</div>
							<div className="rounded-lg border border-[#d4af6a] bg-[#d4af6a]/10 p-6">
								<p className="mb-2 text-[#d4af6a] text-sm">Summer</p>
								<p className="font-bold text-lg">Mar – Jun</p>
								<p className="mt-2 text-gray-300 text-sm">Peak tiger sightings at lakes</p>
							</div>
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-gray-300 text-sm">Monsoon</p>
								<p className="font-bold text-lg">Jul – Sep</p>
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
							Experience Vidarbha's Wildest Secret
						</h2>
						<p className="mx-auto mb-10 max-w-2xl leading-relaxed text-gray-600">
							Let us design a Tadoba expedition tailored to you — jeep safaris through teak
							and bamboo, summer lake stakeouts, and stays at the finest forest lodges.
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
