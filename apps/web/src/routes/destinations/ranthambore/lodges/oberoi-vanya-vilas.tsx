import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const oberoiVanyaVilas = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/oberoi-vanya-vilas/image-0.jpg",
		imageAlt: "The Oberoi Vanya Vilas",
		title: "Oberoi Vanya Vilas",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Oberoi Vanya Vilas grounds",
				src: "/assets/ranthambore/lodges/oberoi-vanya-vilas/gallery/01.jpg",
			},
			secondary: {
				alt: "Oberoi Vanya Vilas detail",
				src: "/assets/ranthambore/lodges/oberoi-vanya-vilas/gallery/02.jpg",
			},
		},
		paragraphs: [
			"The Oberoi Vanya Vilas is a luxury jungle resort on the edge of Ranthambore National Park, where traditional Rajasthani architecture meets Oberoi's legendary service. Lush gardens and lily ponds create an oasis of tranquility.",
			"Each luxury tent is appointed with the finest furnishings and modern amenities, offering guests an intimate connection with the wilderness while indulging in world-class hospitality.",
		],
		title: "Jungle Luxury, Oberoi Style",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Exceptional cuisine crafted by master chefs, featuring royal Rajasthani recipes and international favorites in breathtaking settings.",
			image: "/assets/ranthambore/lodges/oberoi-vanya-vilas/gallery/03.jpg",
			title: "Culinary Excellence",
		},
		{
			description:
				"Rejuvenating Ayurvedic therapies and spa treatments in a serene setting, designed to harmonize body and mind after your safari.",
			image: "/assets/ranthambore/lodges/oberoi-vanya-vilas/gallery/04.jpg",
			title: "The Oberoi Spa",
		},
		{
			description:
				"Expertly guided jeep safaris with Oberoi's naturalists, offering the best chance to spot Ranthambore's famed tigers and diverse wildlife.",
			image: "/assets/ranthambore/lodges/oberoi-vanya-vilas/gallery/05.jpg",
			title: "Tiger Safaris",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Luxury Tents",
	},
	rooms: [
		{
			description:
				"A beautifully appointed tent with a private sit-out, four-poster bed, and views of the resort's manicured gardens.",
			details: "Garden View • 550 sqft",
			images: [
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/luxury-tent-01.jpg",
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/luxury-tent-02.jpg",
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/luxury-tent-03.jpg",
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/luxury-tent-04.jpg",
			],
			name: "Luxury Tent",
		},
		{
			description:
				"An upgraded tent with a private heated pool, separate living area, and dedicated butler service for the ultimate indulgence.",
			details: "Private Pool • 800 sqft",
			images: [
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/luxury-tent-with-private-pool-01.jpg",
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/luxury-tent-with-private-pool-02.jpg",
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/luxury-tent-with-private-pool-03.jpg",
			],
			name: "Luxury Tent With Private Pool",
		},
		{
			description:
				"The most exclusive accommodation, featuring a large private pool, expansive living spaces, and panoramic views of the Aravalli hills.",
			details: "Royal Pool • 1,200 sqft",
			images: [
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/royal-tent-with-private-pool-01.jpg",
				"/assets/ranthambore/lodges/oberoi-vanya-vilas/rooms/royal-tent-with-private-pool-02.jpg",
			],
			name: "Royal Tent With Private Pool",
		},
	],
	testimonial: {
		attribution: "Travel + Leisure",
		quote:
			"The Oberoi Vanya Vilas sets the gold standard for jungle lodges in India. Impeccable service, exquisite design, and an unforgettable location.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Experience Oberoi's legendary hospitality in the wild heart of Ranthambore.",
		title: "Ready to Experience Oberoi Vanya Vilas?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/oberoi-vanya-vilas"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={oberoiVanyaVilas} />;
}
