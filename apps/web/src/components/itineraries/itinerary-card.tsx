import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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

function AccordionItem({
	day,
	defaultOpen = false,
}: {
	day: DayPlan;
	defaultOpen?: boolean;
}) {
	const [open, setOpen] = useState(defaultOpen);
	return (
		<div className="border-gray-100 border-b">
			<button
				className="flex w-full items-center justify-between py-3 text-left"
				onClick={() => setOpen((v) => !v)}
				type="button"
			>
				<span className="font-bold text-[#1f4d2b] text-sm">{day.title}</span>
				<ChevronDown
					className={`h-4 w-4 text-[#1f4d2b] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
				/>
			</button>
			{open && (
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="pb-3 text-gray-600 text-sm"
					initial={{ opacity: 0, y: -5 }}
					transition={{ duration: 0.2 }}
				>
					{day.description}
				</motion.div>
			)}
		</div>
	);
}

export default function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
	const tabs = [
		{ id: "overview", label: "Overview" },
		{ id: "itinerary", label: "Day by Day" },
		...(itinerary.includes ? [{ id: "includes", label: "Includes" }] : []),
	];
	const [activeTab, setActiveTab] = useState("overview");

	const imageBlock = (
		<div className="group h-[500px] overflow-hidden">
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
				<span className="rounded-full bg-[#1f4d2b]/10 px-4 py-1 font-bold text-[#1f4d2b] text-xs uppercase tracking-widest">
					{itinerary.duration}
				</span>
				<span className="flex items-center gap-1 text-gray-500 text-sm">
					<MapPin className="h-4 w-4" />
					{itinerary.route}
				</span>
			</div>
			<h2 className="mb-4 font-bold font-serif text-3xl text-[#1f4d2b] lg:text-4xl">
				{itinerary.title}
			</h2>
			<p className="mb-8 text-gray-600 leading-relaxed">
				{itinerary.description}
			</p>

			{/* Tabs */}
			<div className="mb-6 flex gap-6 border-gray-200 border-b">
				{tabs.map((tab) => (
					<button
						className={`pb-3 font-bold text-sm uppercase tracking-wider transition-colors ${
							activeTab === tab.id
								? "border-[#1f4d2b] border-b-2 text-[#1f4d2b]"
								: "text-gray-400 hover:text-gray-600"
						}`}
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						type="button"
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className="min-h-[160px]">
				{activeTab === "overview" && (
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 10 }}
						key="overview"
						transition={{ duration: 0.3 }}
					>
						<p className="text-gray-600 text-sm">{itinerary.overview}</p>
						<Link
							className="group mt-6 inline-flex items-center gap-2 font-bold text-[#d4af6a] text-sm uppercase tracking-widest"
							hash="booking-form"
							to="/"
						>
							Request Quote
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</motion.div>
				)}
				{activeTab === "itinerary" && (
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 10 }}
						key="itinerary"
						transition={{ duration: 0.3 }}
					>
						{itinerary.days.map((day, i) => (
							<AccordionItem day={day} defaultOpen={i === 0} key={day.title} />
						))}
					</motion.div>
				)}
				{activeTab === "includes" && itinerary.includes && (
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 10 }}
						key="includes"
						transition={{ duration: 0.3 }}
					>
						<ul className="list-disc space-y-2 pl-5 text-gray-600 text-sm">
							{itinerary.includes.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</div>
	);

	return (
		<motion.div
			className="overflow-hidden rounded-[40px] bg-white shadow-xl"
			variants={staggerItem}
		>
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
		</motion.div>
	);
}
