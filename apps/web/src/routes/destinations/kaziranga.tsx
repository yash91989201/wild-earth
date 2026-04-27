import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations/kaziranga")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/destinations/kaziranga"!</div>;
}
