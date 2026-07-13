import AnimatedBackground from './components/AnimatedBackground';
import CursorGlow from './components/CursorGlow';
import CvPreviewModal from './components/CvPreviewModal';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import About from './sections/About';
import Contact from './sections/Contact';
import CurriculumVitae from './sections/CurriculumVitae';
import Home from './sections/Home';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Home />
        <CurriculumVitae />
        <About />
        <Contact />
      </main>
      <CvPreviewModal />
    </>
  );
}
