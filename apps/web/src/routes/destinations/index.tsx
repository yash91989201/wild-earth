import { createFileRoute } from "@tanstack/react-router";
import ParksGrid from "@/components/destinations/parks-grid";
import ParksHero from "@/components/destinations/parks-hero";

export const Route = createFileRoute("/destinations/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-background">
			<ParksHero />
			<ParksGrid />
		</main>
	);
}
