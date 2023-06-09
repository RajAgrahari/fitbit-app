import { Link } from "react-router-dom"
import Image from "../images/main_header.png"

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
              We offer group fitness classes, personal training, and 24/7 access to our lab.
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Header Main Image"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;