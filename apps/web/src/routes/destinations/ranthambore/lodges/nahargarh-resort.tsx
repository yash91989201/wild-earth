import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const nahargarhResort = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/nahargarh-resort/image-0.jpg",
		imageAlt: "Nahargarh Resort",
		title: "Nahargarh Resort",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Nahargarh Resort grounds",
				src: "/assets/ranthambore/lodges/nahargarh-resort/gallery/01.jpg",
			},
			secondary: {
				alt: "Nahargarh Resort detail",
				src: "/assets/ranthambore/lodges/nahargarh-resort/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Nahargarh Resort offers a serene escape at the edge of Ranthambore National Park, where rustic charm meets modern comfort. The resort is designed to immerse guests in the natural beauty of the region while providing warm hospitality.",
			"Whether exploring the wild on a morning safari or relaxing by the pool as the sun sets, Nahargarh creates moments of peace and wonder for every traveler.",
		],
		title: "Comfort at the Forest's Edge",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Enjoy freshly prepared meals featuring local Rajasthani specialties and continental favorites in a warm, welcoming atmosphere.",
			image: "/assets/ranthambore/lodges/nahargarh-resort/gallery/03.jpg",
			title: "Local Flavors",
		},
		{
			description:
				"Relax and unwind in the resort's inviting pool area, surrounded by lush greenery and the sounds of the forest.",
			image: "/assets/ranthambore/lodges/nahargarh-resort/gallery/04.jpg",
			title: "Leisure & Relaxation",
		},
		{
			description:
				"Embark on thrilling jeep safaris into Ranthambore National Park with expert guides who bring the jungle to life.",
			image: "/assets/ranthambore/lodges/nahargarh-resort/gallery/05.jpg",
			title: "Jungle Safaris",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Rooms & Suites",
	},
	rooms: [
		{
			description:
				"A well-appointed room with comfortable furnishings, modern amenities, and views of the resort's landscaped gardens.",
			details: "Garden View • 350 sqft",
			images: [
				"/assets/ranthambore/lodges/nahargarh-resort/rooms/deluxe-room-01.jpg",
				"/assets/ranthambore/lodges/nahargarh-resort/rooms/deluxe-room-02.jpg",
			],
			name: "Deluxe Room",
		},
		{
			description:
				"An upgraded room with additional space, premium finishes, and a private balcony perfect for watching the sunset.",
			details: "Balcony View • 500 sqft",
			images: [
				"/assets/ranthambore/lodges/nahargarh-resort/rooms/super-deluxe-room-01.jpg",
			],
			name: "Super Deluxe Room",
		},
	],
	testimonial: {
		attribution: "Guest Review",
		quote:
			"Nahargarh Resort offered the perfect base for our Ranthambore adventure. Great location, friendly staff, and a peaceful atmosphere.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Experience warm hospitality and unforgettable wildlife moments at Nahargarh Resort.",
		title: "Ready to Experience Nahargarh Resort?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/nahargarh-resort"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={nahargarhResort} />;
}
