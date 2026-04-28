import { IconMapPin, IconMenu, IconTent, IconX } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "@wild-earth/ui/components/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@wild-earth/ui/components/navigation-menu";
import { cn } from "@wild-earth/ui/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const destinationParks = [
	{ name: "Ranthambore", to: "/destinations/ranthambore" },
	{ name: "Jim Corbett", to: "/destinations/corbett" },
	{ name: "Kaziranga", to: "/destinations/kaziranga" },
	{ name: "Tadoba", to: "/destinations/tadoba" },
	{ name: "Kanha", to: "/destinations/kanha" },
	{ name: "Bandhavgarh", to: "/destinations/bandhavgarh" },
];

const navLinks = [
	{ label: "Itineraries", to: "/itineraries" },
	{ label: "Lodges", to: "/lodges" },
	{ label: "Photography", to: "/photography" },
	{ label: "Impact", to: "/conservation" },
];

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

function WhatsAppIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
		</svg>
	);
}

function NavLink({
	children,
	isTransparent,
	to,
}: {
	children: React.ReactNode;
	isTransparent: boolean;
	to: string;
}) {
	return (
		<Link
			className={`font-medium text-sm transition-colors hover:text-accent ${isTransparent ? "text-white/90" : "text-foreground"}`}
			to={to}
		>
			{children}
		</Link>
	);
}

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	const isTransparent = !(scrolled || menuOpen);

	return (
		<>
			<nav
				className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 ${isTransparent ? "border-transparent bg-transparent backdrop-blur-none" : "border-border bg-white/92 backdrop-blur-xl"}`}
			>
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
					<Link className="flex items-center gap-2" to="/">
						<IconTent
							className={`text-3xl transition-colors ${isTransparent ? "text-accent" : "text-primary"}`}
							strokeWidth={1.5}
						/>
						<span
							className={`font-bold font-serif text-2xl tracking-tight transition-colors ${isTransparent ? "text-white" : "text-primary"}`}
						>
							WildEarth
						</span>
					</Link>

					<div className="hidden items-center gap-x-8 lg:flex">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={`font-medium text-sm transition-colors hover:text-accent ${isTransparent ? "text-white/90 data-open:text-white data-popup-open:text-white" : "text-foreground"}`}
									>
										Destinations
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="grid w-[400px] gap-3 p-4">
											<div className="mb-2 px-3">
												<p className="font-bold font-serif text-[#1f4d2b] text-lg">
													National Parks
												</p>
												<p className="text-gray-500 text-sm">
													Explore India's finest wildlife reserves
												</p>
											</div>
											{destinationParks.map((park) => (
												<NavigationMenuLink
													className="flex items-center gap-2"
													key={park.to}
													onClick={() => {}}
												>
													<Link
														className="flex items-center gap-2"
														to={park.to}
													>
														<IconMapPin className="h-4 w-4 text-[#d4af6a]" />
														<span>{park.name}</span>
													</Link>
												</NavigationMenuLink>
											))}
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						{navLinks.map((link) => (
							<NavLink isTransparent={isTransparent} key={link.to} to={link.to}>
								{link.label}
							</NavLink>
						))}
					</div>

					<div className="flex items-center gap-4">
						<a
							className={`hidden items-center gap-2 rounded-full border px-4 py-2 font-semibold text-sm transition-all sm:flex ${isTransparent ? "border-white/20 bg-white/10 text-white hover:bg-white/20" : "border-primary/10 bg-primary/5 text-primary hover:bg-primary/10"}`}
							href="https://wa.me/919876543210"
							rel="noopener noreferrer"
							target="_blank"
						>
							<WhatsAppIcon className="h-5 w-5" />
							+91 98765 43210
						</a>
						<Link
							className="hidden rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-lg sm:block"
							hash="booking-form"
							to="/"
						>
							Plan My Safari
						</Link>
						<Button
							aria-label="Toggle menu"
							className="relative z-[200] h-auto p-2 lg:hidden"
							onClick={() => setMenuOpen((v) => !v)}
							variant="ghost"
						>
							{menuOpen ? (
								<IconX className="h-6 w-6 text-white" />
							) : (
								<IconMenu
									className={`h-6 w-6 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
								/>
							)}
						</Button>
					</div>
				</div>
			</nav>

			<AnimatePresence>
				{menuOpen && (
					<motion.div
						animate={{ x: 0 }}
						className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-primary"
						exit={{ x: "100%" }}
						initial={{ x: "100%" }}
						transition={{ duration: 0.5, ease: easeOutExpo }}
					>
						<Button
							aria-label="Close menu"
							className="absolute top-6 right-6 h-auto p-2 text-white hover:bg-white/10"
							onClick={() => setMenuOpen(false)}
							variant="ghost"
						>
							<IconX className="h-8 w-8" />
						</Button>
						<div className="flex flex-col items-center gap-4">
							<p className="font-bold font-serif text-white/50 text-xl">
								Destinations
							</p>
							{destinationParks.map((park, i) => (
								<motion.div
									animate={{ opacity: 1, x: 0 }}
									initial={{ opacity: 0, x: 40 }}
									key={park.to}
									transition={{
										delay: 0.1 + i * 0.1,
										duration: 0.4,
										ease: easeOutExpo,
									}}
								>
									<Link
										className="font-bold font-serif text-2xl text-white"
										onClick={() => setMenuOpen(false)}
										to={park.to}
									>
										{park.name}
									</Link>
								</motion.div>
							))}
						</div>
						<div className="mt-4 h-px w-32 bg-white/20" />
						{navLinks.map((link, i) => (
							<motion.div
								animate={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 40 }}
								key={link.to}
								transition={{
									delay: 0.1 + (destinationParks.length + 1) * 0.1 + i * 0.1,
									duration: 0.4,
									ease: easeOutExpo,
								}}
							>
								<Link
									className="font-bold font-serif text-3xl text-white"
									onClick={() => setMenuOpen(false)}
									to={link.to}
								>
									{link.label}
								</Link>
							</motion.div>
						))}
						<motion.div
							animate={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 40 }}
							transition={{
								delay:
									0.1 + (destinationParks.length + 1 + navLinks.length) * 0.1,
								duration: 0.4,
								ease: easeOutExpo,
							}}
						>
							<Link
								className={cn(
									buttonVariants({ variant: "secondary" }),
									"w-full"
								)}
								hash="booking-form"
								onClick={() => setMenuOpen(false)}
								to="/"
							>
								Plan My Safari
							</Link>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
