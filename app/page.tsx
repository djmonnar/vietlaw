import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AudienceSection from '@/components/AudienceSection';
import RepresentativeSection from '@/components/RepresentativeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AudienceSection />
      <RepresentativeSection />
      <Footer />
    </main>
  );
}
