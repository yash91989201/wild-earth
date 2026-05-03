import {
	IconCircleCheck,
	IconLeaf,
	IconSend,
	IconShieldCheck,
} from "@tabler/icons-react";
import { formOptions } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "@wild-earth/ui/components/button";
import { FieldGroup } from "@wild-earth/ui/components/field";
import type { SelectItemData } from "@wild-earth/ui/components/form/form-select";
import { useAppForm } from "@wild-earth/ui/components/form/hooks";
import { InputGroupButton } from "@wild-earth/ui/components/input-group";
import { SelectItem } from "@wild-earth/ui/components/select";
import { cn } from "@wild-earth/ui/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animations";
import { BookingFormSchema } from "@/lib/schemas/booking";
import type { BookingFormType } from "@/lib/types/booking";

const parkItems: SelectItemData[] = [
	{ label: "Ranthambore", value: "ranthambore" },
	{ label: "Jim Corbett", value: "corbett" },
	{ label: "Kaziranga", value: "kaziranga" },
	{ label: "Tadoba", value: "tadoba" },
	{ label: "Pench", value: "pench" },
];

const formOpts = formOptions({
	defaultValues: {
		park: "",
		dates: "",
		groupSize: 1,
		email: "",
		interests: "",
	} satisfies BookingFormType as BookingFormType,
});

export default function BookingSection() {
	const [submitted, setSubmitted] = useState(false);

	const form = useAppForm({
		...formOpts,
		validators: {
			onSubmitAsync: BookingFormSchema,
		},
		onSubmit: async ({ value }) => {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log("Booking request:", value);
			setSubmitted(true);
			setTimeout(() => {
				setSubmitted(false);
				form.reset();
			}, 3000);
		},
	});

	return (
		<section
			className="relative overflow-hidden bg-primary py-24"
			id="booking-form"
		>
			<div className="pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-5">
				<IconLeaf className="h-[600px] w-[600px] rotate-45 text-white" />
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
							<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
								<IconCircleCheck className="h-6 w-6" />
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
							<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
								<IconShieldCheck className="h-6 w-6" />
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
					className="relative rounded-[40px] bg-card p-8 shadow-2xl md:p-12"
					initial="hidden"
					variants={fadeRight}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<div className="mb-8">
						<h3 className="mb-2 font-bold font-serif text-2xl text-primary">
							Plan Your Safari
						</h3>
						<p className="text-muted-foreground text-sm">
							Share your preferences for a personalized proposal.
						</p>
					</div>

					<form.AppForm>
						<form
							className="space-y-6"
							onSubmit={(e) => {
								e.preventDefault();
								form.handleSubmit();
							}}
						>
							<FieldGroup>
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									<form.AppField name="park">
										{(field) => (
											<field.Select
												items={parkItems}
												label="National Park"
												placeholder="Select a park"
											>
												{parkItems.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</field.Select>
										)}
									</form.AppField>

									<form.AppField name="dates">
										{(field) => <field.Calendar label="Travel Dates" />}
									</form.AppField>
								</div>

								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									<form.AppField name="groupSize">
										{(field) => (
											<field.InputGroup label="Group Size">
												<InputGroupButton
													className="font-semibold text-lg"
													onClick={() => {
														const current = Number(field.state.value) || 1;
														field.setValue(Math.max(current - 1, 1));
													}}
												>
													&minus;
												</InputGroupButton>
												<field.InputGroupInput
													className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
													placeholder="Number of People"
													type="number"
												/>
												<InputGroupButton
													className="font-semibold text-lg"
													onClick={() => {
														const current = Number(field.state.value) || 1;
														field.setValue(Math.min(current + 1, 50));
													}}
												>
													+
												</InputGroupButton>
											</field.InputGroup>
										)}
									</form.AppField>

									<form.AppField name="email">
										{(field) => (
											<field.Input
												label="Contact Email"
												placeholder="hello@example.com"
												type="email"
											/>
										)}
									</form.AppField>
								</div>

								<form.AppField name="interests">
									{(field) => (
										<field.Textarea
											label="Special Interests"
											placeholder="E.g., Photography focus, bird watching, luxury lodging preferences..."
											rows={5}
										/>
									)}
								</form.AppField>

								<form.Subscribe
									selector={(state) => [
										state.canSubmit,
										state.isValidating,
										state.isSubmitting,
									]}
								>
									{([canSubmit, isValidating, isSubmitting]) => (
										<Button
											className="w-full py-5 font-bold text-lg"
											disabled={
												!canSubmit || isValidating || isSubmitting || submitted
											}
											size="lg"
											type="submit"
											variant={submitted ? "secondary" : "default"}
										>
											{submitted ? (
												<>
													<IconCircleCheck className="h-5 w-5" />
													Request Sent!
												</>
											) : isSubmitting ? (
												<>
													<span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
													Submitting...
												</>
											) : (
												<>
													Request Custom Proposal
													<IconSend className="h-5 w-5" />
												</>
											)}
										</Button>
									)}
								</form.Subscribe>

								<p className="text-center text-muted-foreground text-xs">
									By submitting, you agree to our{" "}
									<Link
										className={cn(
											buttonVariants({ variant: "link" }),
											"h-auto p-0 font-normal text-xs"
										)}
										to="/"
									>
										Cancellation & Refund Policy
									</Link>
									.
								</p>
							</FieldGroup>
						</form>
					</form.AppForm>
				</motion.div>
			</div>
		</section>
	);
}
