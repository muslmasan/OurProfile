import image from "../assets/layout.svg";
const Layout = () => {
  return (
    <div className="layout">
      <div className="info">
        <h1>
          Create <span>Responsive</span> Website
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere
          praesentium quasi soluta dolorem dolore hic eveniet, quaerat sapiente
          exercitationem expedita? Odit odio mollitia eaque aspernatur
          consequuntur est ducimus quisquam.
        </p>
        <button>Contact Us</button>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default Layout;
