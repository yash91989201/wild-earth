import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations/corbett")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/destinations/corbett"!</div>;
}
