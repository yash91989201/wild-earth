import { IconMail, IconMapPin, IconPhone, IconTent } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

function InstagramIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function FacebookIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	);
}

function YoutubeIcon({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden="true"
			className={className}
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
		</svg>
	);
}

const exploreLinks = [
	{ label: "Destinations", to: "/destinations" },
	{ label: "Signature Itineraries", to: "/itineraries" },
	{ label: "Luxury Lodges", to: "/lodges" },
	{ label: "Photography Tours", to: "/photography" },
];

const trustLinks = [
	{ label: "Conservation & Impact", to: "/conservation" },
	{ label: "Our Expertise", to: "/about" },
	{ label: "Ground Teams", to: "#" },
	{ label: "Traveler FAQs", to: "#" },
];

export default function Footer() {
	return (
		<footer className="bg-gray-950 px-6 pt-24 pb-12 text-white">
			<div className="mx-auto max-w-7xl">
				<div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-4">
					<div className="md:col-span-1">
						<Link className="mb-8 flex items-center gap-2" to="/">
							<IconTent className="h-8 w-8 text-accent" strokeWidth={1.5} />
							<span className="font-bold font-serif text-3xl tracking-tight">
								WildEarth
							</span>
						</Link>
						<p className="mb-8 text-sm text-white/50 leading-relaxed">
							Empowering travelers with direct access to India&apos;s wild. Our
							mission is built on transparency, conservation, and world-class
							ground operations.
						</p>
						<div className="flex gap-4">
							<a
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:bg-accent hover:text-primary"
								href="https://instagram.com"
							>
								<InstagramIcon className="h-4 w-4" />
							</a>
							<a
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:bg-accent hover:text-primary"
								href="https://facebook.com"
							>
								<FacebookIcon className="h-4 w-4" />
							</a>
							<a
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:bg-accent hover:text-primary"
								href="https://youtube.com"
							>
								<YoutubeIcon className="h-4 w-4" />
							</a>
						</div>
					</div>

					<div>
						<h4 className="mb-8 font-bold text-accent text-xs uppercase tracking-widest">
							Explore
						</h4>
						<ul className="space-y-4 text-sm text-white/60">
							{exploreLinks.map((link) => (
								<li key={link.label}>
									<Link
										className="transition-colors hover:text-white"
										to={link.to}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="mb-8 font-bold text-accent text-xs uppercase tracking-widest">
							Trust Center
						</h4>
						<ul className="space-y-4 text-sm text-white/60">
							{trustLinks.map((link) => (
								<li key={link.label}>
									<Link
										className="transition-colors hover:text-white"
										to={link.to}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="mb-8 font-bold text-accent text-xs uppercase tracking-widest">
							Connect
						</h4>
						<ul className="space-y-6 text-sm text-white/60">
							<li className="flex items-start gap-4">
								<IconMapPin className="h-5 w-5 flex-shrink-0 text-accent" />
								<span>
									Level 4, Safdarjung Enclave,
									<br />
									New Delhi, India 110029
								</span>
							</li>
							<li className="flex items-center gap-4">
								<IconMail className="h-5 w-5 flex-shrink-0 text-accent" />
								<a
									className="transition-colors hover:text-white"
									href="mailto:expeditions@wildearth.com"
								>
									expeditions@wildearth.com
								</a>
							</li>
							<li className="flex items-center gap-4">
								<IconPhone className="h-5 w-5 flex-shrink-0 text-accent" />
								<span>+91 98765 43210</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between gap-6 border-white/5 border-t pt-12 md:flex-row">
					<div className="text-white/30 text-xs uppercase tracking-[0.2em]">
						&copy; 2024 WildEarth Expeditions. All Rights Reserved.
					</div>
					<div className="flex items-center gap-6">
						<span className="text-white/50 text-xs uppercase tracking-widest">
							PayU
						</span>
						<span className="text-white/50 text-xs uppercase tracking-widest">
							Razorpay
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
