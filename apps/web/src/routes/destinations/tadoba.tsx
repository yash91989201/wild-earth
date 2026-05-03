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
	{ icon: IconMapPin, label: "Location", value: "Maharashtra, India" },
	{ icon: IconRuler, label: "Area", value: "1,727 sq km" },
	{ icon: IconCalendar, label: "Established", value: "1955 (Tiger Reserve)" },
	{ icon: IconTree, label: "Famous For", value: "Tigers, Sloth Bears" },
];

const wildlife = [
	{
		name: "Tigers of Tadoba",
		desc: "Famous for frequent sightings, the tigers here often cool off in the lakes during hot summers, offering incredible photographic opportunities.",
	},
	{
		name: "Sloth Bear",
		desc: "Tadoba is one of the best places in India to spot the elusive, shaggy-coated sloth bear rummaging through the undergrowth.",
	},
	{
		name: "Marsh Crocodile",
		desc: "The serene Tadoba lake is home to a thriving population of mugger crocodiles, often seen basking on the banks.",
	},
	{
		name: "Indian Leopard",
		desc: "A stealthy predator frequently spotted in the hilly terrain and dense teak forests of the reserve.",
	},
	{
		name: "Wild Dog (Dhole)",
		desc: "Highly social predators, packs of wild dogs are often seen hunting in the park's open meadows and forest edges.",
	},
	{
		name: "Bamboo Thickets",
		desc: "The park's landscape is famously characterized by dense bamboo groves intermixed with teak, creating a unique habitat.",
	},
];

const zones = [
	{
		name: "Moharli Zone",
		desc: "The oldest and most popular zone with excellent tiger sightings. Its open meadows and waterholes make it ideal for photography.",
	},
	{
		name: "Kolsa Zone",
		desc: "Known for sloth bears and wild dogs, this zone features dense forests and is less crowded for a more intimate experience.",
	},
];

const gallery = [
	"https://images.unsplash.com/photo-1616117436034-7041753c155d?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1599387737213-92f7dc2cc893?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1610486820251-87bf91937ff7?q=80&w=2070&auto=format&fit=crop",
];

export const Route = createFileRoute("/destinations/tadoba")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-background">
			{/* Hero */}
			<section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						alt="Tadoba Andhari Tiger Reserve"
						className="absolute inset-0 h-full w-full scale-[1.15] object-cover"
						src="https://images.unsplash.com/photo-1616117436034-7041753c155d?q=80&w=2070&auto=format&fit=crop"
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
						Maharashtra, India
					</span>
					<h1 className="font-bold font-serif text-5xl leading-tight md:text-7xl">
						Tadoba
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
							The Jewel of Vidarbha
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Tadoba Andhari Tiger Reserve is a pristine and unique ecosystem
							situated in the Chandrapur district of Maharashtra. It is the
							state's oldest and largest national park, famously known as the
							"Jewel of Vidarbha".
						</p>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							The name 'Tadoba' comes from a local deity, Taru, and the park is
							celebrated for its incredible tiger sightings. Its landscape
							features thick forests of teak and bamboo, alongside scenic lakes
							and rivers, supporting a high density of predators including
							tigers, leopards, and wild dogs.
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
							October to June is the ideal window for visiting Tadoba. The
							summer months (March – June) offer the highest probability of
							tiger sightings as animals gather around water sources. The park
							remains closed during the monsoon season from July to September.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">Winter</p>
								<p className="font-bold text-lg">Oct – Feb</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">
									Pleasant weather, lush greens
								</p>
							</div>
							<div className="rounded-lg border border-accent bg-accent/10 p-6">
								<p className="mb-2 text-accent text-sm">Summer</p>
								<p className="font-bold text-lg">Mar – Jun</p>
								<p className="mt-2 text-primary-foreground/60 text-sm">
									Peak tiger sightings
								</p>
							</div>
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">Monsoon</p>
								<p className="font-bold text-lg">Jul – Sep</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">Core zones closed</p>
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
							Ready to Track the Jewel?
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
							Let us craft a bespoke Tadoba safari experience for you — complete
							with expert naturalists, zone-optimized game drives, and stays at
							the finest lodges.
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
