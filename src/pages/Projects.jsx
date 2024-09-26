/* eslint-disable react/prop-types */
import { useState } from "react";
import ProjectBox from "../component/ProjectBox";
import "./Projects.css";


const Projects = ({projects}) => {
  const [pageNumber, setPageNumber] = useState({
    from: 0,
    to: 10,
  });

  return (
    <div className="projectPage">
      <div className="top">
        <h1>
          Our <span>Project</span>
        </h1>
        <p>
          At InnoWare,we Offer a comperhensive range of services designed to
          help businesses thrive in the digital age
        </p>
      </div>
      <div className="content">
        {projects &&
          projects.map((project) => {
            if (project.id > pageNumber.from && project.id <= pageNumber.to) {
              return <ProjectBox key={project.id} project={project} />;
            }
          })}
      </div>
      <div className="show-next">
        <span
        style={{
          backgroundColor: pageNumber.to === 10  &&' var(--main-color)',
          color:pageNumber.to === 10  && '#fff',
          border: pageNumber.to === 10  &&'2px solid #b0b8c2',
        }}
          data-num="10"
          onClick={(e) => {
            setPageNumber({ from: 0, to: +e.target.dataset.num });
          }}
        >
          1
        </span>
        <span
          style={{
            backgroundColor: pageNumber.to === 20  &&' var(--main-color)',
            color:pageNumber.to === 20  && '#fff',
            border: pageNumber.to === 20  &&'2px solid #b0b8c2',
          }}
          data-num="20"
          onClick={(e) =>
            setPageNumber({ from: 10, to: +e.target.dataset.num })
          }
        >
          2
        </span>
        <span
        style={{
          backgroundColor: pageNumber.to === 30  &&' var(--main-color)',
          color:pageNumber.to === 30  && '#fff',
          border: pageNumber.to === 30  &&'2px solid #b0b8c2',
        }}
          data-num="30"
          onClick={(e) =>
            setPageNumber({ from: 20, to: +e.target.dataset.num })
          }
        >
          3
        </span>
      </div>
    </div>
  );
};

export default Projects;