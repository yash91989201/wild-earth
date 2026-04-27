import { createFileRoute } from "@tanstack/react-router";
import BookingSection from "@/components/home/booking-section";
import EthosSection from "@/components/home/ethos-section";
import FeaturedParks from "@/components/home/featured-parks";
import HeroSection from "@/components/home/hero-section";
import JourneySteps from "@/components/home/journey-steps";
import PhotographyTours from "@/components/home/photography-tours";
import Testimonials from "@/components/home/testimonials";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="relative min-h-screen">
			<HeroSection />
			<FeaturedParks />
			<BookingSection />
			<section className="bg-secondary px-6 py-24" id="how-it-works">
				<EthosSection />
				<div className="mt-32">
					<JourneySteps />
				</div>
			</section>
			<PhotographyTours />
			<Testimonials />
		</div>
	);
}
