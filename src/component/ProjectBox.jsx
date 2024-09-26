/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import img from "../assets/project.jpg";

const BlogBox = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-content">
      <img
        onClick={() => navigate(`/projects/${project.id}`)}
        src={img}
        alt=""
      />
    </div>
  );
};

export default BlogBox;
