import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const tigressResort = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/tigress-resort/image-0.jpg",
		imageAlt: "The Tigress Resort",
		title: "The Tigress Resort",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "The Tigress Resort grounds",
				src: "/assets/ranthambore/lodges/tigress-resort/gallery/01.jpg",
			},
			secondary: {
				alt: "The Tigress Resort detail",
				src: "/assets/ranthambore/lodges/tigress-resort/gallery/02.jpg",
			},
		},
		paragraphs: [
			"The Tigress Resort offers a luxurious retreat in the heart of Ranthambore, blending modern comforts with the raw beauty of the wilderness. Each space is designed to immerse guests in nature while providing world-class hospitality.",
			"From curated wildlife experiences to rejuvenating spa treatments, every moment at The Tigress is crafted to create lasting memories in one of India's most celebrated national parks.",
		],
		title: "Luxury in the Heart of the Wild",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Exquisite dining experiences featuring local Rajasthani flavors and international cuisine, served in elegant settings overlooking the forest.",
			image: "/assets/ranthambore/lodges/tigress-resort/gallery/03.jpg",
			title: "Fine Dining",
		},
		{
			description:
				"Unwind with holistic wellness therapies and treatments designed to restore balance after an exhilarating day of safari adventures.",
			image: "/assets/ranthambore/lodges/tigress-resort/gallery/04.jpg",
			title: "Wellness & Spa",
		},
		{
			description:
				"Expert-led jeep and canter safaris into Ranthambore National Park, offering unparalleled opportunities to witness the Bengal tiger in its natural habitat.",
			image: "/assets/ranthambore/lodges/tigress-resort/gallery/05.jpg",
			title: "Tiger Safaris",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Suites & Villas",
	},
	rooms: [
		{
			description:
				"A charming cottage with garden views, traditional Rajasthani décor, and a private sit-out for quiet mornings.",
			details: "Garden View • 450 sqft",
			images: [
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-cottage-01.jpg",
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-cottage-02.jpg",
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-cottage-03.jpg",
			],
			name: "Royal Luxury Cottage",
		},
		{
			description:
				"An expansive suite with a separate living area, heritage furnishings, and a private balcony overlooking the reserve.",
			details: "Forest View • 700 sqft",
			images: [
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-suite-01.jpg",
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-suite-02.jpg",
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-suite-03.jpg",
			],
			name: "Royal Luxury Suite",
		},
		{
			description:
				"A standalone villa with a private plunge pool, dedicated outdoor space, and uninterrupted views of the Aravalli hills.",
			details: "Private Pool • 1,200 sqft",
			images: [
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-villa-01.jpg",
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-villa-02.jpg",
				"/assets/ranthambore/lodges/tigress-resort/rooms/royal-luxury-villa-03.jpg",
			],
			name: "Royal Luxury Villa",
		},
	],
	testimonial: {
		attribution: "Guest Review",
		quote:
			"An unforgettable blend of luxury and wilderness. The Tigress Resort exceeded every expectation with its impeccable service and stunning location.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Experience the perfect balance of adventure and relaxation at The Tigress Resort.",
		title: "Ready to Experience The Tigress Resort?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/tigress-resort"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={tigressResort} />;
}
