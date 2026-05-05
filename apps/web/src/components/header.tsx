import {
	IconBrandWhatsapp,
	IconMapPin,
	IconMenu,
	IconTent,
	IconX,
} from "@tabler/icons-react";
import { Link, linkOptions, useNavigate, useRouterState } from "@tanstack/react-router";
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

const destinationParks = linkOptions([
	{ label: "Ranthambore", to: "/destinations/ranthambore" },
	{ label: "Jim Corbett", to: "/destinations/corbett" },
	{ label: "Kaziranga", to: "/destinations/kaziranga" },
	{ label: "Tadoba", to: "/destinations/tadoba" },
	{ label: "Kanha", to: "/destinations/kanha" },
	{ label: "Bandhavgarh", to: "/destinations/bandhavgarh" },
]);

const navLinks = linkOptions([
	{ label: "Itineraries", to: "/itineraries" },
	{ label: "Lodges", to: "/lodges" },
	{ label: "Photography", to: "/photography" },
	{ label: "Impact", to: "/conservation" },
]);

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

function NavLink({
	children,
	isActive,
	isTransparent,
	to,
}: {
	children: React.ReactNode;
	isActive?: boolean;
	isTransparent: boolean;
	to: string;
}) {
	return (
		<Link
			className={cn(
				"font-medium text-sm transition-colors hover:text-accent",
				isTransparent ? "text-white/90" : "text-foreground",
				isActive && "text-accent"
			)}
			to={to}
		>
			{children}
		</Link>
	);
}

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouterState();
	const navigate = useNavigate();
	const pathname = router.location.pathname;
	const isTransparent = !(scrolled || menuOpen);

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

	return (
		<>
			<nav
				className={cn(
					"fixed top-0 right-0 left-0 z-40 border-b transition-all duration-300",
					isTransparent
						? "border-transparent bg-transparent backdrop-blur-none"
						: "border-border bg-background/92 backdrop-blur-xl"
				)}
			>
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
					<Link className="flex items-center gap-2" to="/">
						<IconTent
							className={cn(
								"text-3xl transition-colors",
								isTransparent ? "text-accent" : "text-primary"
							)}
							strokeWidth={1.5}
						/>
						<span
							className={cn(
								"font-bold font-serif text-2xl tracking-tight transition-colors",
								isTransparent ? "text-white" : "text-primary"
							)}
						>
							WildEarth
						</span>
					</Link>

					<div className="hidden items-center gap-x-8 lg:flex">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
								<NavigationMenuTrigger
									className={cn(
										"font-medium text-sm transition-colors hover:text-accent",
										isTransparent
											? "text-white/90 data-open:text-white data-popup-open:text-white"
											: "text-foreground"
									)}
									onClick={() => navigate({ to: "/destinations" })}
								>
									Destinations
								</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="grid w-[400px] gap-3 p-4">
											<div className="mb-2 px-3">
												<p className="font-bold font-serif text-primary text-lg">
													National Parks
												</p>
												<p className="text-muted-foreground text-sm">
													Explore India's finest wildlife reserves
												</p>
											</div>
											{destinationParks.map((park) => (
													<NavigationMenuLink
														className={cn(
															"flex items-center gap-2",
															pathname === park.to && "text-accent font-semibold"
														)}
														key={park.to}
														render={<Link to={park.to} />}
													>
														<IconMapPin className="h-4 w-4 text-accent" />
														<span>{park.label}</span>
													</NavigationMenuLink>
												))}
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						{navLinks.map((link) => (
							<NavLink
								isActive={pathname === link.to}
								isTransparent={isTransparent}
								key={link.to}
								to={link.to}
							>
								{link.label}
							</NavLink>
						))}
					</div>

					<div className="flex items-center gap-4">
						<a
							className={cn(
								"hidden items-center gap-2 rounded-full border px-4 py-2 font-semibold text-sm transition-all sm:flex",
								isTransparent
									? "border-white/20 bg-white/10 text-white hover:bg-white/20"
									: "border-primary/10 bg-primary/5 text-primary hover:bg-primary/10"
							)}
							href="https://wa.me/919876543210"
							rel="noopener noreferrer"
							target="_blank"
						>
							<IconBrandWhatsapp className="h-5 w-5" stroke={2} />
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
							className="relative h-auto p-2 lg:hidden"
							onClick={() => setMenuOpen((v) => !v)}
							variant="ghost"
						>
							{menuOpen ? (
								<IconX className="h-6 w-6 text-white" />
							) : (
								<IconMenu
									className={cn(
										"h-6 w-6 transition-colors",
										isTransparent ? "text-white" : "text-foreground"
									)}
								/>
							)}
						</Button>
					</div>
				</div>
			</nav>

			<AnimatePresence>
				{menuOpen && (
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="fixed inset-0 z-50 bg-background"
						exit={{ opacity: 0, y: -20 }}
						initial={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, ease: easeOutExpo }}
					>
						<div className="flex h-full flex-col">
							{/* Header */}
							<div className="flex items-center justify-between px-6 py-5">
								<Link
									className="flex items-center gap-2"
									onClick={() => setMenuOpen(false)}
									to="/"
								>
									<IconTent
										className="text-3xl text-primary"
										strokeWidth={1.5}
									/>
									<span className="font-bold font-serif text-2xl tracking-tight text-primary">
										WildEarth
									</span>
								</Link>
								<Button
									aria-label="Close menu"
									className="h-auto p-2 text-foreground hover:bg-muted"
									onClick={() => setMenuOpen(false)}
									variant="ghost"
								>
									<IconX className="h-6 w-6" />
								</Button>
							</div>

							{/* Scrollable Content */}
							<div className="flex-1 overflow-y-auto px-6 pb-8">
								<div className="mx-auto max-w-md">
									{/* Destinations Section */}
									<motion.div
										animate={{ opacity: 1, y: 0 }}
										initial={{ opacity: 0, y: 20 }}
										transition={{
											delay: 0.1,
											duration: 0.4,
											ease: easeOutExpo,
										}}
									>
										<p className="mb-4 font-bold text-muted-foreground text-xs uppercase tracking-[0.2em]">
											Destinations
										</p>
										<div className="space-y-2">
											{destinationParks.map((park, i) => (
												<motion.div
													animate={{ opacity: 1, x: 0 }}
													initial={{ opacity: 0, x: -20 }}
													key={park.to}
													transition={{
														delay: 0.15 + i * 0.05,
														duration: 0.3,
														ease: easeOutExpo,
													}}
												>
													<Link
														className={cn(
															"flex items-center gap-3 rounded-2xl p-4 transition-colors",
															pathname === park.to
																? "bg-accent text-white"
																: "hover:bg-muted"
														)}
														onClick={() => setMenuOpen(false)}
														to={park.to}
													>
														<IconMapPin className="h-5 w-5 text-accent" />
														<span className="font-bold font-serif text-lg text-foreground">
															{park.label}
														</span>
													</Link>
												</motion.div>
											))}
										</div>
									</motion.div>

									<div className="my-6 h-px bg-border" />

									{/* Main Nav Section */}
									<motion.div
										animate={{ opacity: 1, y: 0 }}
										initial={{ opacity: 0, y: 20 }}
										transition={{
											delay: 0.3,
											duration: 0.4,
											ease: easeOutExpo,
										}}
									>
										<p className="mb-4 font-bold text-muted-foreground text-xs uppercase tracking-[0.2em]">
											Experience
										</p>
										<div className="space-y-2">
											{navLinks.map((link, i) => (
												<motion.div
													animate={{ opacity: 1, x: 0 }}
													initial={{ opacity: 0, x: -20 }}
													key={link.to}
													transition={{
														delay: 0.35 + i * 0.05,
														duration: 0.3,
														ease: easeOutExpo,
													}}
												>
													<Link
														className={cn(
															"block rounded-2xl p-4 font-bold font-serif text-2xl transition-colors",
															pathname === link.to
																? "bg-accent text-white"
																: "text-foreground hover:bg-muted"
														)}
														onClick={() => setMenuOpen(false)}
														to={link.to}
													>
														{link.label}
													</Link>
												</motion.div>
											))}
										</div>
									</motion.div>

									{/* CTA */}
									<motion.div
										animate={{ opacity: 1, y: 0 }}
										className="mt-8"
										initial={{ opacity: 0, y: 20 }}
										transition={{
											delay: 0.5,
											duration: 0.4,
											ease: easeOutExpo,
										}}
									>
										<Link
											className={cn(
												buttonVariants({ size: "lg" }),
												"w-full rounded-full py-6 font-bold text-base uppercase tracking-wide"
											)}
											hash="booking-form"
											onClick={() => setMenuOpen(false)}
											to="/"
										>
											Plan My Safari
										</Link>
									</motion.div>

									{/* Contact */}
									<motion.div
										animate={{ opacity: 1 }}
										className="mt-6 flex justify-center"
										initial={{ opacity: 0 }}
										transition={{ delay: 0.6, duration: 0.4 }}
									>
										<a
											className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-sm text-foreground transition-colors hover:bg-muted"
											href="https://wa.me/919876543210"
											rel="noopener noreferrer"
											target="_blank"
										>
											<IconBrandWhatsapp
												className="h-5 w-5 text-green-600"
												stroke={2}
											/>
											+91 98765 43210
										</a>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
