import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const amanIKhas = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/aman-i-khas/image-0.jpg",
		imageAlt: "Aman-i-Khas",
		title: "Aman-i-Khas",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Aman-i-Khas grounds",
				src: "/assets/ranthambore/lodges/aman-i-khas/gallery/01.jpg",
			},
			secondary: {
				alt: "Aman-i-Khas detail",
				src: "/assets/ranthambore/lodges/aman-i-khas/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Aman-i-Khas is a serene tented camp on the outskirts of Ranthambore National Park, where Mughal-inspired design meets Aman's signature minimalism. The camp moves with the seasons, following the rhythm of the wilderness.",
			"Each tent is a sanctuary of calm, featuring soaring canopies, soaking tubs, and private decks that open onto the rugged beauty of the Aravalli hills.",
		],
		title: "Nomadic Luxury in the Wild",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Intimate dining experiences featuring seasonal, locally sourced cuisine prepared by Aman's master chefs in spectacular settings.",
			image: "/assets/ranthambore/lodges/aman-i-khas/gallery/03.jpg",
			title: "Bespoke Dining",
		},
		{
			description:
				"Traditional Ayurvedic treatments, meditation, and yoga sessions designed to restore harmony and deepen your connection with nature.",
			image: "/assets/ranthambore/lodges/aman-i-khas/gallery/04.jpg",
			title: "Ayurvedic Wellness",
		},
		{
			description:
				"Exclusive guided safaris with Aman's expert naturalists, offering privileged access to Ranthambore's most elusive wildlife.",
			image: "/assets/ranthambore/lodges/aman-i-khas/gallery/05.jpg",
			title: "Private Safaris",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Tented Pavilions",
	},
	rooms: [
		{
			description:
				"A spacious tent with a king bed, writing desk, and deep soaking tub, surrounded by the sounds of the forest.",
			details: "Garden View • 600 sqft",
			images: [
				"/assets/ranthambore/lodges/aman-i-khas/rooms/tented-pavilion-01.jpg",
				"/assets/ranthambore/lodges/aman-i-khas/rooms/tented-pavilion-02.jpg",
				"/assets/ranthambore/lodges/aman-i-khas/rooms/tented-pavilion-03.jpg",
				"/assets/ranthambore/lodges/aman-i-khas/rooms/tented-pavilion-04.jpg",
			],
			name: "Tented Pavilion",
		},
		{
			description:
				"An elevated tent with a private heated pool, separate living area, and dedicated host service for an intimate escape.",
			details: "Private Pool • 900 sqft",
			images: [
				"/assets/ranthambore/lodges/aman-i-khas/rooms/tented-pool-pavilion-01.jpg",
				"/assets/ranthambore/lodges/aman-i-khas/rooms/tented-pool-pavilion-02.jpg",
				"/assets/ranthambore/lodges/aman-i-khas/rooms/tented-pool-pavilion-03.jpg",
			],
			name: "Tented Pool Pavilion",
		},
		{
			description:
				"The grandest accommodation, with multiple pavilions, a large private pool, and expansive outdoor living space for the ultimate wilderness retreat.",
			details: "Grand Pool • 1,500 sqft",
			images: [
				"/assets/ranthambore/lodges/aman-i-khas/rooms/grand-tented-pool-pavilion-01.jpg",
				"/assets/ranthambore/lodges/aman-i-khas/rooms/grand-tented-pool-pavilion-02.jpg",
				"/assets/ranthambore/lodges/aman-i-khas/rooms/grand-tented-pool-pavilion-03.jpg",
			],
			name: "Grand Tented Pool Pavilion",
		},
	],
	testimonial: {
		attribution: "Condé Nast Traveler",
		quote:
			"Aman-i-Khas is the epitome of understated luxury. A spiritual experience that transcends ordinary travel and connects you deeply with the wild.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Discover the art of nomadic luxury at Aman-i-Khas, where silence speaks louder than words.",
		title: "Ready to Experience Aman-i-Khas?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/aman-i-khas"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={amanIKhas} />;
}
