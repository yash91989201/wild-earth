import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const kiplingLodge = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/kipling-lodge/image-0.jpg",
		imageAlt: "Kipling Lodge",
		title: "Kipling Lodge",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Kipling Lodge grounds",
				src: "/assets/ranthambore/lodges/kipling-lodge/image-04.jpg",
			},
			secondary: {
				alt: "Kipling Lodge detail",
				src: "/assets/ranthambore/lodges/kipling-lodge/gallery/01.jpg",
			},
		},
		paragraphs: [
			"Kipling Lodge captures the essence of a peaceful wildlife getaway while offering warm, personalized service and charming colonial-inspired design. Spacious, clean rooms with private patios, lush gardens and open-air showers make it feel both elegant and deeply connected to nature.",
			"The lodge's culinary offerings receive strong praise, with freshly prepared meals served alongside traditional Rajasthani music and cultural performances. Activities from pottery sessions to folk music evenings create a welcoming atmosphere for all.",
		],
		title: "Where Nature Meets Comfort",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Flavorful and varied cuisine inspired by royal Rajasthani traditions, served in beautiful garden settings with live cultural performances.",
			image: "/assets/ranthambore/lodges/kipling-lodge/gallery/02.jpg",
			title: "Rajasthani Dining",
		},
		{
			description:
				"Rejuvenate after busy safari days with the swimming pool and spa facilities, surrounded by manicured lawns and tranquil lotus ponds.",
			image: "/assets/ranthambore/lodges/kipling-lodge/gallery/03.jpg",
			title: "Pool & Spa",
		},
		{
			description:
				"Private jeep safaris and wildlife excursions with easy access to Ranthambore National Park, guided by experienced naturalists.",
			image: "/assets/ranthambore/lodges/kipling-lodge/gallery/04.jpg",
			title: "Wildlife Safaris",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Suites & Villas",
	},
	rooms: [
		{
			description:
				"A charming cottage surrounded by lush gardens, offering a private sit-out and peaceful views of the manicured grounds.",
			details: "Garden View • 400 sqft",
			images: [
				"/assets/ranthambore/lodges/kipling-lodge/rooms/garden-groov-cottage-01.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/garden-groov-cottage-02.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/garden-groov-cottage-03.jpg",
			],
			name: "Garden Groov Cottage",
		},
		{
			description:
				"Spacious suite with elegant furnishings, a private balcony, and views of the surrounding forest and Aravalli foothills.",
			details: "Forest View • 600 sqft",
			images: [
				"/assets/ranthambore/lodges/kipling-lodge/rooms/majestic-suites-01.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/majestic-suites-02.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/majestic-suites-03.jpg",
			],
			name: "Majestic Suites",
		},
		{
			description:
				"A secluded villa with a private pool, open-air shower, and uninterrupted views of the wilderness.",
			details: "Private Pool • 900 sqft",
			images: [
				"/assets/ranthambore/lodges/kipling-lodge/rooms/hideway-pool-villa-01.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/hideway-pool-villa-02.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/hideway-pool-villa-03.jpg",
			],
			name: "Hideway Pool Villa",
		},
		{
			description:
				"An elevated suite with a private terrace offering panoramic sunrise views across the Ranthambore landscape.",
			details: "Panoramic View • 750 sqft",
			images: [
				"/assets/ranthambore/lodges/kipling-lodge/rooms/tiger-tour-with-terrace-01.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/tiger-tour-with-terrace-02.jpg",
				"/assets/ranthambore/lodges/kipling-lodge/rooms/tiger-tour-with-terrace-03.jpg",
			],
			name: "Tiger Tour With Terrace",
		},
	],
	testimonial: {
		attribution: "TripAdvisor Review",
		quote:
			"A harmonious blend of comfort, nature and genuine hospitality. Kipling Lodge is a recommended choice for those visiting Ranthambore.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Plan a stay shaped by comfort, nature, and the thrill of Ranthambore's wild heart.",
		title: "Ready to Experience Kipling Lodge?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/kipling-lodge"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={kiplingLodge} />;
}
