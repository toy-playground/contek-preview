import { ParallaxProvider } from 'react-scroll-parallax';

import About from '@/components/About';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import Jobs from '@/components/Jobs';
import Navbar from '@/components/Navbar';
import Values from '@/components/Values';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <ParallaxProvider>
          <Intro />
        </ParallaxProvider>
        <About />
        {/* <Team /> */}
        <Values />
        <Jobs />
      </main>
      <Footer />
    </>
  );
};

export default App;
