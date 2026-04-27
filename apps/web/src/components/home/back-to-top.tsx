import { IconChevronUp } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					animate={{ opacity: 1, y: 0 }}
					aria-label="Back to top"
					className="fixed bottom-24 left-8 z-[998] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-green-dark"
					exit={{ opacity: 0, y: 20 }}
					initial={{ opacity: 0, y: 20 }}
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					transition={{ duration: 0.4, ease: easeOutExpo }}
					type="button"
				>
					<IconChevronUp className="h-5 w-5" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
