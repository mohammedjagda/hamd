import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
      <Hero />
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
