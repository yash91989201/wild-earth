import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const sawaiShivir = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/sawai-shivir-ranthambore/image-0.jpg",
		imageAlt: "Sawai Shivir Ranthambore",
		title: "Sawai Shivir",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Sawai Shivir grounds",
				src: "/assets/ranthambore/lodges/sawai-shivir-ranthambore/gallery/01.jpg",
			},
			secondary: {
				alt: "Sawai Shivir detail",
				src: "/assets/ranthambore/lodges/sawai-shivir-ranthambore/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Sawai Shivir reimagines luxury camping in the wild heart of Ranthambore. Spacious tents adorned with handcrafted furnishings offer an intimate connection with nature without compromising on comfort.",
			"From sunrise yoga to evening folk performances around the campfire, every moment at Sawai Shivir is designed to deepen your bond with the wilderness and its timeless rhythms.",
		],
		title: "Luxury Camping, Redefined",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"Farm-to-table dining under the stars, featuring organic produce and traditional Rajasthani flavors cooked over open flames.",
			image: "/assets/ranthambore/lodges/sawai-shivir-ranthambore/gallery/03.jpg",
			title: "Bush Dining",
		},
		{
			description:
				"Morning yoga sessions and Ayurvedic therapies to align body and mind with the natural energy of the forest.",
			image: "/assets/ranthambore/lodges/sawai-shivir-ranthambore/gallery/04.jpg",
			title: "Wellness in the Wild",
		},
		{
			description:
				"Private guided safaris into Ranthambore National Park with expert naturalists who know every trail and tiger territory.",
			image: "/assets/ranthambore/lodges/sawai-shivir-ranthambore/gallery/05.jpg",
			title: "Safari Expeditions",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Luxury Tents",
	},
	rooms: [
		{
			description:
				"A beautifully appointed tent with a private deck, en-suite bathroom, and views of the surrounding Aravalli hills.",
			details: "Hill View • 550 sqft",
			images: [
				"/assets/ranthambore/lodges/sawai-shivir-ranthambore/rooms/luxury-suite-tent-01.jpg",
				"/assets/ranthambore/lodges/sawai-shivir-ranthambore/rooms/luxury-suite-tent-02.jpg",
				"/assets/ranthambore/lodges/sawai-shivir-ranthambore/rooms/luxury-suite-tent-03.jpg",
			],
			name: "Luxury Suite Tent",
		},
		{
			description:
				"The most expansive tent with a separate living area, dedicated butler service, and uninterrupted forest views.",
			details: "Panoramic View • 900 sqft",
			images: [
				"/assets/ranthambore/lodges/sawai-shivir-ranthambore/rooms/presidential-suite-tent-01.jpg",
			],
			name: "Presidential Suite Tent",
		},
	],
	testimonial: {
		attribution: "Guest Review",
		quote:
			"Sawai Shivir is glamping at its finest. The tents are magnificent, the service impeccable, and the setting absolutely magical.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Discover the art of luxury camping in the heart of tiger territory.",
		title: "Ready to Experience Sawai Shivir?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/sawai-shivir-ranthambore"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={sawaiShivir} />;
}
