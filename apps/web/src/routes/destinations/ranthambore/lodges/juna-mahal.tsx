import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const junaMahalLodge = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/juna-mahal/image.png",
		imageAlt: "Juna Mahal lodge",
		title: "Juna Mahal",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Juna Mahal interior",
				src: "/assets/ranthambore/lodges/juna-mahal/gallery/01.jpg",
			},
			secondary: {
				alt: "Juna Mahal detail",
				src: "/assets/ranthambore/lodges/juna-mahal/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Juna Mahal brings the grace of Rajasthan into the untamed landscape of Ranthambore. Every space is shaped to feel intimate, indulgent, and closely connected to the forest beyond.",
			"From dawn safaris to sunset dinners, the lodge balances conservation, craft, and quiet luxury in a way that feels both grounded and rare.",
		],
		title: "Where Heritage Meets the Wild",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Michelin-grade cuisine inspired by royal Rajasthani flavors, seasonal produce, and elegant candlelit service.",
			image: "/assets/ranthambore/lodges/juna-mahal/gallery/03.jpg",
			title: "Gastronomy",
		},
		{
			description:
				"Ancient therapies, aromatic oils, and restorative treatments designed to slow the pace of the wilderness.",
			image: "/assets/ranthambore/lodges/juna-mahal/gallery/04.jpg",
			title: "Sanctuary Spa",
		},
		{
			description:
				"Private jeep safaris, curated village visits, and sunrise birding tailored by dedicated naturalists.",
			image: "/assets/ranthambore/lodges/juna-mahal/gallery/05.jpg",
			title: "Bespoke Excursions",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Suites & Villas",
	},
	rooms: [
		{
			description:
				"A well-appointed retreat with hand-blocked textiles, a private sit-out, and views of the manicured gardens and Aravalli foothills.",
			details: "Garden View • 450 sqft",
			images: [
				"/assets/ranthambore/lodges/juna-mahal/rooms/deluxe-room-01.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/deluxe-room-02.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/deluxe-room-03.jpg",
			],
			name: "Deluxe Room",
		},
		{
			description:
				"Spacious living area with traditional Rajasthani accents, a four-poster bed, and a private balcony overlooking the reserve forest.",
			details: "Forest View • 650 sqft",
			images: [
				"/assets/ranthambore/lodges/juna-mahal/rooms/suite-01.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/suite-02.jpg",
			],
			name: "Suite",
		},
		{
			description:
				"An elevated villa with a private rooftop terrace, open-air dining, and uninterrupted sunrise views across the wilderness.",
			details: "Panoramic View • 900 sqft",
			images: [
				"/assets/ranthambore/lodges/juna-mahal/rooms/terrace-villa-01.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/terrace-villa-02.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/terrace-villa-03.jpg",
			],
			name: "Terrace Villa",
		},
		{
			description:
				"Opening onto a private courtyard with indigenous flowering plants, this room blends indoor comfort with the fragrance of the garden.",
			details: "Courtyard Access • 550 sqft",
			images: [
				"/assets/ranthambore/lodges/juna-mahal/rooms/garden-room-01.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/garden-room-02.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/garden-room-03.jpg",
			],
			name: "Garden Room",
		},
		{
			description:
				"A grand suite with separate living and sleeping quarters, heritage furnishings, and views of the central reflection pool.",
			details: "Partial Pool View • 1,200 sqft",
			images: [
				"/assets/ranthambore/lodges/juna-mahal/rooms/villa-suite-01.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/villa-suite-02.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/villa-suite-03.jpg",
			],
			name: "Villa Suite",
		},
		{
			description:
				"A standalone villa with a private plunge pool, dedicated butler service, and uninterrupted views of the Aravalli hills at sunset.",
			details: "Private Pool • 1,800 sqft",
			images: [
				"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-01.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-02.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-03.jpg",
				"/assets/ranthambore/lodges/juna-mahal/rooms/pool-villa-04.jpg",
			],
			name: "Pool Villa",
		},
	],
	testimonial: {
		attribution: "Condé Nast Traveler",
		quote:
			"An absolute triumph of hospitality. Juna Mahal redefines what it means to escape into the wild.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Plan a stay shaped by comfort, craft, and the thrill of Ranthambore's wild heart.",
		title: "Ready to Experience Juna Mahal?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/juna-mahal"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={junaMahalLodge} />;
}
