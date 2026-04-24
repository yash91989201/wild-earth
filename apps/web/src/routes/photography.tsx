import { createFileRoute } from "@tanstack/react-router";
import PhotoEdge from "@/components/photography/photo-edge";
import PhotoPackages from "@/components/photography/photo-packages";
import PhotographyHero from "@/components/photography/photography-hero";

export const Route = createFileRoute("/photography")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-white">
			<PhotographyHero />
			<PhotoEdge />
			<PhotoPackages />
		</main>
	);
}
