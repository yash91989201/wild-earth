import {
	IconCalendar,
	IconMapPin,
	IconRuler,
	IconTree,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import DestinationPage, {
	type DestinationPageData,
} from "@/components/destinations/destination-page";

const corbett: DestinationPageData = {
	hero: {
		eyebrow: "Uttarakhand, India",
		title: ["Jim Corbett", "National Park"],
		images: [
			"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
		],
		imageAlt: "Jim Corbett National Park",
	},
	overview: {
		eyebrow: "About the Park",
		title: "The Land of Roar, Trumpet and Song",
		description:
			"Jim Corbett National Park is the oldest national park in India, established in 1936 to protect the endangered Bengal tiger. Nestled in the foothills of the Himalayas, its diverse landscape encompasses hills, riverine belts, marshy depressions, grasslands, and a large lake. Beyond tigers, the park is famous for its wild Asian elephants and over 600 species of birds, making it a paradise for bird watchers. The majestic Ramganga river flows through the heart of the park, bringing life to the dense Sal forests that cover much of the area.",
	},
	keyFacts: [
		{ icon: IconMapPin, label: "Location", value: "Uttarakhand, India" },
		{ icon: IconRuler, label: "Area", value: "520 sq km" },
		{ icon: IconCalendar, label: "Established", value: "1936 (Oldest NP)" },
		{ icon: IconTree, label: "Famous For", value: "Tigers, Elephants" },
	],
	wildlife: {
		eyebrow: "Wildlife",
		title: "What You May Encounter",
		items: [
			{
				name: "Bengal Tiger",
				description:
					"The crown jewel of the reserve, hiding brilliantly camouflaged in the dense undergrowth of Corbett.",
			},
			{
				name: "Asian Elephant",
				description:
					"Often seen in herds near the Ramganga river and grasslands, especially during the summer months.",
			},
			{
				name: "Great Hornbill",
				description:
					"One of over 600 bird species recorded here, making Corbett a globally recognized Important Bird Area.",
			},
			{
				name: "Leopard",
				description:
					"A stealthy predator frequently spotted in the hilly terrain and dense Sal forests of the park.",
			},
			{
				name: "Crocodile",
				description:
					"Mugger and gharial crocodiles thrive in the Ramganga reservoir and along the riverbanks.",
			},
			{
				name: "Sambar Deer",
				description:
					"The largest Indian deer, a primary prey species commonly sighted across all zones of Corbett.",
			},
		],
	},
	landscape: {
		eyebrow: "Safari Zones",
		title: "Navigate the Landscape",
		items: [
			{
				name: "Dhikala Zone",
				description:
					"The largest and most varied zone, offering the best chance for tiger sightings and elephant herds along the Ramganga.",
			},
			{
				name: "Bijrani & Jhirna",
				description:
					"Bijrani is known for its grasslands and waterholes, while Jhirna remains open year-round with excellent birding.",
			},
		],
		gallery: [
			"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=2069&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=2027&auto=format&fit=crop",
		],
		galleryAlt: "Corbett",
	},
	bestTime: {
		eyebrow: "Plan Your Visit",
		title: "Best Time to Visit",
		description:
			"November to June is the ideal window for visiting Jim Corbett. The summer months (March – June) offer the highest probability of tiger sightings as animals gather around water sources. The park remains partially closed during the monsoon season from July to October.",
		seasons: [
			{
				name: "Winter",
				months: "Nov – Feb",
				description: "Pleasant weather, lush greens",
			},
			{
				name: "Summer",
				months: "Mar – Jun",
				description: "Peak tiger sightings",
				highlighted: true,
			},
			{
				name: "Monsoon",
				months: "Jul – Oct",
				description: "Core zones closed",
			},
		],
	},
	cta: {
		title: "Ready for the Roar?",
		description:
			"Let us craft a bespoke Jim Corbett safari experience for you — complete with expert naturalists, zone-optimized game drives, and stays at the finest lodges.",
		buttonLabel: "Enquire Now",
	},
};

export const Route = createFileRoute("/destinations/corbett/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationPage destination={corbett} />;
}
