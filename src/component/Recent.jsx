import img from "../assets/simple.jpg";

const Recent = () => {
  return (
    <div className="recent">
      <h1>
        Our <span>Recent</span> Work
      </h1>
      <div className="content">
        <div className="info">
          <h1>Blog</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            fugit quo sit veniam? Iusto ipsam molestiae tempora soluta similique
            voluptatibus, sapiente maiores corporis. Esse minus accusantium non,
            quaerat voluptatem dolorum
          </p>
        </div>
        <img src={img} alt="" />
      </div>
      <button>View All</button>
    </div>
  );
};

export default Recent;
