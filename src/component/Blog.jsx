import blog from "../assets/blog.jpg";

const Blog = () => {
  return (
    <div className="blog">
      <h1>
        Our <span>Blog</span>
      </h1>
      <div className="content">
        <div className="box">
          <img src={blog} alt="" />
          <div className="info">
            <h2>Blog 1</h2>
            <p>
              Lorem ipsum dolor sit, consectetur . Corporis fugit quo sit
              veniam? Iusto ipsam molestiae tempora soluta similique quaerat
              voluptatem dolorum
            </p>
          <button>Show</button>
          </div>
        </div>
        <div className="box">
          <img src={blog} alt="" />
          <div className="info">
            <h2>Blog 1</h2>
            <p>
              Lorem ipsum dolor sit, consectetur . Corporis fugit quo sit
              veniam? Iusto ipsam molestiae tempora soluta similique quaerat
              voluptatem dolorum
            </p>
          <button>Show</button>
          </div>
        </div>
        <div className="box">
          <img src={blog} alt="" />
          <div className="info">
            <h2>Blog 1</h2>
            <p>
              Lorem ipsum dolor sit, consectetur . Corporis fugit quo sit
              veniam? Iusto ipsam molestiae tempora soluta similique quaerat
              voluptatem dolorum
            </p>
          <button>Show</button>
          </div>
        </div>

      </div>
      <button>View More</button>
    </div>
  );
};

export default Blog;
