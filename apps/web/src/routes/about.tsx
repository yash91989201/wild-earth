import { createFileRoute } from "@tanstack/react-router";
import AboutHero from "@/components/about/about-hero";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex-grow bg-background">
			<AboutHero />
			<section className="flex min-h-[40vh] items-center justify-center px-6 py-24">
				<div className="text-center">
					<h2 className="mb-4 font-bold font-serif text-4xl text-primary">
						Coming Soon
					</h2>
					<p className="text-muted-foreground">
						This page is under construction.
					</p>
				</div>
			</section>
		</main>
	);
}
