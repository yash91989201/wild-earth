import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const aamaghatiResort = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/aamaghati-resort/image-0.jpg",
		imageAlt: "Aamaghati Resort",
		title: "Aamaghati Resort",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Aamaghati Resort grounds",
				src: "/assets/ranthambore/lodges/aamaghati-resort/gallery/01.jpg",
			},
			secondary: {
				alt: "Aamaghati Resort detail",
				src: "/assets/ranthambore/lodges/aamaghati-resort/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Aamaghati Resort is a sanctuary where traditional Rajasthani architecture meets contemporary luxury. Set amidst verdant landscapes, the resort offers an intimate connection with nature while ensuring every comfort is at hand.",
			"From personalized service to thoughtfully designed spaces, Aamaghati creates an atmosphere of tranquility and discovery for discerning travelers seeking an authentic Ranthambore experience.",
		],
		title: "Heritage Rooted in Nature",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Savor authentic Rajasthani cuisine and global flavors prepared with locally sourced ingredients, served beneath the stars or in elegant indoor settings.",
			image: "/assets/ranthambore/lodges/aamaghati-resort/gallery/03.jpg",
			title: "Culinary Journey",
		},
		{
			description:
				"Rejuvenate body and mind with traditional therapies, yoga sessions, and Ayurvedic treatments in a serene natural setting.",
			image: "/assets/ranthambore/lodges/aamaghati-resort/gallery/04.jpg",
			title: "Holistic Wellness",
		},
		{
			description:
				"Guided wildlife safaris and nature walks led by experienced naturalists, offering intimate encounters with Ranthambore's majestic fauna.",
			image: "/assets/ranthambore/lodges/aamaghati-resort/gallery/05.jpg",
			title: "Wildlife Encounters",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Rooms & Suites",
	},
	rooms: [
		{
			description:
				"A cozy retreat with modern amenities, warm earth tones, and a private balcony overlooking the resort gardens.",
			details: "Garden View • 380 sqft",
			images: [
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/evoke-rooms-01.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/evoke-rooms-02.jpg",
			],
			name: "Evoke Rooms",
		},
		{
			description:
				"Elegant rooms featuring refined décor, plush furnishings, and large windows that invite the surrounding greenery indoors.",
			details: "Garden View • 450 sqft",
			images: [
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/elegant-rooms-01.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/elegant-rooms-02.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/elegant-rooms-03.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/elegant-rooms-04.jpg",
			],
			name: "Elegant Rooms",
		},
		{
			description:
				"A spacious suite with a separate living area, traditional accents, and a private terrace for morning coffee with forest views.",
			details: "Forest View • 650 sqft",
			images: [
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/legacy-suite-01.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/legacy-suite-02.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/legacy-suite-03.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/legacy-suite-04.jpg",
			],
			name: "Legacy Suite",
		},
		{
			description:
				"A grand residence inspired by royal hunting lodges, featuring ornate interiors, a private courtyard, and dedicated service.",
			details: "Courtyard • 900 sqft",
			images: [
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/hameer-mahal-01.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/hameer-mahal-02.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/hameer-mahal-03.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/hameer-mahal-04.jpg",
			],
			name: "Hameer Mahal",
		},
		{
			description:
				"The most expansive accommodation, offering multiple rooms, a private pool, and panoramic views of the Ranthambore landscape.",
			details: "Private Pool • 1,500 sqft",
			images: [
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/jogi-mahal-01.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/jogi-mahal-02.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/jogi-mahal-03.jpg",
				"/assets/ranthambore/lodges/aamaghati-resort/rooms/jogi-mahal-04.jpg",
			],
			name: "Jogi Mahal",
		},
	],
	testimonial: {
		attribution: "Guest Review",
		quote:
			"Aamaghati Resort is a hidden gem where every detail speaks of care and craftsmanship. A truly memorable stay in Ranthambore.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Discover the perfect harmony of heritage and nature at Aamaghati Resort.",
		title: "Ready to Experience Aamaghati Resort?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/aamaghati-resort"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={aamaghatiResort} />;
}
