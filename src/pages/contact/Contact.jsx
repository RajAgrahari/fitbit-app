import "./contact.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram} from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, augue ac laoreet ultricies,
        nulla velit elementum lorem,at aliquam ante leo eu risus. Duis quis magna leo. Suspendisse potenti.
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:rajagri1682003@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
            <a href="https://www.instagram.com/__raj_agrahari__/" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/raj-agrahari-36b656213/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact