import './NotFound.css'
import image from '../assets/notFound.svg'

const NotFound = () => {
  return <div className="notFound">
    <h1>PAGE <span>NOT</span> FOUND</h1>
  <img src={image} alt="" />
  </div>;
};

export default NotFound;
