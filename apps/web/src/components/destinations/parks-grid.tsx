import { motion } from "motion/react";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import ParkCard, { type Park } from "./park-card";

const parks: Park[] = [
	{
		name: "Ranthambore National Park",
		location: "Rajasthan, India",
		description:
			"Famous for its thriving Bengal tiger population, Ranthambore offers a dramatic landscape of ancient ruins, dry deciduous forests, and serene lakes. It's one of the best places in the world to spot tigers in their natural habitat.",
		bestTime: "Oct - Jun",
		keySpecies: "Bengal Tiger, Leopard",
		image:
			"https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1964&auto=format&fit=crop",
		link: "/destinations/ranthambore",
	},
	{
		name: "Jim Corbett National Park",
		location: "Uttarakhand, India",
		description:
			"India's oldest national park, nestled in the Himalayan foothills. A breathtaking landscape of dense Sal forests and the Ramganga river, home to majestic Asian elephants and elusive tigers.",
		bestTime: "Nov - Jun",
		keySpecies: "Asian Elephant, Tiger",
		image:
			"https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2070&auto=format&fit=crop",
		link: "/destinations/corbett",
	},
	{
		name: "Kaziranga National Park",
		location: "Assam, India",
		description:
			"A UNESCO World Heritage Site, Kaziranga is a vast expanse of tall elephant grass and marshland. It is renowned as the last major stronghold of the great one-horned rhinoceros.",
		bestTime: "Nov - Apr",
		keySpecies: "One-horned Rhino",
		image:
			"https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2072&auto=format&fit=crop",
		link: "/destinations/kaziranga",
	},
	{
		name: "Tadoba Andhari Reserve",
		location: "Maharashtra, India",
		description:
			"Known as the 'Jewel of Vidarbha', Tadoba is Maharashtra's oldest and largest national park. It offers exceptional tiger sightings amidst teak forests and bamboo thickets.",
		bestTime: "Oct - Jun",
		keySpecies: "Tiger, Sloth Bear",
		image:
			"https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2070&auto=format&fit=crop",
		link: "/destinations/tadoba",
	},
	{
		name: "Bandhavgarh National Park",
		location: "Madhya Pradesh, India",
		description:
			"Globally renowned for having the highest known density of Royal Bengal Tigers, set against the dramatic backdrop of ancient forts and deep valleys.",
		bestTime: "Oct - Jun",
		keySpecies: "Bengal Tiger",
		image:
			"https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2070&auto=format&fit=crop",
		link: "/destinations/bandhavgarh",
	},
	{
		name: "Kanha National Park",
		location: "Madhya Pradesh, India",
		description:
			"The vast expanse of lush sal forests and grassy meadows that inspired 'The Jungle Book'. A premier tiger country and the only home to the hard-ground Barasingha.",
		bestTime: "Oct - Jun",
		keySpecies: "Tiger, Barasingha",
		image:
			"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
		link: "/destinations/kanha",
	},
];

export default function ParksGrid() {
	return (
		<section className="bg-white px-6 pb-24">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="grid grid-cols-1 gap-12 md:grid-cols-2"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{parks.map((park) => (
						<ParkCard key={park.name} park={park} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
