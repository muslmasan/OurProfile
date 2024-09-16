import img5 from '../assets/about.svg'
import img4 from '../assets/img4.svg'

const About = () => {
  return (
    <div className="about">
      <div className="title">

        <h1><span>About</span> Us</h1>
      </div>
        <div className="content">
            <div className="info">
                <img src={img4} alt="" />
                <div className="more">
                    <h2>InnoWare</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed rem qui incidunt ipsum, dolore dicta tenetur earum ea consequuntur repellat nulla corporis, error laborum id perspiciatis dolorum dignissimos a.</p>
                </div>
            </div>
            <img className='img' src={img5} alt="" />
        </div>
    </div>
  )
}

export default About