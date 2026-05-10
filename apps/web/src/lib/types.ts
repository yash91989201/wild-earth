import type { z } from "zod";
import type {
	LodgePageExperienceSchema,
	LodgePageRoomSchema,
	LodgePageSchema,
} from "@/lib/schemas/lodge";

export type LodgePageData = z.infer<typeof LodgePageSchema>;
export type LodgePageExperience = z.infer<typeof LodgePageExperienceSchema>;
export type LodgePageRoom = z.infer<typeof LodgePageRoomSchema>;
