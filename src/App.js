import './styles/_main.scss';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
