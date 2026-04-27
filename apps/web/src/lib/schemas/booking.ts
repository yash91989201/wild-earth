import { z } from "zod";

export const BookingFormSchema = z.object({
	park: z.string().min(1, "Please select a national park"),
	dates: z.string().min(1, "Please select travel dates"),
	groupSize: z.coerce.number().min(1, "Group size must be at least 1"),
	email: z.string().email("Please enter a valid email address"),
	interests: z.string().optional(),
});
