import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@wild-earth/ui/components/sonner";
import { TooltipProvider } from "@wild-earth/ui/components/tooltip";
import Footer from "@/components/footer";
import BackToTop from "@/components/home/back-to-top";
import WhatsAppFloat from "@/components/home/whatsapp-float";
import appCss from "@/styles/index.css?url";
import type { orpc } from "@/utils/orpc";
import Header from "../components/header";

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
	shellComponent: ShellComponent,
	component: RootDocument,
});

function ShellComponent({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}

function RootDocument() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<WhatsAppFloat />
			<BackToTop />
			<Toaster richColors />
			<Scripts />
		</>
	);
}
