import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kaziranga")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex min-h-[60vh] items-center justify-center">
			<div className="text-center">
				<h1 className="mb-4 font-bold font-serif text-4xl text-[#1f4d2b]">
					Coming Soon
				</h1>
				<p className="text-gray-600">This page is under construction.</p>
			</div>
		</div>
	);
}
