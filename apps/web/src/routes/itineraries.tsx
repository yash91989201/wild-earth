import { createFileRoute } from "@tanstack/react-router";
import ItinerariesHero from "@/components/itineraries/itineraries-hero";
import ItinerariesList from "@/components/itineraries/itineraries-list";

export const Route = createFileRoute("/itineraries")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-[#f5f1ed]">
			<ItinerariesHero />
			<ItinerariesList />
		</main>
	);
}
