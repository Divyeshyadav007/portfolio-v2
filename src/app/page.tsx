import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Payment from '@/components/Payment';
import Contact from '@/components/Contact';
import FooterMarquee from '@/components/FooterMarquee';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Topbar />
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <About />
      <Payment />
      <Contact />
      <FooterMarquee />
      <Footer />
    </>
  );
}
