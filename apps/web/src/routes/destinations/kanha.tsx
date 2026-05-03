import {
	IconCalendar,
	IconMapPin,
	IconRuler,
	IconTree,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@wild-earth/ui/components/button";
import { motion, useScroll, useTransform } from "motion/react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const keyFacts = [
	{
		icon: IconMapPin,
		label: "Location",
		value: "Mandla & Balaghat, Madhya Pradesh",
	},
	{ icon: IconRuler, label: "Area", value: "2,005 sq km" },
	{
		icon: IconCalendar,
		label: "Established",
		value: "1955 (Tiger Reserve 1973)",
	},
	{ icon: IconTree, label: "Zones", value: "4 Safari Zones" },
];

const wildlife = [
	{
		name: "Bengal Tiger",
		desc: "Kanha's sal forests and open meadows offer some of India's most scenic tiger sightings, often against a backdrop of golden grass.",
	},
	{
		name: "Hard-ground Barasingha",
		desc: "Kanha is the sole home of this subspecies — saved from the brink of extinction, now numbering over 800 individuals.",
	},
	{
		name: "Indian Leopard",
		desc: "Frequently spotted in the bamboo belts and along the Banjar river, especially during the early morning hours.",
	},
	{
		name: "Wild Dog (Dhole)",
		desc: "Kanha harbours one of India's most stable dhole populations; their coordinated hunts across meadows are unforgettable.",
	},
	{
		name: "Gaur (Indian Bison)",
		desc: "Massive dark herds move between the sal forests and grassy clearings, most active at dawn and dusk.",
	},
	{
		name: "Indian Python",
		desc: "These powerful constrictors are often found near water bodies and in the park's warmer, rocky terrain.",
	},
];

const zones = [
	{
		name: "Kanha & Kisli",
		desc: "The core zones feature the park's most iconic meadows — Babathenga, Shravan, and the breeding ground of the hard-ground Barasingha. Kanha zone also leads to Bamni Dadar, the legendary Sunset Point.",
	},
	{
		name: "Mukki & Sarhi",
		desc: "Mukki offers a quieter, more remote experience with excellent gaur and tiger sightings, while Sarhi's hilly terrain and mixed forests are a birder's delight.",
	},
];

const gallery = [
	"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
];

export const Route = createFileRoute("/destinations/kanha")({
	component: RouteComponent,
});

function RouteComponent() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 800], [0, 280]);

	return (
		<main className="flex-grow bg-background">
			{/* Hero */}
			<section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<motion.img
						alt="Kanha forest landscape"
						className="absolute inset-0 h-full w-full object-cover will-change-transform"
						src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop"
						style={{ y, scale: 1.15 }}
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
						Kanha
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
							The Jungle Book Come to Life
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Kanha National Park is the very landscape that inspired Rudyard
							Kipling&apos;s The Jungle Book. A pristine mosaic of lush sal
							forests, bamboo groves, and expansive grassy meadows known as
							maidans, it is one of India&apos;s largest and most meticulously
							managed tiger reserves. Kanha is also the sole sanctuary of the
							hard-ground Barasingha, brought back from near-extinction through
							one of conservation&apos;s greatest success stories. To safari
							here is to walk into a living storybook.
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
										alt={`Kanha ${i + 1}`}
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
							Kanha opens in mid-October and remains accessible until June. The
							cool winter months offer comfortable weather and lush landscapes
							after the monsoon. By April and May, the meadows turn golden and
							wildlife concentrates around water sources, making for spectacular
							sightings against dramatic light.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">Winter</p>
								<p className="font-bold text-lg">Oct – Feb</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">
									Green meadows, pleasant days
								</p>
							</div>
							<div className="rounded-lg border border-accent bg-accent/10 p-6">
								<p className="mb-2 text-accent text-sm">Summer</p>
								<p className="font-bold text-lg">Mar – Jun</p>
								<p className="mt-2 text-primary-foreground/60 text-sm">
									Golden grass, waterhole drama
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
							Step Into the Jungle Book
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
							Let us curate your Kanha expedition — sunrise safaris across
							golden meadows, tiger tracking with expert naturalists, and
							evenings at Bamni Dadar watching the sun set over Kipling's
							forest.
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
