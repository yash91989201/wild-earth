import {
	IconArrowRight,
	IconBinoculars,
	IconCompass,
	IconMapPin,
	IconMessageCircle,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@wild-earth/ui/components/button";
import { cn } from "@wild-earth/ui/lib/utils";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

type LodgesPageIcon = ComponentType<{ className?: string }>;

export type LodgesPageLodge = {
	name: string;
	href: string;
	image: string;
	setting: string;
	mood: string;
	bestFor: string;
	logistics: string;
};

export type LodgesPageData = {
	hero: {
		eyebrow: string;
		title: string;
		description: string;
		image: string;
		imageAlt: string;
		primaryCta: string;
		secondaryCta: string;
		facts: readonly string[];
	};
	featured: {
		eyebrow: string;
		title: string;
		description: string;
	};
	allLodges: {
		eyebrow: string;
		title: string;
		description: string;
	};
	stayStyles: {
		eyebrow: string;
		title: string;
		items: ReadonlyArray<{
			label: string;
			description: string;
			matches: string;
		}>;
	};
	planning: {
		eyebrow: string;
		title: string;
		description: string;
		notes: ReadonlyArray<{
			icon: LodgesPageIcon;
			title: string;
			description: string;
		}>;
	};
	cta: {
		title: string;
		description: string;
		buttonLabel: string;
	};
	lodges: readonly LodgesPageLodge[];
};

export default function LodgesPage({ data }: { data: LodgesPageData }) {
	const featuredLodges = data.lodges.slice(0, 3);

	return (
		<main className="flex-grow bg-background text-foreground">
			<section className="relative isolate min-h-screen overflow-hidden bg-stone-950 text-stone-50">
				<img
					alt={data.hero.imageAlt}
					className="absolute inset-0 h-full w-full object-cover opacity-85"
					height={1080}
					src={data.hero.image}
					width={1920}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/70 to-stone-950/25" />

				<div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 py-20 sm:py-24 lg:px-8">
					<motion.div
						className="max-w-5xl"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<p className="mb-5 flex items-center gap-3 font-bold text-accent text-xs uppercase tracking-[0.28em]">
							<IconMapPin className="h-4 w-4" />
							{data.hero.eyebrow}
						</p>
						<h1 className="max-w-4xl font-serif text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
							{data.hero.title}
						</h1>
						<p className="mt-8 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed sm:text-xl">
							{data.hero.description}
						</p>
						<div className="mt-10 flex flex-col gap-3 sm:flex-row">
							<Link
								className={cn(
									buttonVariants({ size: "lg" }),
									"bg-stone-50 text-stone-950 hover:bg-stone-200"
								)}
								hash="booking-form"
								to="/"
							>
								{data.hero.primaryCta}
								<IconArrowRight className="h-4 w-4" />
							</Link>
							<a
								className="inline-flex h-10 items-center justify-center rounded-4xl border border-stone-50/25 px-4 font-medium text-sm text-stone-50 transition-colors hover:bg-stone-50/10"
								href="#all-lodges"
							>
								{data.hero.secondaryCta}
							</a>
						</div>
					</motion.div>

					<motion.div
						className="mt-16 grid gap-3 border-primary-foreground/15 border-t pt-6 text-sm text-primary-foreground/70 sm:grid-cols-3"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{data.hero.facts.map((item) => (
							<motion.p
								className="flex items-center gap-3"
								key={item}
								variants={staggerItem}
							>
								<span className="h-1.5 w-1.5 rounded-full bg-stone-50" />
								{item}
							</motion.p>
						))}
					</motion.div>
				</div>
			</section>

			<section className="overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<div>
							<p className="mb-4 font-bold text-accent text-xs uppercase tracking-[0.24em]">
								{data.featured.eyebrow}
							</p>
							<h2 className="max-w-3xl font-serif text-4xl text-primary sm:text-5xl lg:text-6xl">
								{data.featured.title}
							</h2>
						</div>
						<p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
							{data.featured.description}
						</p>
					</motion.div>

					<motion.div
						className="mt-14 grid gap-6 lg:grid-cols-3"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{featuredLodges.map((lodge, index) => (
							<motion.article
								className={cn(
									"group relative overflow-hidden rounded-[2rem] bg-stone-950 text-stone-50 shadow-2xl",
									index === 1 && "lg:mt-12",
									index === 2 && "lg:mt-24"
								)}
								key={lodge.name}
								variants={staggerItem}
							>
								<img
									alt={lodge.name}
									className="h-96 w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
									height={640}
									src={lodge.image}
									width={520}
								/>
								<div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/30 to-transparent" />
								<div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
									<p className="mb-3 text-accent text-xs uppercase tracking-[0.22em]">
										{lodge.bestFor}
									</p>
									<h3 className="font-serif text-3xl">{lodge.name}</h3>
									<p className="mt-3 text-primary-foreground/75 text-sm leading-relaxed">
										{lodge.setting}
									</p>
									<Link
										className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-primary-foreground"
										to={lodge.href}
									>
										Explore stay
										<IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Link>
								</div>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>

			<section
				className="bg-secondary px-6 py-24 sm:py-32 lg:px-8"
				id="all-lodges"
			>
				<div className="mx-auto max-w-7xl">
					<div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
						<div>
							<p className="mb-4 font-bold text-accent text-xs uppercase tracking-[0.24em]">
								{data.allLodges.eyebrow}
							</p>
							<h2 className="font-serif text-4xl text-primary sm:text-5xl">
								{data.allLodges.title}
							</h2>
						</div>
						<p className="text-muted-foreground text-lg leading-relaxed">
							{data.allLodges.description}
						</p>
					</div>

					<motion.div
						className="divide-y divide-border rounded-[2rem] border bg-background"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{data.lodges.map((lodge, index) => (
							<motion.article
								className="grid gap-5 p-5 sm:grid-cols-[9rem_1fr] sm:p-6 lg:grid-cols-[11rem_1fr_auto] lg:items-center"
								key={lodge.name}
								variants={staggerItem}
							>
								<img
									alt={lodge.name}
									className="aspect-4/3 w-full rounded-3xl object-cover sm:aspect-square"
									height={240}
									src={lodge.image}
									width={240}
								/>
								<div>
									<div className="mb-3 flex flex-wrap items-center gap-3">
										<span className="font-mono text-muted-foreground text-xs tabular-nums">
											{String(index + 1).padStart(2, "0")}
										</span>
										<span className="rounded-full border border-accent/30 px-3 py-1 font-bold text-accent text-[0.7rem] uppercase tracking-[0.18em]">
											{lodge.bestFor}
										</span>
									</div>
									<h3 className="font-serif text-2xl text-primary sm:text-3xl">
										{lodge.name}
									</h3>
									<p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
										{lodge.setting}. The mood is {lodge.mood}. {lodge.logistics}
									</p>
								</div>
								<Link
									className="inline-flex items-center gap-2 font-bold text-primary text-sm uppercase tracking-[0.16em] transition-colors hover:text-accent"
									to={lodge.href}
								>
									Details
									<IconArrowRight className="h-4 w-4" />
								</Link>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>

			<section className="px-6 py-24 sm:py-32 lg:px-8">
				<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
					<motion.div
						className="lg:sticky lg:top-28 lg:self-start"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<p className="mb-4 font-bold text-accent text-xs uppercase tracking-[0.24em]">
							{data.stayStyles.eyebrow}
						</p>
						<h2 className="font-serif text-4xl text-primary sm:text-5xl">
							{data.stayStyles.title}
						</h2>
					</motion.div>

					<motion.div
						className="space-y-4"
						initial="hidden"
						variants={staggerContainer}
						viewport={viewportOnce}
						whileInView="visible"
					>
						{data.stayStyles.items.map((style) => (
							<motion.article
								className="rounded-[2rem] border bg-background p-6 sm:p-8"
								key={style.label}
								variants={staggerItem}
							>
								<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-accent">
									<IconCompass className="h-5 w-5" />
								</div>
								<h3 className="font-serif text-3xl text-primary">
									{style.label}
								</h3>
								<p className="mt-3 text-muted-foreground leading-relaxed">
									{style.description}
								</p>
								<p className="mt-5 text-sm text-primary/80">
									<span className="font-bold text-primary">
										Likely matches:
									</span>{" "}
									{style.matches}
								</p>
							</motion.article>
						))}
					</motion.div>
				</div>
			</section>

			<section className="bg-primary px-6 py-24 text-primary-foreground sm:py-32 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<motion.div
							initial="hidden"
							variants={fadeUp}
							viewport={viewportOnce}
							whileInView="visible"
						>
							<p className="mb-4 flex items-center gap-3 font-bold text-accent text-xs uppercase tracking-[0.24em]">
								<IconBinoculars className="h-4 w-4" />
								{data.planning.eyebrow}
							</p>
							<h2 className="font-serif text-4xl sm:text-5xl">
								{data.planning.title}
							</h2>
							<p className="mt-6 max-w-xl text-primary-foreground/75 text-lg leading-relaxed">
								{data.planning.description}
							</p>
						</motion.div>

						<motion.div
							className="grid gap-4"
							initial="hidden"
							variants={staggerContainer}
							viewport={viewportOnce}
							whileInView="visible"
						>
							{data.planning.notes.map((note) => {
								const NoteIcon = note.icon;

								return (
									<motion.article
										className="rounded-[2rem] bg-background p-6 text-foreground shadow-2xl shadow-black/10"
										key={note.title}
										variants={staggerItem}
									>
										<NoteIcon className="mb-5 h-6 w-6 text-accent" />
										<h3 className="font-serif text-2xl text-primary">
											{note.title}
										</h3>
										<p className="mt-3 text-muted-foreground leading-relaxed">
											{note.description}
										</p>
									</motion.article>
								);
							})}
						</motion.div>
					</div>

					<motion.div
						className="mt-16 rounded-[2.5rem] bg-primary-foreground p-8 text-primary shadow-2xl shadow-black/15 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10"
						initial="hidden"
						variants={fadeUp}
						viewport={viewportOnce}
						whileInView="visible"
					>
						<div>
							<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 text-primary">
								<IconMessageCircle className="h-5 w-5" />
							</div>
							<h2 className="max-w-3xl font-serif text-3xl sm:text-5xl">
								{data.cta.title}
							</h2>
							<p className="mt-5 max-w-2xl text-primary/75 leading-relaxed">
								{data.cta.description}
							</p>
						</div>
						<Link
							className={cn(
								buttonVariants({ size: "lg" }),
								"mt-8 bg-primary text-primary-foreground hover:bg-primary/90 lg:mt-0"
							)}
							hash="booking-form"
							to="/"
						>
							{data.cta.buttonLabel}
							<IconArrowRight className="h-4 w-4" />
						</Link>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
