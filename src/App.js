// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import BlurbSlider from './components/BlurbSlider';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <About />
      <BlurbSlider />
      <Experience />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
}

export default App;
