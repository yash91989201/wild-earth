import { IconCalendar, IconRoute, IconTree } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import LodgesPage, {
	type LodgesPageData,
} from "@/components/destinations/lodges-page";

export const Route = createFileRoute("/destinations/ranthambore/lodges/")({
	component: RouteComponent,
});

const lodges = [
	{
		name: "Aman-i-Khas",
		href: "/destinations/ranthambore/lodges/aman-i-khas",
		image: "/assets/ranthambore/lodges/aman-i-khas/image-0.jpg",
		setting: "Seasonal tented camp near the reserve edge",
		mood: "quiet, spare, deeply private",
		bestFor: "Couples and repeat safari travelers",
		logistics: "Best when you want a slow camp rhythm around focused drives.",
	},
	{
		name: "Oberoi Vanya Vilas",
		href: "/destinations/ranthambore/lodges/oberoi-vanya-vilas",
		image: "/assets/ranthambore/lodges/oberoi-vanya-vilas/image-0.jpg",
		setting: "Gardened luxury camp with polished service",
		mood: "formal, seamless, restorative",
		bestFor: "First-time India safari guests",
		logistics:
			"Strong fit when service consistency matters as much as park access.",
	},
	{
		name: "Sujah Sher Bagh",
		href: "/destinations/ranthambore/lodges/sujah-sher-bagh",
		image: "/assets/ranthambore/lodges/sujah-sher-bagh/image-0.jpg",
		setting: "Classic tented camp with field-led hospitality",
		mood: "romantic, earthy, conservation-aware",
		bestFor: "Travelers who like campfire culture",
		logistics: "Good for guests who want naturalist depth between game drives.",
	},
	{
		name: "Six Senses Fort Barwara",
		href: "/destinations/ranthambore/lodges/six-senses-fort-barwara",
		image: "/assets/ranthambore/lodges/six-senses-fort-barwara/image-0.jpg",
		setting: "Restored fort retreat within reach of Ranthambore",
		mood: "wellness-led, architectural, unhurried",
		bestFor: "Longer stays with spa time",
		logistics:
			"Works best when safari is one part of a broader Rajasthan stay.",
	},
	{
		name: "Sawai Shivir Ranthambore",
		href: "/destinations/ranthambore/lodges/sawai-shivir-ranthambore",
		image: "/assets/ranthambore/lodges/sawai-shivir-ranthambore/image-0.jpg",
		setting: "Intimate camp with a flexible safari pace",
		mood: "personal, warm, low-key",
		bestFor: "Small groups and private jeep trips",
		logistics:
			"Useful for travelers who value direct coordination and calm evenings.",
	},
	{
		name: "Taj Sawai Vilas",
		href: "/destinations/ranthambore/lodges/taj-sawai-vilas",
		image: "/assets/ranthambore/lodges/taj-sawai-vilas/image-0.jpg",
		setting: "Spacious resort base close to the safari circuit",
		mood: "reliable, polished, family-friendly",
		bestFor: "Families and multi-generation trips",
		logistics: "Good choice when room comfort and easy meals matter daily.",
	},
	{
		name: "Nahargarh Resort",
		href: "/destinations/ranthambore/lodges/nahargarh-resort",
		image: "/assets/ranthambore/lodges/nahargarh-resort/image-0.jpg",
		setting: "Palace-inspired resort in a broad estate",
		mood: "grand, social, scenic",
		bestFor: "Celebrations and larger groups",
		logistics:
			"Best when shared spaces, pools, and generous grounds are priorities.",
	},
	{
		name: "Aamaghati Resort",
		href: "/destinations/ranthambore/lodges/aamaghati-resort",
		image: "/assets/ranthambore/lodges/aamaghati-resort/image-0.jpg",
		setting: "Rajasthani-inspired lodge with contemporary rooms",
		mood: "crafted, comfortable, rooted",
		bestFor: "Design-aware travelers",
		logistics:
			"A balanced option for guests who want character without formality.",
	},
	{
		name: "Tigress Resort",
		href: "/destinations/ranthambore/lodges/tigress-resort",
		image: "/assets/ranthambore/lodges/tigress-resort/image-0.jpg",
		setting: "Boutique resort with garden-led privacy",
		mood: "easy, leafy, relaxed",
		bestFor: "Couples and short stays",
		logistics:
			"Good when you want a soft landing between intense safari mornings.",
	},
	{
		name: "Kipling Lodge",
		href: "/destinations/ranthambore/lodges/kipling-lodge",
		image: "/assets/ranthambore/lodges/kipling-lodge/image-0.jpg",
		setting: "Characterful lodge with old safari references",
		mood: "nostalgic, intimate, informal",
		bestFor: "Travelers who prefer personality over scale",
		logistics:
			"Best when you want hosted warmth rather than resort choreography.",
	},
	{
		name: "Juna Mahal",
		href: "/destinations/ranthambore/lodges/juna-mahal",
		image: "/assets/ranthambore/lodges/juna-mahal/image.png",
		setting: "Heritage-style retreat with villa-led stays",
		mood: "regal, spacious, private",
		bestFor: "Villa seekers and families",
		logistics:
			"Works well when space, privacy, and resort facilities drive the brief.",
	},
] as const;

