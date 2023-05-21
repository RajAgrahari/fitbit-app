import "./about.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
      There is no limit to what you are capable of, physically and mentally.
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
            These Dance, HIIT, and Tone workouts are led by Broadway performers, professional dancers, and former Rockettes - all trainers certified through nationally accredited organizations.  Years of pushing our limits in performance have given us an intuitive understanding of what it takes to get to a high level of athleticism and strength, which we share with our clients.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
          </div>
        </div>
      </section>
      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
            Our Vision is all about mastering form, strengthening your mind-body connection, and creating your own resistance.
Form is everything. A well-executed squat is worth more than one hundred sloppy ones. We're going to master the basics and build from there.
            </p>
            <p>
              Form looks good? Now we’re ready to develop a mind-body connection: actively thinking about the muscles you are recruiting and how to engage them properly. Being mindful of the body allows you to add intensity to any exercise. This is how you create your own resistance.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
            Our Mission is to combines the intensity of HIIT, strength training, and athletic conditioning with my love of Barre and Pilates. Put all of that together and we’re looking at some serious results.
            </p>
            <p>
            SLF takes an inclusive approach to staying in shape. These high-intensity, low-impact routines are accessible to newcomers and seasoned vets alike. Wherever you are in the world, and wherever you are on your fitness journey.
            </p>
            <p>
            No equipment? No problem. All of my workouts can be done using just your own body weight.Limited on time? No excuses. The fitness library has workouts that range from 8 minutes to one-hour; there is something for everyone.Want to take it to the next level? Add props. Light weights, ankle weights, gliders, mini bands, resistance bands, and a pilates ball are the pieces to own, but items found around your house will do the trick.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About