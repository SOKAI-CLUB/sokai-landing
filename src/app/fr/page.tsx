import LandingExperience from "@/components/LandingExperience";
import { getSiteMetadata } from "@/lib/site-metadata";

export const metadata = getSiteMetadata("fr");

export default function FrenchHome() {
  return <LandingExperience locale="fr" />;
}
