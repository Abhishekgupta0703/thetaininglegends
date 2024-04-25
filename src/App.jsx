
import './App.css'
import Clients from './components/Clients';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Header from'./components/Header'
import Hero from './components/Hero'
import Services from './components/Services';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Clients />
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default App
