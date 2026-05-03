import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import ItineraryCard from "./itinerary-card";

const itineraries = [
	{
		title: "The Royal Tiger Trail",
		duration: "8 Days / 7 Nights",
		route: "Delhi \u2022 Ranthambore \u2022 Agra",
		description:
			"Experience the majesty of India's apex predator in the dramatic ruins of Ranthambore, culminating in a sunrise visit to the iconic Taj Mahal. Stay in luxury tents reminiscent of the Raj era.",
		image:
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
		imageAlt: "Tiger in Ranthambore",
		overview:
			"A perfect blend of culture and wildlife. You'll spend 5 days tracking the elusive Bengal tiger in customized 4x4s with our expert naturalists, followed by an exploration of Mughal history.",
		days: [
			{
				title: "Day 1-2: Arrival in Delhi",
				description:
					"Private transfer to The Imperial. Welcome dinner and orientation.",
			},
			{
				title: "Day 3-6: Ranthambore National Park",
				description:
					"Morning and evening safaris. Stay at luxury Sujan Sher Bagh camp.",
			},
			{
				title: "Day 7-8: Agra & Departure",
				description:
					"Sunrise at Taj Mahal. Transfer back to Delhi for onward flight.",
			},
		],
		includes: [
			"All luxury accommodations",
			"Private naturalist and customized 4x4 safaris",
			"All domestic flights and ground transfers",
			"Conservation and park fees",
		],
		reverse: false,
	},
	{
		title: "The Heart of India Safari",
		duration: "10 Days / 9 Nights",
		route: "Mumbai \u2022 Tadoba \u2022 Kanha",
		description:
			"Venture deep into the central Indian highlands, the very forests that inspired 'The Jungle Book'. A high-density predator expedition focusing on tigers, leopards, and sloth bears.",
		image:
			"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2070&auto=format&fit=crop",
		imageAlt: "Tadoba Tiger",
		overview:
			"Designed for serious wildlife enthusiasts, this expedition connects two of India's most productive tiger reserves. Expect exclusive access and incredibly close encounters.",
		days: [
			{
				title: "Day 1: Arrival in Mumbai",
				description: "Rest and recovery at The Taj Mahal Palace.",
			},
			{
				title: "Day 2-5: Tadoba Andhari",
				description:
					"Fly to Nagpur. Intensive safaris in Tadoba's bamboo forests.",
			},
			{
				title: "Day 6-10: Kanha National Park",
				description:
					"Drive to Kanha. Explore the sal forests and meadows. Fly out via Raipur.",
			},
		],
		reverse: true,
	},
];

export default function ItinerariesList() {
	return (
		<section className="bg-secondary px-6 pb-24">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="space-y-24"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{itineraries.map((itinerary) => (
						<ItineraryCard itinerary={itinerary} key={itinerary.title} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
