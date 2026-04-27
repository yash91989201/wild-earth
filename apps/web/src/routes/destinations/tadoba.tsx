import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations/tadoba")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/destinations/tadoba"!</div>;
}
