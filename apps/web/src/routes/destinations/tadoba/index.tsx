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

const tadoba: DestinationPageData = {
	hero: {
		eyebrow: "Maharashtra, India",
		title: ["Tadoba", "National Park"],
		images: [
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
		],
		imageAlt: "Tadoba Andhari Tiger Reserve",
	},
	overview: {
		eyebrow: "About the Park",
		title: "The Jewel of Vidarbha",
		description:
			"Tadoba Andhari Tiger Reserve is a pristine and unique ecosystem situated in the Chandrapur district of Maharashtra. It is the state's oldest and largest national park, famously known as the \"Jewel of Vidarbha\". The name 'Tadoba' comes from a local deity, Taru, and the park is celebrated for its incredible tiger sightings. Its landscape features thick forests of teak and bamboo, alongside scenic lakes and rivers, supporting a high density of predators including tigers, leopards, and wild dogs.",
	},
	keyFacts: [
		{ icon: IconMapPin, label: "Location", value: "Maharashtra, India" },
		{ icon: IconRuler, label: "Area", value: "1,727 sq km" },
		{ icon: IconCalendar, label: "Established", value: "1955 (Tiger Reserve)" },
		{ icon: IconTree, label: "Famous For", value: "Tigers, Sloth Bears" },
	],
	wildlife: {
		eyebrow: "Wildlife",
		title: "What You May Encounter",
		items: [
			{
				name: "Tigers of Tadoba",
				description:
					"Famous for frequent sightings, the tigers here often cool off in the lakes during hot summers, offering incredible photographic opportunities.",
			},
			{
				name: "Sloth Bear",
				description:
					"Tadoba is one of the best places in India to spot the elusive, shaggy-coated sloth bear rummaging through the undergrowth.",
			},
			{
				name: "Marsh Crocodile",
				description:
					"The serene Tadoba lake is home to a thriving population of mugger crocodiles, often seen basking on the banks.",
			},
			{
				name: "Indian Leopard",
				description:
					"A stealthy predator frequently spotted in the hilly terrain and dense teak forests of the reserve.",
			},
			{
				name: "Wild Dog (Dhole)",
				description:
					"Highly social predators, packs of wild dogs are often seen hunting in the park's open meadows and forest edges.",
			},
			{
				name: "Bamboo Thickets",
				description:
					"The park's landscape is famously characterized by dense bamboo groves intermixed with teak, creating a unique habitat.",
			},
		],
	},
	landscape: {
		eyebrow: "Safari Zones",
		title: "Navigate the Landscape",
		items: [
			{
				name: "Moharli Zone",
				description:
					"The oldest and most popular zone with excellent tiger sightings. Its open meadows and waterholes make it ideal for photography.",
			},
			{
				name: "Kolsa Zone",
				description:
					"Known for sloth bears and wild dogs, this zone features dense forests and is less crowded for a more intimate experience.",
			},
		],
		gallery: [
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop",
		],
		galleryAlt: "Tadoba",
	},
	bestTime: {
		eyebrow: "Plan Your Visit",
		title: "Best Time to Visit",
		description:
			"October to June is the ideal window for visiting Tadoba. The summer months (March – June) offer the highest probability of tiger sightings as animals gather around water sources. The park remains closed during the monsoon season from July to September.",
		seasons: [
			{
				name: "Winter",
				months: "Oct – Feb",
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
				months: "Jul – Sep",
				description: "Core zones closed",
			},
		],
	},
	cta: {
		title: "Ready to Track the Jewel?",
		description:
			"Let us craft a bespoke Tadoba safari experience for you — complete with expert naturalists, zone-optimized game drives, and stays at the finest lodges.",
		buttonLabel: "Enquire Now",
	},
};

export const Route = createFileRoute("/destinations/tadoba/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationPage destination={tadoba} />;
}
