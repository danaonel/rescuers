import { z } from "zod";

// Define the data structure for the JSON file
export const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string(),
  icon: z.string().optional(),
});

export const donationInfoSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().optional(),
  linkText: z.string().optional(),
  paypalEmail: z.string().optional(),
  bankAccountNumber: z.string().optional(),
});

export const siteContentSchema = z.object({
  name: z.string(),
  logoUrl: z.string().optional(),
  tagline: z.string(),
  description: z.string(),
  gallery: z.array(z.string()),
  donation: donationInfoSchema,
  socialLinks: z.array(socialLinkSchema),
});

export const multiLangContentSchema = z.object({
  en: siteContentSchema,
  ro: siteContentSchema,
});

export const multiAppContentSchema = z.record(z.string(), multiLangContentSchema);

export type SiteContent = z.infer<typeof siteContentSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type DonationInfo = z.infer<typeof donationInfoSchema>;
export type MultiLangContent = z.infer<typeof multiLangContentSchema>;
export type MultiAppContent = z.infer<typeof multiAppContentSchema>;
