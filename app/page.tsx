import Navbar from '@/components/Navbar';
import FreightHero from '@/components/hero/FreightHero';
import HeroStats from '@/components/HeroStats';
import Certifications from '@/components/Certifications';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Quality from '@/components/Quality';
import GlobalPresence from '@/components/GlobalPresence';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <FreightHero />
      <HeroStats />
      <Certifications />
      <About />
      <Products />
      <WhyChooseUs />
      <Process />
      <Quality />
      <GlobalPresence />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
