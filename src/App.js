import './styles/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Test from './pages/Test'
import Animate from './components/Hero';
import Home from "./pages/Home"



function App() {
  return (
    <BrowserRouter>
 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a" element={<Animate />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/test" element={<Test />} /> */}
      <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
