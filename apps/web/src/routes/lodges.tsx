import { createFileRoute } from "@tanstack/react-router";
import LodgesGrid from "@/components/lodges/lodges-grid";
import LodgesHero from "@/components/lodges/lodges-hero";

export const Route = createFileRoute("/lodges")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-white">
			<LodgesHero />
			<LodgesGrid />
		</main>
	);
}
