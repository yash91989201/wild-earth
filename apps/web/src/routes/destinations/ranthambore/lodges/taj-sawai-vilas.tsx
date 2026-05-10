import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const tajSawaiVilas = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/taj-sawai-vilas/image-0.jpg",
		imageAlt: "Taj Sawai Vilas",
		title: "Taj Sawai Vilas",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Taj Sawai Vilas grounds",
				src: "/assets/ranthambore/lodges/taj-sawai-vilas/gallery/01.jpg",
			},
			secondary: {
				alt: "Taj Sawai Vilas detail",
				src: "/assets/ranthambore/lodges/taj-sawai-vilas/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Taj Sawai Vilas brings the legendary Taj hospitality to the wild heart of Ranthambore. Set amid lush gardens and water features, the resort offers a serene sanctuary where luxury and nature coexist in perfect harmony.",
			"Each space is thoughtfully designed to reflect the region's rich heritage while offering modern comforts, creating an experience that is both authentically Rajasthani and unmistakably Taj.",
		],
		title: "Where Taj Legacy Meets the Wild",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Exquisite cuisine inspired by royal Rajasthani recipes, prepared with the finest ingredients and served in stunning alfresco settings.",
			image: "/assets/ranthambore/lodges/taj-sawai-vilas/gallery/03.jpg",
			title: "Royal Dining",
		},
		{
			description:
				"Rejuvenating spa therapies and wellness rituals designed to restore balance after exhilarating days in the national park.",
			image: "/assets/ranthambore/lodges/taj-sawai-vilas/gallery/04.jpg",
			title: "Jiva Spa",
		},
		{
			description:
				"Expertly guided jeep safaris into Ranthambore National Park, offering intimate encounters with the majestic Bengal tiger.",
			image: "/assets/ranthambore/lodges/taj-sawai-vilas/gallery/05.jpg",
			title: "Tiger Trails",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Rooms & Villas",
	},
	rooms: [
		{
			description:
				"An elegant retreat opening onto a private courtyard with indigenous flowering plants, blending indoor comfort with garden serenity.",
			details: "Courtyard View • 500 sqft",
			images: [
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-courtyard-01.jpg",
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-courtyard-02.jpg",
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-courtyard-03.jpg",
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-courtyard-04.jpg",
			],
			name: "Luxury Room With Courtyard",
		},
		{
			description:
				"A spacious room featuring a private plunge pool, perfect for cooling off after a day of safari adventures in the Ranthambore heat.",
			details: "Private Pool • 650 sqft",
			images: [
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-plunge-pool-01.jpg",
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-plunge-pool-02.jpg",
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-plunge-pool-03.jpg",
				"/assets/ranthambore/lodges/taj-sawai-vilas/rooms/luxury-room-with-plunge-pool-04.jpg",
			],
			name: "Luxury Room With Plunge Pool",
		},
	],
	testimonial: {
		attribution: "Guest Review",
		quote:
			"The perfect blend of Taj luxury and wilderness charm. Every detail at Sawai Vilas is designed to make your Ranthambore experience unforgettable.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Experience the legendary Taj hospitality in the heart of tiger country.",
		title: "Ready to Experience Taj Sawai Vilas?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/taj-sawai-vilas"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={tajSawaiVilas} />;
}
