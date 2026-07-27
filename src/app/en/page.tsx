import LandingExperience from "@/components/LandingExperience";
import { getSiteMetadata } from "@/lib/site-metadata";

export const metadata = getSiteMetadata("en");

export default function EnglishHome() {
  return <LandingExperience locale="en" />;
}
