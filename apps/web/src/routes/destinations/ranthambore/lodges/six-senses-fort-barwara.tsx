import { createFileRoute } from "@tanstack/react-router";
import LodgePage from "@/components/lodges/lodge-page";
import type { LodgePageData } from "@/lib/types";

const sixSensesFortBarwara = {
	hero: {
		eyebrow: "A World Apart",
		image: "/assets/ranthambore/lodges/six-senses-fort-barwara/image-0.jpg",
		imageAlt: "Six Senses Fort Barwara",
		title: "Six Senses Fort Barwara",
	},
	philosophy: {
		buttonLabel: "Discover The Resort",
		eyebrow: "Our Philosophy",
		images: {
			primary: {
				alt: "Six Senses Fort Barwara grounds",
				src: "/assets/ranthambore/lodges/six-senses-fort-barwara/gallery/01.jpg",
			},
			secondary: {
				alt: "Six Senses Fort Barwara detail",
				src: "/assets/ranthambore/lodges/six-senses-fort-barwara/gallery/02.jpg",
			},
		},
		paragraphs: [
			"Six Senses Fort Barwara is a majestic 14th-century fort transformed into an ultra-luxury wellness retreat. Set within the Aravalli hills, the property combines historic grandeur with Six Senses' signature sustainable luxury.",
			"Every suite is a sanctuary of calm, offering panoramic views, private terraces, and immersive wellness programs designed to restore body, mind, and spirit.",
		],
		title: "Heritage Reimagined Through Wellness",
	},
	experiencesTitle: "Curated Experiences",
	experiences: [
		{
			description:
				"A comprehensive wellness journey blending ancient Ayurveda, yoga, and modern science for transformative results.",
			image: "/assets/ranthambore/lodges/six-senses-fort-barwara/gallery/03.jpg",
			title: "Integrated Wellness",
		},
		{
			description:
				"Plant-based and locally sourced cuisine that nourishes while celebrating the vibrant flavors of Rajasthan.",
			image: "/assets/ranthambore/lodges/six-senses-fort-barwara/gallery/04.jpg",
			title: "Eat With Six Senses",
		},
		{
			description:
				"Exclusive guided safaris and nature immersions that connect you deeply with the biodiversity of Ranthambore.",
			image: "/assets/ranthambore/lodges/six-senses-fort-barwara/gallery/05.jpg",
			title: "Nature Immersion",
		},
	],
	accommodations: {
		eyebrow: "Accommodations",
		title: "Suites & Residences",
	},
	rooms: [
		{
			description:
				"A serene suite with garden views, traditional Rajasthani touches, and a deep soaking tub for ultimate relaxation.",
			details: "Garden View • 650 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/sanctuary-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/sanctuary-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/sanctuary-suite-03.jpg",
			],
			name: "Sanctuary Suite",
		},
		{
			description:
				"An expansive suite within the historic fort walls, featuring ornate archways, a private terrace, and courtyard views.",
			details: "Fort View • 800 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/fort-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/fort-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/fort-suite-03.jpg",
			],
			name: "Fort Suite",
		},
		{
			description:
				"A light-filled suite with uninterrupted views of the Aravalli hills, a private sit-out, and organic bath amenities.",
			details: "Hill View • 750 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/aravali-view-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/aravali-view-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/aravali-view-suite-03.jpg",
			],
			name: "Aravali View Suite",
		},
		{
			description:
				"A tower suite with 360-degree views, heritage interiors, and a dedicated wellness concierge.",
			details: "Panoramic View • 900 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/burj-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/burj-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/burj-suite-03.jpg",
			],
			name: "Burj Suite",
		},
		{
			description:
				"An elevated suite with a private hot tub on the terrace, perfect for stargazing after a day of exploration.",
			details: "Terrace • 850 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/terrace-hot-tube-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/terrace-hot-tube-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/terrace-hot-tube-suite-03.jpg",
			],
			name: "Terrace Hot Tube Suite",
		},
		{
			description:
				"A royal suite with separate living quarters, a private courtyard, and bespoke butler service fit for royalty.",
			details: "Royal • 1,200 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/rani-rajkumari-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/rani-rajkumari-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/rani-rajkumari-suite-03.jpg",
			],
			name: "Rani Rajkumari Suite",
		},
		{
			description:
				"A grand suite honoring the fort's heritage, with a private hot tub and dedicated wellness programming.",
			details: "Heritage • 1,000 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/thakur-bhagwati-singh-hot-tub-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/thakur-bhagwati-singh-hot-tub-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/thakur-bhagwati-singh-hot-tub-suite-03.jpg",
			],
			name: "Thakur Bhagwati Singh Hot Tub Suite",
		},
		{
			description:
				"The pinnacle of luxury with a private pool, multiple living spaces, and panoramic views of the fort and hills.",
			details: "Private Pool • 1,800 sqft",
			images: [
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/raja-man-singh-pool-suite-01.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/raja-man-singh-pool-suite-02.jpg",
				"/assets/ranthambore/lodges/six-senses-fort-barwara/rooms/raja-man-singh-pool-suite-03.jpg",
			],
			name: "Raja Man Singh Pool Suite",
		},
	],
	testimonial: {
		attribution: "Condé Nast Traveler",
		quote:
			"Six Senses Fort Barwara is a masterclass in adaptive reuse, transforming a 700-year-old fortress into one of India's most extraordinary wellness destinations.",
	},
	cta: {
		buttonLabel: "Book Your Stay",
		description:
			"Experience the perfect union of history, wellness, and sustainable luxury at Six Senses Fort Barwara.",
		title: "Ready to Experience Six Senses Fort Barwara?",
	},
} satisfies LodgePageData;

export const Route = createFileRoute(
	"/destinations/ranthambore/lodges/six-senses-fort-barwara"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <LodgePage lodge={sixSensesFortBarwara} />;
}
