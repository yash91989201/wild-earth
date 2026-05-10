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

const kanha: DestinationPageData = {
	hero: {
		eyebrow: "Madhya Pradesh, India",
		title: ["Kanha", "National Park"],
		images: [
			"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
		],
		imageAlt: "Kanha forest landscape",
	},
	overview: {
		eyebrow: "About the Park",
		title: "The Jungle Book Come to Life",
		description:
			"Kanha National Park is the very landscape that inspired Rudyard Kipling's The Jungle Book. A pristine mosaic of lush sal forests, bamboo groves, and expansive grassy meadows known as maidans, it is one of India's largest and most meticulously managed tiger reserves. Kanha is also the sole sanctuary of the hard-ground Barasingha, brought back from near-extinction through one of conservation's greatest success stories. To safari here is to walk into a living storybook.",
	},
	keyFacts: [
		{
			icon: IconMapPin,
			label: "Location",
			value: "Mandla & Balaghat, Madhya Pradesh",
		},
		{ icon: IconRuler, label: "Area", value: "2,005 sq km" },
		{
			icon: IconCalendar,
			label: "Established",
			value: "1955 (Tiger Reserve 1973)",
		},
		{ icon: IconTree, label: "Zones", value: "4 Safari Zones" },
	],
	wildlife: {
		eyebrow: "Wildlife",
		title: "What You May Encounter",
		items: [
			{
				name: "Bengal Tiger",
				description:
					"Kanha's sal forests and open meadows offer some of India's most scenic tiger sightings, often against a backdrop of golden grass.",
			},
			{
				name: "Hard-ground Barasingha",
				description:
					"Kanha is the sole home of this subspecies — saved from the brink of extinction, now numbering over 800 individuals.",
			},
			{
				name: "Indian Leopard",
				description:
					"Frequently spotted in the bamboo belts and along the Banjar river, especially during the early morning hours.",
			},
			{
				name: "Wild Dog (Dhole)",
				description:
					"Kanha harbours one of India's most stable dhole populations; their coordinated hunts across meadows are unforgettable.",
			},
			{
				name: "Gaur (Indian Bison)",
				description:
					"Massive dark herds move between the sal forests and grassy clearings, most active at dawn and dusk.",
			},
			{
				name: "Indian Python",
				description:
					"These powerful constrictors are often found near water bodies and in the park's warmer, rocky terrain.",
			},
		],
	},
	landscape: {
		eyebrow: "Safari Zones",
		title: "Navigate the Landscape",
		items: [
			{
				name: "Kanha & Kisli",
				description:
					"The core zones feature the park's most iconic meadows — Babathenga, Shravan, and the breeding ground of the hard-ground Barasingha. Kanha zone also leads to Bamni Dadar, the legendary Sunset Point.",
			},
			{
				name: "Mukki & Sarhi",
				description:
					"Mukki offers a quieter, more remote experience with excellent gaur and tiger sightings, while Sarhi's hilly terrain and mixed forests are a birder's delight.",
			},
		],
		gallery: [
			"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
		],
		galleryAlt: "Kanha",
	},
	bestTime: {
		eyebrow: "Plan Your Visit",
		title: "Best Time to Visit",
		description:
			"Kanha opens in mid-October and remains accessible until June. The cool winter months offer comfortable weather and lush landscapes after the monsoon. By April and May, the meadows turn golden and wildlife concentrates around water sources, making for spectacular sightings against dramatic light.",
		seasons: [
			{
				name: "Winter",
				months: "Oct – Feb",
				description: "Green meadows, pleasant days",
			},
			{
				name: "Summer",
				months: "Mar – Jun",
				description: "Golden grass, waterhole drama",
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
		title: "Step Into the Jungle Book",
		description:
			"Let us curate your Kanha expedition — sunrise safaris across golden meadows, tiger tracking with expert naturalists, and evenings at Bamni Dadar watching the sun set over Kipling's forest.",
		buttonLabel: "Enquire Now",
	},
};

export const Route = createFileRoute("/destinations/kanha/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationPage destination={kanha} />;
}
