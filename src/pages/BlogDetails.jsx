import { useLocation } from "react-router-dom";
import img from "../assets/project.jpg";
import "./Blog.css";
const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state;
  return (
    <div className="blog-details">
      <img src={img} alt="" />
      <div className="info">
        <h2>{blog.date}</h2>
        <h3>{blog.title}</h3>
        <p>{blog.content}</p>
      </div>
      <div className="more">
        <span>
          {`${blog.views} Views`}  
          
        </span>
        <span>
          {`${blog.likes} Likes`}
          
        </span>
      </div>
    </div>
  );
};

export default BlogDetails;
