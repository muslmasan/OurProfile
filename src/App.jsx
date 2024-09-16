import About from "./component/About";
import Blog from "./component/Blog";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import NavBar from "./component/NavBar";
import Recent from "./component/Recent";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Layout />
        <About />
        <Services />
        <Recent />
        <Blog />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default App;
