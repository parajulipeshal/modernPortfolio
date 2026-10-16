import { Nav, Footer } from './components/Layout.jsx';
import { Hero, Stats } from './components/Hero.jsx';
import { About, Now, Founded, Experience, Education, Recognition, Skills, Contact } from './components/Sections.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <Now />
        <Founded />
        <Experience />
        <Education />
        <Recognition />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
