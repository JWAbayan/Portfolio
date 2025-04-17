import './App.css'

import Intro from './render/components/Intro/Intro'
import Navbar from './render/components/Navbar/Navbar'
import Projects from './render/components/Projects/Projects'
import Experiments from './render/components/Experiments/Experiments'
import About from './render/components/About/About'

function App() {

  return (
    <main>      
      <Navbar/>
      <Intro/>
      <Projects/>
      <div className="spacer"/>
      <Experiments/>
      <div className="spacer"/>
      <About/>              
    </main>
  );
}

export default App
