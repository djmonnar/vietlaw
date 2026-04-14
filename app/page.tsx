import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AudienceSection from '@/components/AudienceSection';
import RepresentativeSection from '@/components/RepresentativeSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <HeroSection />
      <AudienceSection />
      <RepresentativeSection />
      <Footer />
    </main>
  );
}
