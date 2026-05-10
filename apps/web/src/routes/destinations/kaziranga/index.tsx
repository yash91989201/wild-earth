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

const kaziranga: DestinationPageData = {
	hero: {
		eyebrow: "Assam, India",
		title: ["Kaziranga", "National Park"],
		images: [
			"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
		],
		imageAlt: "Kaziranga National Park",
	},
	overview: {
		eyebrow: "About the Park",
		title: "The Wetlands of the East",
		description:
			"Kaziranga National Park is a massive expanse of tall elephant grass, marshland, and dense tropical moist broadleaf forests, crisscrossed by four major rivers, including the mighty Brahmaputra. Recognized as a UNESCO World Heritage Site, it's a profound conservation success story. It hosts two-thirds of the world's great one-horned rhinoceroses. The park also boasts the highest density of tigers among protected areas in the world and is home to large breeding populations of elephants, wild water buffalo, and swamp deer.",
	},
	keyFacts: [
		{ icon: IconMapPin, label: "Location", value: "Assam, India" },
		{ icon: IconRuler, label: "Area", value: "430 sq km" },
		{
			icon: IconCalendar,
			label: "Established",
			value: "1905 (UNESCO WHS)",
		},
		{ icon: IconTree, label: "Famous For", value: "One-horned Rhinos" },
	],
	wildlife: {
		eyebrow: "Wildlife",
		title: "What You May Encounter",
		items: [
			{
				name: "One-Horned Rhino",
				description:
					"The symbol of Kaziranga, seen grazing peacefully in the tall elephant grass and marshlands. The park hosts two-thirds of the world's population.",
			},
			{
				name: "Asian Elephant",
				description:
					"Massive herds traverse the park, utilizing the abundant water resources of the Brahmaputra and its tributaries.",
			},
			{
				name: "Wild Water Buffalo",
				description:
					"Kaziranga hosts one of the last remaining populations of purebred wild water buffalos, often seen wallowing in mud.",
			},
			{
				name: "Bengal Tiger",
				description:
					"The park boasts the highest density of tigers among protected areas in the world, making it a critical conservation stronghold.",
			},
			{
				name: "Swamp Deer",
				description:
					"Large breeding populations of swamp deer thrive in the park's marshlands and tall grass ecosystems.",
			},
			{
				name: "Elephant Grass",
				description:
					"Growing up to 5 meters tall, these grasslands provide the perfect cover for the park's megafauna and shape the entire landscape.",
			},
		],
	},
	landscape: {
		eyebrow: "Safari Zones",
		title: "Navigate the Landscape",
		items: [
			{
				name: "Central Range (Kohora)",
				description:
					"The most accessible and popular zone, offering the highest density of one-horned rhinos and frequent tiger sightings along well-maintained trails.",
			},
			{
				name: "Western Range (Bagori)",
				description:
					"Known for large herds of elephants and water buffalo, this range features expansive grasslands with exceptional sunset views.",
			},
		],
		gallery: [
			"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2072&auto=format&fit=crop",
		],
		galleryAlt: "Kaziranga",
	},
	bestTime: {
		eyebrow: "Plan Your Visit",
		title: "Best Time to Visit",
		description:
			"November to April is the ideal window for visiting Kaziranga. The winter months offer pleasant weather and lush green landscapes. The park remains closed during the monsoon season from May to October due to flooding.",
		seasons: [
			{
				name: "Winter",
				months: "Nov – Feb",
				description: "Pleasant weather, lush greens",
			},
			{
				name: "Spring",
				months: "Mar – Apr",
				description: "Best for wildlife viewing",
				highlighted: true,
			},
			{
				name: "Monsoon",
				months: "May – Oct",
				description: "Park closed",
			},
		],
	},
	cta: {
		title: "Ready to Meet the Rhinos?",
		description:
			"Let us craft a bespoke Kaziranga safari experience for you — complete with expert naturalists, zone-optimized game drives, and stays at the finest lodges.",
		buttonLabel: "Enquire Now",
	},
};

export const Route = createFileRoute("/destinations/kaziranga/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationPage destination={kaziranga} />;
}
