import { Star } from "lucide-react";
import { motion } from "motion/react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

const testimonials = [
	{
		text: "The direct connection to the ground team made all the difference. Our naturalist was incredible and knew the park's rhythm perfectly. A truly authentic experience without any middleman hassle.",
		name: "Dr. Julian Mercer",
		location: "United Kingdom",
	},
	{
		text: "As a luxury traveler, I value transparency and coordination. WildEarth delivered on every promise. The 24-hour confirmation system was seamless and the ground execution was flawless.",
		name: "Anita Deshmukh",
		location: "Mumbai, India",
	},
	{
		text: "The photography tour in Kaziranga was world-class. Small group size meant personalized attention, and the naturalist's knowledge of tiger paths was astounding. Worth every penny.",
		name: "Sven Björnsson",
		location: "Sweden",
	},
];

function TestimonialCard({
	testimonial,
}: {
	testimonial: (typeof testimonials)[number];
}) {
	return (
		<div className="flex flex-col justify-between rounded-[30px] border border-gray-100 bg-white p-10 shadow-sm">
			<div>
				<div className="mb-6 flex gap-1">
					{[1, 2, 3, 4, 5].map((star) => (
						<Star
							className="h-5 w-5 fill-[#d4af6a] text-[#d4af6a]"
							key={star}
						/>
					))}
				</div>
				<p className="mb-8 text-gray-600 italic leading-relaxed">
					&ldquo;{testimonial.text}&rdquo;
				</p>
			</div>
			<div>
				<div className="font-bold">{testimonial.name}</div>
				<div className="text-gray-400 text-xs uppercase tracking-widest">
					{testimonial.location}
				</div>
			</div>
		</div>
	);
}

export default function Testimonials() {
	return (
		<section className="px-6 py-24">
			<div className="mx-auto max-w-7xl text-center">
				<motion.h2
					className="mb-16 font-bold font-serif text-4xl text-[#1f4d2b] md:text-5xl"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					Voices from the Wild
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 gap-8 md:grid-cols-3"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{testimonials.map((t) => (
						<motion.div key={t.name} variants={staggerItem}>
							<TestimonialCard testimonial={t} />
						</motion.div>
					))}
				</motion.div>

				<div className="mt-16 flex flex-wrap items-center justify-center gap-12 opacity-40">
					<span className="font-bold text-sm uppercase tracking-widest">
						Razorpay
					</span>
					<span className="font-bold text-sm uppercase tracking-widest">
						Visa
					</span>
					<span className="font-bold text-sm uppercase tracking-widest">
						Mastercard
					</span>
					<span className="font-bold text-sm uppercase tracking-widest">
						TripAdvisor
					</span>
				</div>
			</div>
		</section>
	);
}
