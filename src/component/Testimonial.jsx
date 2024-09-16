import img from "../assets/img4.svg";
import img2 from "../assets/layout.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>Testimonial</h1>
      <div className="content">
        <div className="info">
          <img src={img} alt="" />
          <div className="more">
            <h1>Testimonial 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              dolorem illo, fuga nam in incidunt illum dicta labore laudantium
              quide
            </p>
          </div>
        </div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
