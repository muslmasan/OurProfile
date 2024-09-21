import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
