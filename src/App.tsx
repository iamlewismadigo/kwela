import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import EarlyAccess from './components/EarlyAccess';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onJoinClick={scrollToEarlyAccess} />
      <About />
      <Features />
      <EarlyAccess />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
