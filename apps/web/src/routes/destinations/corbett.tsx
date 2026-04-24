import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendar, MapPin, Ruler, TreePine } from "lucide-react";
import { Button } from "@wild-earth/ui/components/button";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const keyFacts = [
	{ icon: MapPin, label: "Location", value: "Nainital, Uttarakhand" },
	{ icon: Ruler, label: "Area", value: "520 sq km (Core)" },
	{ icon: Calendar, label: "Established", value: "1936 (India's Oldest)" },
	{ icon: TreePine, label: "Zones", value: "7 Safari Zones" },
];

const wildlife = [
	{ name: "Bengal Tiger", desc: "Corbett's apex predator patrols the sal forests and grasslands, best spotted in the Dhikala and Bijrani zones." },
	{ name: "Asian Elephant", desc: "Large herds frequent the Ramganga river belt and grassy chaurs, especially during the dry season." },
	{ name: "Indian Leopard", desc: "A skilled climber often seen in the hilly terrain and along the park's many ridges and ravines." },
	{ name: "Gharial", desc: "The critically endangered fish-eating crocodile inhabits the upper Ramganga, a rare and prized sighting." },
	{ name: "Great Hornbill", desc: "One of over 600 bird species, this magnificent bird is iconic to the Himalayan foothill forests." },
	{ name: "Himalayan Black Bear", desc: "An elusive resident of the higher ridges, most active during the cooler months." },
];

const zones = [
	{ name: "Dhikala Zone", desc: "The largest and most sought-after zone, set deep in the core area with expansive grasslands, the Ramganga reservoir, and the highest probability of elephant and tiger sightings. Accessible only by canter or for overnight guests." },
	{ name: "Bijrani, Jhirna & Dhela", desc: "Bijrani offers thick sal forest and open meadows, while Jhirna and Dhela remain open year-round with excellent chances of spotting sloth bears, leopards, and wild elephants." },
];

const gallery = [
	"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
];

export const Route = createFileRoute("/destinations/corbett")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-white">
			{/* Hero */}
			<section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						alt="Elephants in Corbett"
						className="absolute inset-0 h-full w-full scale-[1.15] object-cover"
						src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop"
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
						Uttarakhand, India
					</span>
					<h1 className="font-bold font-serif text-5xl leading-tight md:text-7xl">
						Jim Corbett
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
							Where the Wild Began
						</h2>
						<p className="leading-relaxed text-gray-600">
							Established in 1936 as Hailey National Park, Jim Corbett holds the distinction
							of being India's oldest national park and the birthplace of Project Tiger.
							Nestled in the Shivalik foothills of the Himalayas, it encompasses a mosaic of
							dense sal forests, towering teak, open grasslands known as chaurs, and the
							life-giving Ramganga river. From herds of Asian elephants and stealthy tigers
							to over 600 species of birds, Corbett is a living testament to India's
							conservation heritage.
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
										alt={`Corbett ${i + 1}`}
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
							The park is open from mid-November to June, with the Dhikala zone closing
							slightly earlier. Winter brings migratory birds and pleasant weather, while
							summer draws animals to the Ramganga river for exceptional sightings.
							The monsoon months see most zones closed for breeding and rejuvenation.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-gray-300 text-sm">Winter</p>
								<p className="font-bold text-lg">Nov – Feb</p>
								<p className="mt-2 text-gray-400 text-sm">Crisp air, migratory birds</p>
							</div>
							<div className="rounded-lg border border-[#d4af6a] bg-[#d4af6a]/10 p-6">
								<p className="mb-2 text-[#d4af6a] text-sm">Summer</p>
								<p className="font-bold text-lg">Mar – Jun</p>
								<p className="mt-2 text-gray-300 text-sm">Peak wildlife at water sources</p>
							</div>
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-gray-300 text-sm">Monsoon</p>
								<p className="font-bold text-lg">Jul – Oct</p>
								<p className="mt-2 text-gray-400 text-sm">Most zones closed</p>
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
							Walk Where the Tiger First Roamed Free
						</h2>
						<p className="mx-auto mb-10 max-w-2xl leading-relaxed text-gray-600">
							Experience India's most historic wilderness with our bespoke Corbett safaris.
							From Dhikala overnight stays to riverside elephant sightings, we craft journeys
							that honour the legacy of Jim Corbett himself.
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
