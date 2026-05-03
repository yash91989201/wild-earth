import { IconArrowRight, IconMapPin } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@wild-earth/ui/components/accordion";
import { badgeVariants } from "@wild-earth/ui/components/badge";
import { buttonVariants } from "@wild-earth/ui/components/button";
import { Card } from "@wild-earth/ui/components/card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@wild-earth/ui/components/tabs";
import { cn } from "@wild-earth/ui/lib/utils";
import { motion } from "motion/react";
import { staggerItem } from "@/lib/animations";

interface DayPlan {
	description: string;
	title: string;
}

interface Itinerary {
	days: DayPlan[];
	description: string;
	duration: string;
	image: string;
	imageAlt: string;
	includes?: string[];
	overview: string;
	reverse?: boolean;
	route: string;
	title: string;
}

export default function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
	const tabs = [
		{ id: "overview", label: "Overview" },
		{ id: "itinerary", label: "Day by Day" },
		...(itinerary.includes ? [{ id: "includes", label: "Includes" }] : []),
	];
	const imageBlock = (
		<div className="group h-full overflow-hidden">
			<img
				alt={itinerary.imageAlt}
				className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				height={500}
				src={itinerary.image}
				width={800}
			/>
		</div>
	);

	const contentBlock = (
		<div className="flex flex-col justify-center p-12 lg:p-16">
			<div className="mb-6 flex flex-wrap items-center gap-4">
			<span className={badgeVariants({ variant: "secondary" })}>
				{itinerary.duration}
			</span>
				<span className="flex items-center gap-1 text-muted-foreground text-sm">
					<IconMapPin className="h-4 w-4" />
					{itinerary.route}
				</span>
			</div>
			<h2 className="mb-4 font-bold font-serif text-3xl text-primary lg:text-4xl">
				{itinerary.title}
			</h2>
			<p className="mb-8 text-muted-foreground leading-relaxed">
				{itinerary.description}
			</p>

			<Tabs className="gap-6" defaultValue="overview">
				<TabsList
					className="w-full justify-start gap-6 border-border p-0"
					variant="line"
				>
					{tabs.map((tab) => (
						<TabsTrigger
							className="h-auto flex-none rounded-none px-0 pb-3 font-bold text-sm uppercase tracking-wider data-active:text-primary"
							key={tab.id}
							value={tab.id}
						>
							{tab.label}
						</TabsTrigger>
					))}
				</TabsList>

				<div className="min-h-[160px]">
					<TabsContent value="overview">
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 10 }}
							key="overview"
							transition={{ duration: 0.3 }}
						>
							<p className="text-muted-foreground text-sm">
								{itinerary.overview}
							</p>
							<Link
								className={cn(buttonVariants({ variant: "link" }), "p-0")}
								hash="booking-form"
								to="/"
							>
								Request Quote
								<IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</motion.div>
					</TabsContent>

					<TabsContent value="itinerary">
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 10 }}
							key="itinerary"
							transition={{ duration: 0.3 }}
						>
							<Accordion
								className="rounded-none border-0"
								defaultValue={
									itinerary.days[0]?.title ? [itinerary.days[0].title] : []
								}
							>
								{itinerary.days.map((day) => (
									<AccordionItem
										className="border-border bg-transparent data-open:bg-transparent"
										key={day.title}
										value={day.title}
									>
										<AccordionTrigger className="px-0 py-3 font-bold text-foreground hover:no-underline">
											{day.title}
										</AccordionTrigger>
										<AccordionContent className="px-0 pb-3 text-muted-foreground">
											{day.description}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</motion.div>
					</TabsContent>

					{itinerary.includes && (
						<TabsContent value="includes">
							<motion.div
								animate={{ opacity: 1, y: 0 }}
								initial={{ opacity: 0, y: 10 }}
								key="includes"
								transition={{ duration: 0.3 }}
							>
								<ul className="list-disc space-y-2 pl-5 text-muted-foreground text-sm">
									{itinerary.includes.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</motion.div>
						</TabsContent>
					)}
				</div>
			</Tabs>
		</div>
	);

	return (
		<motion.div variants={staggerItem}>
			<Card className="overflow-hidden rounded-[40px] bg-white p-0 shadow-xl">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					{itinerary.reverse ? (
						<>
							<div className="order-2 lg:order-1">{contentBlock}</div>
							<div className="order-1 lg:order-2">{imageBlock}</div>
						</>
					) : (
						<>
							<div>{imageBlock}</div>
							<div>{contentBlock}</div>
						</>
					)}
				</div>
			</Card>
		</motion.div>
	);
}
