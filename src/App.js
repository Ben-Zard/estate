import './styles/main.scss';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';

import Animate from './pages/AnimatedRoutes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/e" element={<Animate />} />
      <Route path="/" element={<Contact />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
