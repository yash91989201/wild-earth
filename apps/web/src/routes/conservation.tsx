import { createFileRoute } from "@tanstack/react-router";
import ConservationHero from "@/components/conservation/conservation-hero";
import ConservationPillars from "@/components/conservation/conservation-pillars";

export const Route = createFileRoute("/conservation")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-background">
			<ConservationHero />
			<ConservationPillars />
		</main>
	);
}
