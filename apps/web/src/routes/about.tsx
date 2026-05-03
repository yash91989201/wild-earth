import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex min-h-[60vh] items-center justify-center">
			<div className="text-center">
			<h1 className="mb-4 font-bold font-serif text-4xl text-primary">
				Coming Soon
			</h1>
			<p className="text-muted-foreground">This page is under construction.</p>
			</div>
		</div>
	);
}
