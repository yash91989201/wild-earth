import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendar, MapPin, Ruler, TreePine } from "lucide-react";
import { Button } from "@wild-earth/ui/components/button";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const keyFacts = [
	{ icon: MapPin, label: "Location", value: "Golaghat & Nagaon, Assam" },
	{ icon: Ruler, label: "Area", value: "1,090 sq km" },
	{ icon: Calendar, label: "Established", value: "1974 (UNESCO 1985)" },
	{ icon: TreePine, label: "Zones", value: "4 Safari Zones" },
];

const wildlife = [
	{ name: "Greater One-horned Rhino", desc: "Kaziranga is home to two-thirds of the world's population of this prehistoric armour-plated giant." },
	{ name: "Asian Elephant", desc: "Large herds move through the grasslands and riverine forests, often seen at dawn and dusk." },
	{ name: "Wild Water Buffalo", desc: "Massive, dark-hued herbivores with spectacular curved horns — a Kaziranga specialty." },
	{ name: "Eastern Swamp Deer", desc: "Also known as the hard-ground Barasingha, these elegant deer are a conservation success story." },
	{ name: "Bengal Tiger", desc: "Despite the tall grass, Kaziranga boasts one of the highest tiger densities on Earth." },
	{ name: "Hoolock Gibbon", desc: "India's only ape species, swinging through the tropical forests on the park's southern edge." },
];

const zones = [
	{ name: "Central (Kohora) & Western (Bagori)", desc: "The most accessible and popular zones, offering the best chance to spot rhinos, elephants, and buffalo in open grasslands. Elephant-back safaris are a signature experience here." },
	{ name: "Eastern (Agaratoli) & Burapahar", desc: "Agaratoli is a birder's paradise with wetlands and woodlands, while Burapahar's hilly terrain is excellent for trekking and spotting primates like the Hoolock Gibbon." },
];

const gallery = [
	"https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2072&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop",
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
						alt="Rhino in Kaziranga"
						className="absolute inset-0 h-full w-full scale-[1.15] object-cover"
						src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2072&auto=format&fit=crop"
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
							The Rhino's Last Great Stand
						</h2>
						<p className="leading-relaxed text-gray-600">
							A UNESCO World Heritage Site, Kaziranga National Park is a vast expanse of
							tall elephant grass, marshland, and dense tropical forests on the southern bank
							of the Brahmaputra. It harbours the world's largest population of the greater
							one-horned rhinoceros, along with thriving populations of elephants, wild water
							buffalo, and swamp deer. It is also a Tiger Reserve with one of the highest
							big-cat densities anywhere on the planet — a testament to over a century of
							unwavering conservation.
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
						<p className="mx-auto mb-10 max-w-2xl leading-relaxed text-white/80">
							The park opens in November and closes at the onset of the monsoon in late April.
							Winter mornings can be misty and magical, with rhinos grazing in golden light.
							By March and April, receding water levels concentrate animals around the
							remaining beels and waterholes, offering dramatic encounters.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-gray-300 text-sm">Winter</p>
								<p className="font-bold text-lg">Nov – Feb</p>
								<p className="mt-2 text-gray-400 text-sm">Misty mornings, pleasant days</p>
							</div>
							<div className="rounded-lg border border-[#d4af6a] bg-[#d4af6a]/10 p-6">
								<p className="mb-2 text-[#d4af6a] text-sm">Spring</p>
								<p className="font-bold text-lg">Mar – Apr</p>
								<p className="mt-2 text-gray-300 text-sm">Animals around waterholes</p>
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
							Witness the Great Indian Rhino
						</h2>
						<p className="mx-auto mb-10 max-w-2xl leading-relaxed text-gray-600">
							Join us for a curated Kaziranga expedition — jeep safaris through elephant
							grass, elephant-back patrols, and stays at the finest lodges on the
							Brahmaputra's edge.
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
