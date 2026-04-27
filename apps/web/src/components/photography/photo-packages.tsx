import {
	IconArrowRight,
	IconCar,
	IconChartBar,
	IconClock,
	IconUsers,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
	fadeUp,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from "@/lib/animations";

interface PhotoPackage {
	description: string;
	drives: string;
	duration: string;
	featured?: boolean;
	groupSize: string;
	image: string;
	imageAlt: string;
	level: string;
	location: string;
	reverse?: boolean;
	title: string;
	variant?: "primary" | "outline";
}

const packages: PhotoPackage[] = [
	{
		location: "Ranthambore & Tadoba",
		title: "The Big Cat Masterclass",
		description:
			"A high-octane 8-day expedition focusing entirely on the Bengal Tiger. Learn to capture action shots, backlit portraits in the dust, and low-light silhouettes. We prioritize specific zones known for bold tiger activity and beautiful backgrounds.",
		image:
			"https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2027&auto=format&fit=crop",
		imageAlt: "Tiger portrait",
		duration: "7 Nights / 8 Days",
		level: "Intermediate - Advanced",
		drives: "12 Safaris",
		groupSize: "Max 4",
		featured: true,
		variant: "primary",
	},
	{
		location: "Kaziranga National Park",
		title: "The Wetland Canvas",
		description:
			"Focus on creating environmental portraits and wide-angle wildlife photography. The misty mornings of the Brahmaputra floodplains offer an ethereal backdrop for the prehistoric-looking One-Horned Rhino and herds of wild elephants.",
		image:
			"https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2070&auto=format&fit=crop",
		imageAlt: "Rhino in wetlands",
		duration: "5 Nights / 6 Days",
		level: "All Levels",
		drives: "8 Safaris",
		groupSize: "Max 4",
		reverse: true,
		variant: "outline",
	},
	{
		location: "Jim Corbett National Park",
		title: "Avian & Forest Lens",
		description:
			"A specialized tour blending megafauna with India's rich birdlife. Learn to master fast shutter speeds for birds in flight and manage difficult dappled light in the dense Sal forests. Perfect for those looking to diversify their portfolio.",
		image:
			"https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2070&auto=format&fit=crop",
		imageAlt: "Bird of prey",
		duration: "4 Nights / 5 Days",
		level: "Beginner - Intermediate",
		drives: "6 Safaris",
		groupSize: "Max 4",
		variant: "outline",
	},
];

function PackageMeta({
	icon: Icon,
	label,
	value,
}: {
	icon: React.ElementType;
	label: string;
	value: string;
}) {
	return (
		<div className="flex items-center gap-2 text-sm">
			<Icon className="h-4 w-4 text-[#d4af6a]" />
			<span className="font-bold">{label}:</span>
			<span>{value}</span>
		</div>
	);
}

function PackageCard({ pkg }: { pkg: PhotoPackage }) {
	const imageBlock = (
		<div className="group relative h-80 overflow-hidden lg:min-h-[500px]">
			<img
				alt={pkg.imageAlt}
				className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				height={500}
				src={pkg.image}
				width={800}
			/>
			{pkg.featured && (
				<div className="absolute top-6 left-6 rounded-full bg-[#1f4d2b] px-4 py-2 font-bold text-[#d4af6a] text-xs uppercase tracking-widest">
					Flagship Tour
				</div>
			)}
		</div>
	);

	const contentBlock = (
		<div className="flex flex-col justify-center p-10 lg:p-16">
			<div className="mb-2 font-bold text-[#d4af6a] text-sm uppercase tracking-[0.2em]">
				{pkg.location}
			</div>
			<h3 className="mb-4 font-bold font-serif text-4xl text-[#1f4d2b]">
				{pkg.title}
			</h3>
			<p className="mb-8 text-gray-600 text-lg leading-relaxed">
				{pkg.description}
			</p>
			<div className="mb-8 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
				<PackageMeta icon={IconClock} label="Duration" value={pkg.duration} />
				<PackageMeta icon={IconChartBar} label="Level" value={pkg.level} />
				<PackageMeta icon={IconCar} label="Drives" value={pkg.drives} />
				<PackageMeta
					icon={IconUsers}
					label="Group Size"
					value={pkg.groupSize}
				/>
			</div>
			<Link
				className={`inline-flex w-max items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold transition-all ${
					pkg.variant === "primary"
						? "bg-[#d4af6a] text-[#1f4d2b] hover:bg-[#c49b59]"
						: "border-2 border-[#1f4d2b] text-[#1f4d2b] hover:bg-[#1f4d2b] hover:text-white"
				}`}
				hash="booking-form"
				to="/"
			>
				Enquire Availability
				<IconArrowRight className="h-5 w-5" />
			</Link>
		</div>
	);

	return (
		<motion.div
			className="flex flex-col overflow-hidden rounded-[40px] bg-white shadow-xl lg:flex-row"
			variants={staggerItem}
		>
			{pkg.reverse ? (
				<>
					<div className="lg:w-3/5">{contentBlock}</div>
					<div className="lg:w-2/5">{imageBlock}</div>
				</>
			) : (
				<>
					<div className="lg:w-2/5">{imageBlock}</div>
					<div className="lg:w-3/5">{contentBlock}</div>
				</>
			)}
		</motion.div>
	);
}

export default function PhotoPackages() {
	return (
		<section className="bg-[#f5f1ed] px-6 py-24">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="mb-20 text-center"
					initial="hidden"
					variants={fadeUp}
					viewport={viewportOnce}
					whileInView="visible"
				>
					<h2 className="mb-6 font-bold font-serif text-4xl text-[#1f4d2b] md:text-5xl">
						Curated Photo Expeditions
					</h2>
					<p className="mx-auto max-w-2xl text-gray-600 text-lg">
						Choose from our specialized itineraries targeting different
						terrains, lighting conditions, and species.
					</p>
				</motion.div>

				<motion.div
					className="space-y-16"
					initial="hidden"
					variants={staggerContainer}
					viewport={viewportOnce}
					whileInView="visible"
				>
					{packages.map((pkg) => (
						<PackageCard key={pkg.title} pkg={pkg} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
