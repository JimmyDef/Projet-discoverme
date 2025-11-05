import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
