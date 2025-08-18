import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import VideoSection from '@/components/VideoSection';
import StatsSection from '@/components/StatsSection';
import ProblemSolution from '@/components/ProblemSolution';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-sokai-charcoal overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Video Section */}
      <VideoSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Problem → Solution Section */}
      <ProblemSolution />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
