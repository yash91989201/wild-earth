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
	{ icon: IconMapPin, label: "Location", value: "Umaria, Madhya Pradesh" },
	{ icon: IconRuler, label: "Area", value: "1,536 sq km" },
	{
		icon: IconCalendar,
		label: "Established",
		value: "1968 (Tiger Reserve 1993)",
	},
	{ icon: IconTree, label: "Zones", value: "3 Safari Zones" },
];

const wildlife = [
	{
		name: "Royal Bengal Tiger",
		desc: "Bandhavgarh holds the world's highest known density of tigers — sightings are remarkably consistent, especially in the Tala zone.",
	},
	{
		name: "Indian Leopard",
		desc: "Agile climbers often seen on rocky outcrops and in the dense bamboo thickets of the Magdhi zone.",
	},
	{
		name: "Gaur (Indian Bison)",
		desc: "Massive herds graze the grasslands and forest clearings, particularly in the Khitauli zone.",
	},
	{
		name: "Sambar Deer",
		desc: "The park's largest deer species and a primary prey base, visible throughout the reserve at waterholes.",
	},
	{
		name: "Wild Boar",
		desc: "Omnivorous and alert, these bristly foragers are a common and entertaining sight on every safari.",
	},
	{
		name: "Nilgai",
		desc: "India's largest antelope, often spotted at dawn near the park's meadows and forest edges.",
	},
];

const zones = [
	{
		name: "Tala Zone",
		desc: "The crown jewel of Bandhavgarh. The oldest and most scenic zone, home to the highest tiger density, ancient fort ruins, and the iconic Shesh Shaiya statue. This is where legendary tigers like Charger and Sita once ruled.",
	},
	{
		name: "Magdhi & Khitauli",
		desc: "Magdhi offers excellent leopard and tiger sightings amidst bamboo groves, while Khitauli is the park's newest zone with open grasslands perfect for gaur, nilgai, and birding.",
	},
];

const gallery = [
	"https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
];

export const Route = createFileRoute("/destinations/bandhavgarh")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="grow bg-background">
			{/* Hero */}
			<section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						alt="Tiger in Bandhavgarh"
						className="absolute inset-0 h-full w-full scale-[1.15] object-cover"
						src="https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop"
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
					<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
						Madhya Pradesh, India
					</span>
					<h1 className="font-bold font-serif text-5xl leading-tight md:text-7xl">
						Bandhavgarh
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
							The Kingdom of Tigers
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Bandhavgarh is where tiger lore meets living reality. Set amidst
							the Vindhya ranges of Madhya Pradesh, this compact reserve
							harbours the highest known density of Royal Bengal Tigers on
							Earth. Ancient sal forests, bamboo groves, and open grasslands are
							overlooked by the hilltop Bandhavgarh Fort — a 2,000-year-old
							citadel whose caves still bear Brahmi inscriptions. From the
							legendary Charger and Sita to today's rising stars, every tiger
							here has a story, and the forest feels alive with history.
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
								<p className="mb-1 text-muted-foreground text-sm">{fact.label}</p>
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
								<p className="text-muted-foreground leading-relaxed">{animal.desc}</p>
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
										<p className="text-muted-foreground leading-relaxed">{zone.desc}</p>
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
										alt={`Bandhavgarh ${i + 1}`}
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
							The park welcomes visitors from October to June. Summer (March –
							June) is the golden window for tiger sightings as the forest thins
							and animals gather at water sources. Winter mornings are misty and
							magical, perfect for photography and exploring the ancient fort.
							The monsoon closes the park from July to September.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">Winter</p>
								<p className="font-bold text-lg">Oct – Feb</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">
									Misty mornings, fort treks
								</p>
							</div>
							<div className="rounded-lg border border-accent bg-accent/10 p-6">
								<p className="mb-2 text-accent text-sm">Summer</p>
								<p className="font-bold text-lg">Mar – Jun</p>
								<p className="mt-2 text-primary-foreground/60 text-sm">
									Unmatched tiger sightings
								</p>
							</div>
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">Monsoon</p>
								<p className="font-bold text-lg">Jul – Sep</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">Park closed</p>
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
							Enter the Tiger's Kingdom
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
							Experience the world's most tiger-dense forest with our bespoke
							Bandhavgarh safaris — expert naturalists, premium zone permits,
							and stays at the finest jungle lodges.
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
