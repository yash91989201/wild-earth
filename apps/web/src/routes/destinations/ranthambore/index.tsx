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

const ranthambore: DestinationPageData = {
	hero: {
		eyebrow: "Rajasthan, India",
		title: ["Ranthambore", "National Park"],
		images: [
			"/assets/ranthambore/01.jpg",
			"/assets/ranthambore/02.jpg",
			"/assets/ranthambore/03.jpg",
		],
		imageAlt: "Ranthambore",
	},
	overview: {
		eyebrow: "About the Park",
		title: "Where Tigers Roam Ancient Ruins",
		description:
			"Ranthambore National Park is one of India's most celebrated wildlife reserves. Set against the dramatic backdrop of the 10th-century Ranthambore Fort, the park's dry deciduous forests, open grasslands, and serene lakes create the perfect stage for unforgettable tiger encounters. Once the private hunting ground of the Maharajas of Jaipur, it is now a global beacon for conservation and responsible wildlife tourism.",
	},
	keyFacts: [
		{
			icon: IconMapPin,
			label: "Location",
			value: "Sawai Madhopur, Rajasthan",
		},
		{ icon: IconRuler, label: "Area", value: "392 sq km" },
		{ icon: IconCalendar, label: "Established", value: "1980 (National Park)" },
		{ icon: IconTree, label: "Zones", value: "10 Safari Zones" },
	],
	wildlife: {
		eyebrow: "Wildlife",
		title: "What You May Encounter",
		items: [
			{
				name: "Bengal Tiger",
				description:
					"The star attraction — Ranthambore is one of the best places in the world to spot wild tigers.",
			},
			{
				name: "Indian Leopard",
				description:
					"Often seen resting on rocky outcrops or scampering through the dry deciduous forest.",
			},
			{
				name: "Sloth Bear",
				description:
					"Shaggy and nocturnal, frequently spotted near the park's many berry-laden bushes.",
			},
			{
				name: "Crocodile",
				description:
					"Mugger crocodiles bask along the banks of Padam Talao and Malik Talao.",
			},
			{
				name: "Sambar Deer",
				description:
					"The largest Indian deer, a primary prey species and common sighting across all zones.",
			},
			{
				name: "Striped Hyena",
				description:
					"Elusive scavenger most active at dawn and dusk in the park's quieter corners.",
			},
		],
	},
	landscape: {
		eyebrow: "Safari Zones",
		title: "Navigate the Landscape",
		items: [
			{
				name: "Zone 1 – 5",
				description:
					"The core tiger habitat with the highest density of sightings. Zone 3 and 4 are especially productive, surrounding Padam Talao and Malik Talao.",
			},
			{
				name: "Zone 6 – 10",
				description:
					"The buffer zones offer a wilder, less-crowded experience with excellent birding and increasing tiger movement.",
			},
		],
		gallery: [
			"/assets/ranthambore/01.jpg",
			"/assets/ranthambore/02.jpg",
			"/assets/ranthambore/03.jpg",
		],
		galleryAlt: "Ranthambore",
	},
	bestTime: {
		eyebrow: "Plan Your Visit",
		title: "Best Time to Visit",
		description:
			"October to June is the prime window for tiger sightings. The summer months (April – June) offer the highest probability of encounters as animals gather around the park's remaining water bodies. The park remains closed during the monsoon season from July to September.",
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
				description: "Park closed",
			},
		],
	},
	cta: {
		title: "Ready to Track the Tiger?",
		description:
			"Let us craft a bespoke Ranthambore safari experience for you — complete with expert naturalists, zone-optimized game drives, and stays at the finest lodges.",
		buttonLabel: "Enquire Now",
	},
};

export const Route = createFileRoute("/destinations/ranthambore/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationPage destination={ranthambore} />;
}
