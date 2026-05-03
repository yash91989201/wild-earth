import { createFileRoute } from "@tanstack/react-router";
import DestinationLodgesSection from "@/components/destinations/destination-lodges-section";
import LodgesHero from "@/components/lodges/lodges-hero";

export const Route = createFileRoute("/lodges")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="grow bg-background">
			<LodgesHero />
			<DestinationLodgesSection />
		</main>
	);
}
