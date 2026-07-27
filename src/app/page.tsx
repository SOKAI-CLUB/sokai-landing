import LandingExperience from "@/components/LandingExperience";
import { getSiteMetadata } from "@/lib/site-metadata";

export const metadata = getSiteMetadata("en");

export default function Home() {
  return <LandingExperience locale="en" />;
}
