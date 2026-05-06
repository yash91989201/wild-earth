import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations/ranthambore/lodges/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/destinations/ranthambore/lodges/"!</div>;
}
