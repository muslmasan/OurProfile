/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import img from "../assets/project.jpg";
import "./ProjectDetails.css";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <div className="projectDetails">
      <div className="top">
        <h1>{project.title}</h1>
        <p>{project.content}</p>
      </div>
      <div className="content">
        <div className="images">
          <img src={img} alt="project image" />
          <img src={img} alt="project image" />
        </div>
        <div className="details">
          <h2>Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            corrupti, eligendi, exercitationem quos ipsum voluptates minima
            praesentium optio assumenda facere porro fugiat ducimus laboriosam.
            Est provident velit et in voluptatibus iste dicta. Reiciendis fugit
            commodi ab culpa tempore officiis rem praesentium veniam. Eos magni
            inventore obcaecati at minus necessitatibus tempora?
          </p>
          <button>Show Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
