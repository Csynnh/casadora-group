import './App.css';
import { Layout } from './components/layout';
import { Hero, Features, Testimonials } from './components/sections';
import { useEffect } from 'react';
import Section from './components/sections/Section/Section';
import OurServices from './components/sections/OurServices';
import OurProjects from './components/sections/OurProjects';
import Exhibition from './components/sections/Exhibition';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    console.info('window.scrollTo(0, 0)');
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <OurServices />
      <OurProjects />
      <Exhibition />
      <Contact />
    </Layout>
  );
}

export default App;
