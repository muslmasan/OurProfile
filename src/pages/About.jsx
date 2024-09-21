import img1 from "../assets/about-1.svg";
import img2 from "../assets/about-2.svg";
import img3 from "../assets/about-3.svg";
import img4 from "../assets/about-4.svg";
import img5 from "../assets/about-5.svg";
import './AboutPage.css'

const About = () => {
  return (
    <div className="About">
      <div className="top">
        <img src={img1} alt="" />
        <div className="info">
          <h1>Welcome To <span>InnoWare</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            nihil debitis doloremque totam voluptatibus voluptas voluptates
           
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="info">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            distinctio ipsa et, minima quasi deleniti reprehenderit mollitia
            magni necessitatibus dolores quod ut. Quas accusamus ad natus
            tempore reprehenderit, iste quo!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            distinctio ipsa et, minima quasi deleniti reprehenderit mollitia
            magni necessitatibus dolores quod ut. Quas accusamus ad natus
            tempore reprehenderit, iste quo!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
           
          </p>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="boxs">
        
        <div className="box">
            <h2>Our History</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit
               re id do
                repellat laborum laboriosam? Nobis beatae reprehenderit, natus minus, 
                quibusdam consectetur voluptate eius sequi et eum id eligendi?</p>
        </div>
        <div className="box">
            <h2>Our History</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit
               re id do
                repellat laborum laboriosam? Nobis beatae reprehenderit, natus minus, 
                quibusdam consectetur voluptate eius sequi et eum id eligendi?</p>
        </div>
        <div className="box">
            <h2>Our History</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit
               re id do
                repellat laborum laboriosam? Nobis beatae reprehenderit, natus minus, 
                quibusdam consectetur voluptate eius sequi et eum id eligendi?</p>
        </div>
        
      </div>
      <div className="content">
        <h1 className="title">Life in <span>InnoWare</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quibusdam, cumque praesentium sint consectetur hic, itaque perspiciatis necessitatibus, vitae nemo officiis repellat neque eius! Officia veniam, tempore adipisci alias ex voluptatibus eum quaerat beatae fugiat quia mollitia eligendi labore optio. Ipsum eius nam, accusantium amet velit numquam nisi! Veritatis, debitis!</p>
        <div className="box">
            <img src={img3} alt="" />
            <div className="info">
                <h1>Professional Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit voluptatibus modi laboriosam non aut provident ut a quaerat architecto eveniet delectus sunt excepturi iure, similique deserunt nobis. Saepe, natus.</p>
            </div>
        </div>
        <div className="box reverse">
            <div className="info">
                <h1>Creative Designer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit voluptatibus modi laboriosam non aut provident ut a quaerat architecto eveniet delectus sunt excepturi iure, similique deserunt nobis. Saepe, natus.</p>
            </div>
            <img src={img4} alt="" />
        </div>
        <div className="box">
            <img src={img5} alt="" />
            <div className="info">
                <h1>Fun & Collaborate</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit voluptatibus modi laboriosam non aut provident ut a quaerat architecto eveniet delectus sunt excepturi iure, similique deserunt nobis. Saepe, natus.</p>
            </div>
        </div>
      </div>
      <div className="footer">
        <h2>Join Our Team</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, obcaecati? Corporis autem et natus? Adipisci error accusamus labore sunt odio iure ad tenetur doloribus voluptas rerum? Debitis quas aliquid deserunt.</p>
        <button>Carrier</button>
      </div>
    </div>
  );
};

export default About;
