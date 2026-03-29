import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
