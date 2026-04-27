import type { z } from "zod";
import type { BookingFormSchema } from "@/lib/schemas/booking";

export type BookingFormType = z.infer<typeof BookingFormSchema>;
