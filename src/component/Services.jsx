import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";

const Services = () => {
  return (
    <div className="services">
      <h1>Our <span>Services</span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim
        exercitationem at ullam accusamus modi, quod, quae itaque odit non iste
        suscipit nemo earum beatae quibusdam ipsum dignissimos animi architecto.
      </p>
      <div className="boxs">
        <div className="box">
          <img src={img2} alt="" />
          <div className="info">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, dolorum.
            </p>
          </div>
        </div>
        <div className="box">
          <img src={img3} alt="" />
          <div className="info">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, dolorum.
            </p>
          </div>
        </div>
        <div className="box">
          <img src={img1} alt="" />
          <div className="info">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
