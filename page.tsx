import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import CareerGoal from '@/components/CareerGoal';
import { Projects, Achievements, Certificates } from '@/components/FutureSections';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <CareerGoal />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
