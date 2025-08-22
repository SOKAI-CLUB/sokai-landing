import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import VideoSection from '@/components/VideoSection';
import AppShowcase from '@/components/AppShowcase';
import StatsSection from '@/components/StatsSection';
import ProblemSolution from '@/components/ProblemSolution';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navigation - Dark */}
      <Navbar />

      {/* Hero Section - Dark */}
      <Hero />

      {/* Trusted By Section - Light */}
      <section className="bg-sokai-light">
        <TrustedBy />
      </section>

      {/* Video Section - Dark */}
      <section className="bg-sokai-charcoal">
        <VideoSection />
      </section>

      {/* App Showcase Section - Light */}
      <section className="bg-sokai-light">
        <AppShowcase />
      </section>

      {/* Stats Section - Dark */}
      <section className="bg-sokai-charcoal">
        <StatsSection />
      </section>

      {/* Problem → Solution Section - Light */}
      <section className="bg-sokai-light">
        <ProblemSolution />
      </section>

      {/* CTA Section - Dark */}
      <section className="bg-sokai-charcoal">
        <CTA />
      </section>

      {/* Footer - Dark */}
      <Footer />
    </main>
  );
}
