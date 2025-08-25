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


      {/* Video Section - Dark */}
      <section className="bg-sokai-charcoal">
        <VideoSection />
      </section>

      {/* App Showcase Section - Light */}


      {/* Stats Section - Dark */}

      {/* Problem → Solution Section - Light */}


      {/* CTA Section - Light */}
      <section className="bg-sokai-light">
        <CTA />
      </section>

      {/* Footer - Dark */}
      <Footer />
    </main>
  );
}
