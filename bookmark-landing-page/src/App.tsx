import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Article from './components/Article';
import DownloadSection from './components/DownloadSection';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Article />
      <DownloadSection />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
