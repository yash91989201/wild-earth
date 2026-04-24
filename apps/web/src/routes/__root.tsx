import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@wild-earth/ui/components/sonner";
import BackToTop from "@/components/home/back-to-top";
import Footer from "@/components/home/footer";
import WhatsAppFloat from "@/components/home/whatsapp-float";
import type { orpc } from "@/utils/orpc";
import Header from "../components/header";

import appCss from "../index.css?url";

export interface RouterAppContext {
	orpc: typeof orpc;
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "WildEarth Safaris | Premium Authentic Wildlife Experiences",
			},
			{
				name: "description",
				content:
					"Direct access to India's premier national parks. Expert-led safaris managed entirely by our verified on-ground teams.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: RootDocument,
});

function RootDocument() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<Header />
				<Outlet />
				<Footer />
				<WhatsAppFloat />
				<BackToTop />
				<Toaster richColors />
				<Scripts />
			</body>
		</html>
	);
}
