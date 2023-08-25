
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Catalogue from './components/catalogue';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/catalogue" element={<Catalogue/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
