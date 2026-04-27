import { IconCamera, IconChevronRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/animations";

const features = [
	"Custom-modified camera-friendly jeeps",
	"On-field post-processing workshops",
	"Exclusive access to key wildlife zones",
];

export default function PhotographyTours() {
	return (
		<section className="px-6 py-24" id="photography">
			<motion.div
				className="mx-auto max-w-7xl overflow-hidden"
				initial="hidden"
				variants={fadeUp}
				viewport={viewportOnce}
				whileInView="visible"
			>
				<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
					<div className="group relative order-2 lg:order-1">
						<div className="grid grid-cols-2 gap-4">
							<img
								alt="Lion"
								className="h-64 w-full rounded-2xl object-cover"
								height={256}
								src="https://images.unsplash.com/photo-1543946207-39bd91e70ca7?q=80&w=2070&auto=format&fit=crop"
								width={518}
							/>
							<img
								alt="Tiger"
								className="mt-8 h-64 w-full rounded-2xl object-cover"
								height={256}
								src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop"
								width={518}
							/>
							<img
								alt="Leopard"
								className="-mt-8 h-64 w-full rounded-2xl object-cover"
								height={256}
								src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
								width={517}
							/>
							<img
								alt="Bird"
								className="h-64 w-full rounded-2xl object-cover"
								height={256}
								src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop"
								width={517}
							/>
						</div>
						<div className="absolute -right-6 -bottom-6 rounded-full border-4 border-secondary bg-primary p-8 text-primary-foreground shadow-2xl">
							<IconCamera className="h-10 w-10" />
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<h2 className="mb-8 font-bold font-serif text-4xl text-primary leading-tight md:text-5xl">
							Photography Tours: For the Perfect Frame
						</h2>
						<p className="mb-6 font-medium text-brand-brown text-sm uppercase tracking-widest">
							Fixed Departures &bull; Max 4 Participants
						</p>
						<p className="mb-10 text-lg text-muted-foreground">
							Led by award-winning wildlife photographers, these tours
							prioritize patience, lighting, and positioning. Gain exclusive
							insights into animal behavior while mastering your wildlife
							photography skills in the heart of the jungle.
						</p>
						<ul className="mb-10 space-y-4">
							{features.map((feature) => (
								<li className="flex items-center gap-3" key={feature}>
									<IconChevronRight className="h-5 w-5 flex-shrink-0 text-accent" />
									<span className="font-medium">{feature}</span>
								</li>
							))}
						</ul>
						<Link
							className="inline-block rounded-full bg-primary px-10 py-5 font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-lg"
							to="/photography"
						>
							Explore Photo Tours
						</Link>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
