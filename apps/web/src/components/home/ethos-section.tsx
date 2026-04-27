import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animations";

export default function EthosSection() {
	return (
		<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
			<motion.div
				initial="hidden"
				variants={fadeLeft}
				viewport={viewportOnce}
				whileInView="visible"
			>
				<div className="overflow-hidden rounded-[40px]">
					<img
						alt="Our Ethos"
						className="h-[600px] w-full object-cover transition-transform duration-[800ms] hover:scale-[1.08]"
						height={600}
						src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop"
						width={1035}
					/>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				variants={fadeRight}
				viewport={viewportOnce}
				whileInView="visible"
			>
				<span className="mb-4 block font-bold text-accent text-xs uppercase tracking-[0.2em]">
					Our Ethos
				</span>
				<h2 className="mb-8 font-bold font-serif text-4xl text-primary md:text-5xl">
					<span className="block">Care of the Land,</span>
					<span className="block">Wildlife & People</span>
				</h2>
				<p className="mb-8 text-lg text-muted-foreground leading-relaxed">
					We believe that luxury travel must go hand in hand with deep
					conservation. By partnering exclusively with eco-conscious camps and
					indigenous guides, your journey directly protects India&apos;s most
					fragile ecosystems.
				</p>
				<Link
					className="group flex items-center gap-2 font-bold text-brand-brown text-sm uppercase tracking-widest"
					to="/conservation"
				>
					Discover Our Impact
					<IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Link>
			</motion.div>
		</div>
	);
}
