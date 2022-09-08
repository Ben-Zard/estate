import './styles/main.scss';
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Test from './pages/Test'
import Animate from './pages/Animate';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/e" element={<Animate />} />
      <Route path="/" element={<Contact />} />
      <Route path="/test" element={<Test />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
