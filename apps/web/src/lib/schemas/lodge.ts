import { z } from "zod";

const LodgePageImageSchema = z.object({
	alt: z.string().min(1),
	src: z.string().min(1),
});

export const LodgePageExperienceSchema = z.object({
	description: z.string().min(1),
	image: z.string().min(1),
	title: z.string().min(1),
});

export const LodgePageRoomSchema = z.object({
	description: z.string().min(1),
	details: z.string().min(1),
	images: z.array(z.string().min(1)).min(1),
	name: z.string().min(1),
});

export const LodgePageSchema = z.object({
	accommodations: z.object({
		eyebrow: z.string().min(1),
		title: z.string().min(1),
	}),
	cta: z.object({
		buttonLabel: z.string().min(1),
		description: z.string().min(1),
		title: z.string().min(1),
	}),
	experiences: z.array(LodgePageExperienceSchema).min(1),
	experiencesTitle: z.string().min(1),
	hero: z.object({
		eyebrow: z.string().min(1),
		image: z.string().min(1),
		imageAlt: z.string().min(1),
		title: z.string().min(1),
	}),
	philosophy: z.object({
		buttonLabel: z.string().min(1).optional(),
		eyebrow: z.string().min(1),
		images: z.object({
			primary: LodgePageImageSchema,
			secondary: LodgePageImageSchema,
		}),
		paragraphs: z.array(z.string().min(1)).min(1),
		title: z.string().min(1),
	}),
	rooms: z.array(LodgePageRoomSchema).min(1),
	testimonial: z
		.object({
			attribution: z.string().min(1),
			quote: z.string().min(1),
		})
		.optional(),
});
