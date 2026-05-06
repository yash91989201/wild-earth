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
	{ icon: IconMapPin, label: "Location", value: "Uttarakhand, India" },
	{ icon: IconRuler, label: "Area", value: "520 sq km" },
	{ icon: IconCalendar, label: "Established", value: "1936 (Oldest NP)" },
	{ icon: IconTree, label: "Famous For", value: "Tigers, Elephants" },
];

const wildlife = [
	{
		name: "Bengal Tiger",
		desc: "The crown jewel of the reserve, hiding brilliantly camouflaged in the dense undergrowth of Corbett.",
	},
	{
		name: "Asian Elephant",
		desc: "Often seen in herds near the Ramganga river and grasslands, especially during the summer months.",
	},
	{
		name: "Great Hornbill",
		desc: "One of over 600 bird species recorded here, making Corbett a globally recognized Important Bird Area.",
	},
	{
		name: "Leopard",
		desc: "A stealthy predator frequently spotted in the hilly terrain and dense Sal forests of the park.",
	},
	{
		name: "Crocodile",
		desc: "Mugger and gharial crocodiles thrive in the Ramganga reservoir and along the riverbanks.",
	},
	{
		name: "Sambar Deer",
		desc: "The largest Indian deer, a primary prey species commonly sighted across all zones of Corbett.",
	},
];

const zones = [
	{
		name: "Dhikala Zone",
		desc: "The largest and most varied zone, offering the best chance for tiger sightings and elephant herds along the Ramganga.",
	},
	{
		name: "Bijrani & Jhirna",
		desc: "Bijrani is known for its grasslands and waterholes, while Jhirna remains open year-round with excellent birding.",
	},
];

const gallery = [
	"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=2069&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=2027&auto=format&fit=crop",
];

export const Route = createFileRoute("/destinations/corbett/")({
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
						alt="Jim Corbett National Park"
						className="absolute inset-0 h-full w-full object-cover will-change-transform"
						src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop"
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
						<span className="mb-4 block font-bold text-accent text-sm uppercase tracking-[0.2em]">
							About the Park
						</span>
						<h2 className="mb-6 font-bold font-serif text-3xl text-primary md:text-4xl">
							The Land of Roar, Trumpet and Song
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Jim Corbett National Park is the oldest national park in India,
							established in 1936 to protect the endangered Bengal tiger.
							Nestled in the foothills of the Himalayas, its diverse landscape
							encompasses hills, riverine belts, marshy depressions, grasslands,
							and a large lake.
						</p>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Beyond tigers, the park is famous for its wild Asian elephants and
							over 600 species of birds, making it a paradise for bird watchers.
							The majestic Ramganga river flows through the heart of the park,
							bringing life to the dense Sal forests that cover much of the
							area.
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
								<p className="mb-1 text-muted-foreground text-sm">
									{fact.label}
								</p>
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
								<p className="text-muted-foreground leading-relaxed">
									{animal.desc}
								</p>
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
										<p className="text-muted-foreground leading-relaxed">
											{zone.desc}
										</p>
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
							November to June is the ideal window for visiting Jim Corbett. The
							summer months (March – June) offer the highest probability of
							tiger sightings as animals gather around water sources. The park
							remains partially closed during the monsoon season from July to
							October.
						</p>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							<div className="rounded-lg border border-white/20 p-6">
								<p className="mb-2 text-primary-foreground/60 text-sm">
									Winter
								</p>
								<p className="font-bold text-lg">Nov – Feb</p>
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
								<p className="mb-2 text-primary-foreground/60 text-sm">
									Monsoon
								</p>
								<p className="font-bold text-lg">Jul – Oct</p>
								<p className="mt-2 text-primary-foreground/50 text-sm">
									Core zones closed
								</p>
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
							Ready for the Roar?
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed">
							Let us craft a bespoke Jim Corbett safari experience for you —
							complete with expert naturalists, zone-optimized game drives, and
							stays at the finest lodges.
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
