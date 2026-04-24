import { CircleCheck, Leaf, Send, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animations";

export default function BookingSection() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
	};

	return (
		<section
			className="relative overflow-hidden bg-[#1f4d2b] py-24"
			id="booking-form"
		>
			<div className="pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-5">
				<Leaf className="h-[600px] w-[600px] rotate-45 text-white" />
			</div>

			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
				<motion.div
					className="text-white"
					initial="hidden"
					variants={fadeLeft}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<h2 className="mb-8 font-bold font-serif text-4xl md:text-5xl">
						Secure Your Spot in the Jungle
					</h2>
					<p className="mb-10 text-lg text-white/80 leading-relaxed">
						As a request-based platform, we verify all permits and jeep
						availability with our ground teams before confirming your booking.
						Expect a tailored proposal in your inbox within 24 hours.
					</p>
					<div className="space-y-6">
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d4af6a]">
								<CircleCheck className="h-6 w-6" />
							</div>
							<div>
								<h4 className="mb-1 font-bold">Direct On-Ground Execution</h4>
								<p className="text-sm text-white/60">
									We don&apos;t outsource. Our teams manage every detail of your
									safari drive.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d4af6a]">
								<ShieldCheck className="h-6 w-6" />
							</div>
							<div>
								<h4 className="mb-1 font-bold">Transparent Pricing</h4>
								<p className="text-sm text-white/60">
									No hidden agent fees. You pay for pure wildlife expertise and
									luxury coordination.
								</p>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="relative rounded-[40px] bg-white p-8 shadow-2xl md:p-12"
					initial="hidden"
					variants={fadeRight}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<div className="mb-8">
						<h3 className="mb-2 font-bold font-serif text-2xl text-[#1f4d2b]">
							Plan Your Safari
						</h3>
						<p className="text-gray-500 text-sm">
							Share your preferences for a personalized proposal.
						</p>
					</div>
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="space-y-2">
								<label
									className="font-bold text-gray-400 text-xs uppercase tracking-widest"
									htmlFor="park"
								>
									National Park
								</label>
								<select
									className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af6a]"
									id="park"
								>
									<option>Ranthambore</option>
									<option>Jim Corbett</option>
									<option>Kaziranga</option>
									<option>Tadoba</option>
									<option>Pench</option>
								</select>
							</div>
							<div className="space-y-2">
								<label
									className="font-bold text-gray-400 text-xs uppercase tracking-widest"
									htmlFor="dates"
								>
									Travel Dates
								</label>
								<input
									className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af6a]"
									id="dates"
									type="date"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="space-y-2">
								<label
									className="font-bold text-gray-400 text-xs uppercase tracking-widest"
									htmlFor="group-size"
								>
									Group Size
								</label>
								<input
									className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af6a]"
									id="group-size"
									placeholder="Number of People"
									type="number"
								/>
							</div>
							<div className="space-y-2">
								<label
									className="font-bold text-gray-400 text-xs uppercase tracking-widest"
									htmlFor="email"
								>
									Contact Email
								</label>
								<input
									className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af6a]"
									id="email"
									placeholder="hello@example.com"
									type="email"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<label
								className="font-bold text-gray-400 text-xs uppercase tracking-widest"
								htmlFor="interests"
							>
								Special Interests
							</label>
							<textarea
								className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af6a]"
								id="interests"
								placeholder="E.g., Photography focus, bird watching, luxury lodging preferences..."
								rows={3}
							/>
						</div>
						<button
							className={`flex w-full items-center justify-center gap-2 rounded-xl py-5 font-bold text-lg transition-all ${submitted ? "pointer-events-none bg-green-600 text-white opacity-80" : "bg-[#d4af6a] text-[#1f4d2b] hover:bg-[#c49b59]"}`}
							disabled={submitted}
							type="submit"
						>
							{submitted ? (
								<>
									<CircleCheck className="h-5 w-5" />
									Request Sent!
								</>
							) : (
								<>
									Request Custom Proposal
									<Send className="h-5 w-5" />
								</>
							)}
						</button>
						<p className="text-center text-[11px] text-gray-400">
							By submitting, you agree to our{" "}
							<button className="underline" type="button">
								Cancellation & Refund Policy
							</button>
							.
						</p>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
