import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactPage from './components/Contact';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <ContactPage/>
      </main>
      <Footer />
    </div>
  );
}

export default App;