import {
	IconBrandWhatsapp,
	IconCamera,
	IconChevronRight,
	IconLeaf,
	IconMapPin,
	IconMenu,
	IconRoute,
	IconTent,
	IconX,
} from "@tabler/icons-react";
import {
	Link,
	linkOptions,
	useNavigate,
	useRouterState,
} from "@tanstack/react-router";
import { Button, buttonVariants } from "@wild-earth/ui/components/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@wild-earth/ui/components/navigation-menu";
import { Separator } from "@wild-earth/ui/components/separator";
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
	{ label: "Photography", to: "/photography" },
	{ label: "Impact", to: "/conservation" },
]);

const lodgesByDestination = [
	{
		destination: "Ranthambore",
		to: "/destinations/ranthambore",
		lodges: [
			{
				label: "Juna Mahal",
				to: "/destinations/ranthambore/lodges/juna-mahal",
			},
		],
	},
	{
		destination: "Jim Corbett",
		to: "/destinations/corbett",
		lodges: [
			{ label: "Juna Mahal", to: "/destinations/corbett/lodges/juna-mahal" },
		],
	},
	{
		destination: "Kaziranga",
		to: "/destinations/kaziranga",
		lodges: [
			{ label: "Juna Mahal", to: "/destinations/kaziranga/lodges/juna-mahal" },
		],
	},
	{
		destination: "Tadoba",
		to: "/destinations/tadoba",
		lodges: [
			{ label: "Juna Mahal", to: "/destinations/tadoba/lodges/juna-mahal" },
		],
	},
	{
		destination: "Kanha",
		to: "/destinations/kanha",
		lodges: [
			{ label: "Juna Mahal", to: "/destinations/kanha/lodges/juna-mahal" },
		],
	},
	{
		destination: "Bandhavgarh",
		to: "/destinations/bandhavgarh",
		lodges: [
			{
				label: "Juna Mahal",
				to: "/destinations/bandhavgarh/lodges/juna-mahal",
			},
		],
	},
];

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
	const [hoveredDestination, setHoveredDestination] = useState(
		lodgesByDestination[0]?.destination ?? ""
	);
	const [expandedMobileDestination, setExpandedMobileDestination] =
		useState("");
	const router = useRouterState();
	const navigate = useNavigate();
	const pathname = router.location.pathname;
	const isTransparent = !(scrolled || menuOpen);
	const hoveredLodgeDestination =
		lodgesByDestination.find(
			(park) => park.destination === hoveredDestination
		) ?? lodgesByDestination[0];

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
										<div className="grid w-[399px] gap-3 p-4">
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
								<NavigationMenuItem>
									<NavigationMenuTrigger
										className={cn(
											"font-medium text-sm transition-colors hover:text-accent",
											isTransparent
												? "text-white/90 data-open:text-white data-popup-open:text-white"
												: "text-foreground"
										)}
										onClick={() => navigate({ to: "/lodges" })}
									>
										Lodges
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="w-[480px] gap-3 p-4">
											<div className="mb-2 px-3">
												<p className="font-bold font-serif text-primary text-lg">
													Safari Lodges
												</p>
												<p className="text-muted-foreground text-sm">
													Hand-picked stays at India's finest wildlife reserves
												</p>
											</div>
											<div className="grid grid-cols-2 gap-3">
												<div className="space-y-1">
													{lodgesByDestination.map((park) => (
														<NavigationMenuLink
															className={cn(
																"flex items-center gap-2",
																hoveredDestination === park.destination
																	? "text-accent font-semibold"
																	: ""
															)}
															key={park.to}
															onMouseEnter={() =>
																setHoveredDestination(park.destination)
															}
															render={<Link to={park.to} />}
														>
															<IconMapPin className="h-4 w-4 text-accent" />
															<span>{park.destination}</span>
														</NavigationMenuLink>
													))}
												</div>
												<div className="space-y-1 border-border border-l pl-4">
													<p className="mb-2 px-3 font-bold font-serif text-primary text-sm">
														Lodges in {hoveredLodgeDestination.destination}
													</p>
													{hoveredLodgeDestination.lodges.map((lodge) => (
														<NavigationMenuLink
															className={cn(
																pathname === lodge.to &&
																	"text-accent font-semibold"
															)}
															key={lodge.to}
															render={<Link to={lodge.to} />}
														>
															{lodge.label}
														</NavigationMenuLink>
													))}
												</div>
											</div>
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
								<motion.div
									animate={{ opacity: 1, y: 0 }}
									className="mx-auto max-w-md"
									initial={{ opacity: 0, y: 20 }}
									transition={{
										delay: 0.1,
										duration: 0.4,
										ease: easeOutExpo,
									}}
								>
									{/* Destinations & Lodges — merged */}
									<p className="mb-3 mt-0 font-bold text-muted-foreground text-xs uppercase tracking-[0.2em]">
										Destinations
									</p>
									<div className="space-y-1">
										{lodgesByDestination.map((park) => {
											const isExpanded =
												expandedMobileDestination === park.destination;
											const isParkActive = pathname === park.to;
											return (
												<div key={park.to}>
													<div className="flex items-center justify-between py-3">
														<Link
															className={cn(
																"flex items-center gap-3 transition-colors",
																isParkActive || isExpanded
																	? "text-accent"
																	: "text-foreground hover:text-accent"
															)}
															onClick={() => setMenuOpen(false)}
															to={park.to}
														>
															<IconMapPin className="h-5 w-5 text-accent" />
															<span className="font-serif text-xl">
																{park.destination}
															</span>
														</Link>
														<Button
															className="h-auto p-2"
															onClick={() =>
																setExpandedMobileDestination((v) =>
																	v === park.destination ? "" : park.destination
																)
															}
															variant="ghost"
														>
															<IconChevronRight
																className={cn(
																	"h-5 w-5 transition-transform",
																	isExpanded && "rotate-90"
																)}
															/>
														</Button>
													</div>
													<AnimatePresence initial={false}>
														{isExpanded && (
															<motion.div
																animate={{ height: "auto", opacity: 1 }}
																className="ml-8 overflow-hidden"
																exit={{ height: 0, opacity: 0 }}
																initial={{ height: 0, opacity: 0 }}
																transition={{
																	duration: 0.3,
																	ease: easeOutExpo,
																}}
															>
																<Link
																	className="flex items-center gap-2 py-2 text-sm transition-colors hover:text-accent"
																	onClick={() => setMenuOpen(false)}
																	to={park.to}
																>
																	<IconMapPin className="h-4 w-4 text-accent" />
																	<span
																		className={cn(
																			pathname === park.to &&
																				"font-semibold text-accent",
																			"text-muted-foreground"
																		)}
																	>
																		Explore Park
																	</span>
																</Link>
																{park.lodges.map((lodge) => (
																	<Link
																		className={cn(
																			"flex items-center gap-2 py-2 text-sm transition-colors",
																			pathname === lodge.to
																				? "font-semibold text-accent"
																				: "text-muted-foreground hover:text-accent"
																		)}
																		key={lodge.to}
																		onClick={() => setMenuOpen(false)}
																		to={lodge.to}
																	>
																		<IconTent
																			className="h-4 w-4 text-accent"
																			strokeWidth={1.5}
																		/>
																		{lodge.label}
																	</Link>
																))}
															</motion.div>
														)}
													</AnimatePresence>
												</div>
											);
										})}
									</div>

									<Separator className="my-3" />

									{/* Experience Section */}
									<div className="space-y-1">
										<Link
											className={cn(
												"flex items-center gap-3 py-3 transition-colors",
												pathname === "/itineraries"
													? "text-accent"
													: "text-foreground hover:text-accent"
											)}
											onClick={() => setMenuOpen(false)}
											to="/itineraries"
										>
											<IconRoute className="h-5 w-5 text-accent" />
											<span className="font-serif text-xl">Itineraries</span>
										</Link>
										<Link
											className={cn(
												"flex items-center gap-3 py-3 transition-colors",
												pathname === "/photography"
													? "text-accent"
													: "text-foreground hover:text-accent"
											)}
											onClick={() => setMenuOpen(false)}
											to="/photography"
										>
											<IconCamera className="h-5 w-5 text-accent" />
											<span className="font-serif text-xl">Photography</span>
										</Link>
										<Link
											className={cn(
												"flex items-center gap-3 py-3 transition-colors",
												pathname === "/conservation"
													? "text-accent"
													: "text-foreground hover:text-accent"
											)}
											onClick={() => setMenuOpen(false)}
											to="/conservation"
										>
											<IconLeaf className="h-5 w-5 text-accent" />
											<span className="font-serif text-xl">Conservation</span>
										</Link>
									</div>

									{/* CTA Section */}
									<div className="mt-10">
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
										<a
											className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-sm text-foreground transition-colors hover:bg-muted"
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
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
