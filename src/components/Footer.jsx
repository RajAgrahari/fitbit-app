import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaLinkedin, FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
          <pre>3453 MG Marg,Uttar Pradesh,IN 211006</pre>
          <pre>+1-540-645-5364</pre>
          </p>
          <div className="footer_socials">
            <a href="https://www.linkedin.com/in/raj-agrahari-36b656213/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
            <a href="https://twitter.com/RajAgri1682003" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
            <a href="https://www.instagram.com/__raj_agrahari__/" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a> 
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insight</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2023 Raj Dev &copy; All Right Reserverd</small>
      </div>
    </footer>
  )
}

export default Footer;