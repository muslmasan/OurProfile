import About from "../component/About";
import Blog from "../component/Blog";
import Layout from "../component/Layout";
import NavBar from "../component/NavBar";
import Recent from "../component/Recent";
import Services from "../component/Services";
import Testimonial from "../component/Testimonial";

const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;
