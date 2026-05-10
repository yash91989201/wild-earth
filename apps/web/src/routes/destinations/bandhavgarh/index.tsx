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

const bandhavgarh: DestinationPageData = {
	hero: {
		eyebrow: "Madhya Pradesh, India",
		title: ["Bandhavgarh", "National Park"],
		images: [
			"https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
		],
		imageAlt: "Tiger in Bandhavgarh",
	},
	overview: {
		eyebrow: "About the Park",
		title: "The Kingdom of Tigers",
		description:
			"Bandhavgarh is where tiger lore meets living reality. Set amidst the Vindhya ranges of Madhya Pradesh, this compact reserve harbours the highest known density of Royal Bengal Tigers on Earth. Ancient sal forests, bamboo groves, and open grasslands are overlooked by the hilltop Bandhavgarh Fort — a 2,000-year-old citadel whose caves still bear Brahmi inscriptions. From the legendary Charger and Sita to today's rising stars, every tiger here has a story, and the forest feels alive with history.",
	},
	keyFacts: [
		{ icon: IconMapPin, label: "Location", value: "Umaria, Madhya Pradesh" },
		{ icon: IconRuler, label: "Area", value: "1,536 sq km" },
		{
			icon: IconCalendar,
			label: "Established",
			value: "1968 (Tiger Reserve 1993)",
		},
		{ icon: IconTree, label: "Zones", value: "3 Safari Zones" },
	],
	wildlife: {
		eyebrow: "Wildlife",
		title: "What You May Encounter",
		items: [
			{
				name: "Royal Bengal Tiger",
				description:
					"Bandhavgarh holds the world's highest known density of tigers — sightings are remarkably consistent, especially in the Tala zone.",
			},
			{
				name: "Indian Leopard",
				description:
					"Agile climbers often seen on rocky outcrops and in the dense bamboo thickets of the Magdhi zone.",
			},
			{
				name: "Gaur (Indian Bison)",
				description:
					"Massive herds graze the grasslands and forest clearings, particularly in the Khitauli zone.",
			},
			{
				name: "Sambar Deer",
				description:
					"The park's largest deer species and a primary prey base, visible throughout the reserve at waterholes.",
			},
			{
				name: "Wild Boar",
				description:
					"Omnivorous and alert, these bristly foragers are a common and entertaining sight on every safari.",
			},
			{
				name: "Nilgai",
				description:
					"India's largest antelope, often spotted at dawn near the park's meadows and forest edges.",
			},
		],
	},
	landscape: {
		eyebrow: "Safari Zones",
		title: "Navigate the Landscape",
		items: [
			{
				name: "Tala Zone",
				description:
					"The crown jewel of Bandhavgarh. The oldest and most scenic zone, home to the highest tiger density, ancient fort ruins, and the iconic Shesh Shaiya statue. This is where legendary tigers like Charger and Sita once ruled.",
			},
			{
				name: "Magdhi & Khitauli",
				description:
					"Magdhi offers excellent leopard and tiger sightings amidst bamboo groves, while Khitauli is the park's newest zone with open grasslands perfect for gaur, nilgai, and birding.",
			},
		],
		gallery: [
			"https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
		],
		galleryAlt: "Bandhavgarh",
	},
	bestTime: {
		eyebrow: "Plan Your Visit",
		title: "Best Time to Visit",
		description:
			"The park welcomes visitors from October to June. Summer (March – June) is the golden window for tiger sightings as the forest thins and animals gather at water sources. Winter mornings are misty and magical, perfect for photography and exploring the ancient fort. The monsoon closes the park from July to September.",
		seasons: [
			{
				name: "Winter",
				months: "Oct – Feb",
				description: "Misty mornings, fort treks",
			},
			{
				name: "Summer",
				months: "Mar – Jun",
				description: "Unmatched tiger sightings",
				highlighted: true,
			},
			{
				name: "Monsoon",
				months: "Jul – Sep",
				description: "Park closed",
			},
		],
	},
	cta: {
		title: "Enter the Tiger's Kingdom",
		description:
			"Experience the world's most tiger-dense forest with our bespoke Bandhavgarh safaris — expert naturalists, premium zone permits, and stays at the finest jungle lodges.",
		buttonLabel: "Enquire Now",
	},
};

export const Route = createFileRoute("/destinations/bandhavgarh/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationPage destination={bandhavgarh} />;
}
