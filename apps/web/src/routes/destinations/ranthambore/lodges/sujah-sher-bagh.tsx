import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const sujahSherBagh = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/sujah-sher-bagh/image-0.jpg",
		imageAlt: "Sujah Sher Bagh",
		title: "Sujah Sher Bagh",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Sujah Sher Bagh grounds",
				src: "/assets/ranthambore/lodges/sujah-sher-bagh/gallery/01.jpg",
			},
			secondary: {
				alt: "Sujah Sher Bagh detail",
				src: "/assets/ranthambore/lodges/sujah-sher-bagh/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Sujah Sher Bagh is a tented camp that captures the romance of the Raj era, set amid verdant meadows on the edge of Ranthambore National Park. Each tent is a private sanctuary of understated luxury.",
			"The camp's commitment to conservation and community shines through every experience, from farm-fresh dining to guided walks that reveal the hidden stories of the land.",
		],
		title: "The Art of Tented Luxury",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Garden-fresh ingredients transformed into memorable meals, served beneath ancient banyan trees or by candlelight in your private tent.",
			image: "/assets/ranthambore/lodges/sujah-sher-bagh/gallery/03.jpg",
			title: "Garden Dining",
		},
		{
			description:
				"Expert naturalists lead intimate wildlife encounters, sharing deep knowledge of Ranthambore's tigers, birds, and ecosystems.",
			image: "/assets/ranthambore/lodges/sujah-sher-bagh/gallery/04.jpg",
			title: "Wildlife Encounters",
		},
		{
			description:
				"Immersive experiences connecting you with local artisans, farmers, and the rich cultural tapestry of rural Rajasthan.",
			image: "/assets/ranthambore/lodges/sujah-sher-bagh/gallery/05.jpg",
			title: "Cultural Immersion",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Tented Suites",
	},
	rooms: [
		{
			description:
				"A spacious tent with a private veranda, vintage campaign furniture, and en-suite bathroom with heated rain shower.",
			details: "Garden View • 500 sqft",
			images: [
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/tented-jungle-suite-01.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/tented-jungle-suite-02.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/tented-jungle-suite-03.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/tented-jungle-suite-04.jpg",
			],
			name: "Tented Jungle Suite",
		},
		{
			description:
				"An elevated tent with a separate living area, private garden, and dedicated butler service for an unforgettable stay.",
			details: "Private Garden • 700 sqft",
			images: [
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/royal-sher-suite-01.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/royal-sher-suite-02.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/royal-sher-suite-03.jpg",
			],
			name: "Royal Sher Suite",
		},
		{
			description:
				"A family-friendly tent with two bedrooms, a shared living space, and plenty of room for unforgettable memories together.",
			details: "Family • 900 sqft",
			images: [
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/two-bed-room-suite-01.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/two-bed-room-suite-02.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/two-bed-room-suite-03.jpg",
				"/assets/ranthambore/lodges/sujah-sher-bagh/rooms/two-bed-room-suite-04.jpg",
			],
			name: "Two bed Room Suite",
		},
	],
	testimonial: {
		attribution: "Guest Review",
		quote:
			"Sujah Sher Bagh is pure magic. The tents are extraordinary, the food is exceptional, and the sense of being at one with nature is incomparable.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Step into a world of tented elegance and wild wonder at Sujah Sher Bagh.",
		title: "Ready to Experience Sujah Sher Bagh?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/sujah-sher-bagh"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={sujahSherBagh} />;
}