const planningNotes = [
	{
		icon: IconRoute,
		title: "Gate allocation changes the day",
		description:
			"Ranthambore safaris are shaped by assigned zones, vehicle permits, and pickup timing. We shortlist lodges with those operational realities in view.",
	},
	{
		icon: IconCalendar,
		title: "Two nights is rarely enough",
		description:
			"A better lodge decision protects rest between early starts. For serious tiger tracking, plan enough drives to absorb weather, zone rotation, and luck.",
	},
	{
		icon: IconTree,
		title: "The best stay is not always nearest",
		description:
			"Some travelers need gate proximity. Others need privacy, guiding depth, wellness, or family space. The right answer depends on the whole trip shape.",
	},
] as const;

const stayStyles = [
	{
		label: "Tented and atmospheric",
		description:
			"Choose this when the camp is part of the safari memory, with canvas, lantern light, naturalist conversation, and quiet meals after drives.",
		matches: "Aman-i-Khas, Sujah Sher Bagh, Oberoi Vanya Vilas",
	},
	{
		label: "Family and comfort first",
		description:
			"Choose this when room size, food flexibility, pool time, and a smooth pace matter for children or older travelers.",
		matches: "Taj Sawai Vilas, Juna Mahal, Nahargarh Resort",
	},
	{
		label: "Wellness and Rajasthan circuit",
		description:
			"Choose this when Ranthambore sits inside a longer Jaipur, Bundi, or fort-country route, and the stay should slow the trip down.",
		matches: "Six Senses Fort Barwara, Aamaghati Resort",
	},
] as const;

const ranthamboreLodgesPage = {
	hero: {
		eyebrow: "Ranthambore lodge guide",
		title: "Stay close to the rhythm of the tiger forest.",
		description:
			"Ranthambore has grand palace resorts, tented camps, quiet garden retreats, and wellness-led forts. The best lodge is the one that fits your safari permits, travel pace, and appetite for wildness.",
		image: "/assets/ranthambore/02.jpg",
		imageAlt: "Ranthambore forest and fort landscape",
		primaryCta: "Ask for a lodge shortlist",
		secondaryCta: "View all lodges",
		facts: [
			"11 lodge options reviewed by stay style",
			"Safari logistics considered before comfort cues",
			"Built for direct inquiry, not package browsing",
		],
	},
	featured: {
		eyebrow: "Field shortlist",
		title: "Three stays that define the range.",
		description:
			"Use these as anchors, not rankings. Ranthambore rewards careful matching: a lodge can be exceptional and still wrong for your safari pace, family needs, or wider Rajasthan route.",
	},
	allLodges: {
		eyebrow: "Complete Ranthambore roster",
		title: "Every listed lodge, framed by use case.",
		description:
			"This is not a generic hotel grid. Each stay earns its place for a different traveler profile, from high-touch tented camps to larger resorts that handle families with less friction.",
	},
	stayStyles: {
		eyebrow: "Choose by rhythm",
		title: "The right lodge starts with how you want the days to feel.",
		items: stayStyles,
	},
	planning: {
		eyebrow: "Safari planning notes",
		title: "Your lodge choice should protect the safari, not distract from it.",
		description:
			"We filter Ranthambore stays through field logistics first: permits, pickup rhythm, meal timing, guide quality, and how well the property recovers you between drives.",
		notes: planningNotes,
	},
	cta: {
		title:
			"Tell us who is traveling. We will send the right three lodge options.",
		description:
			"Share dates, group size, comfort level, and whether tiger tracking, family ease, photography, or downtime matters most. We will respond with a sharper shortlist than any public filter can produce.",
		buttonLabel: "Plan my stay",
	},
	lodges,
} satisfies LodgesPageData;

function RouteComponent() {
	return <LodgesPage data={ranthamboreLodgesPage} />;
}
