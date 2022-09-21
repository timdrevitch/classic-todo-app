import Navbar from "../Components/Navbar"
import { GrLinkedin, GrTwitter, GrGithub } from "react-icons/gr"
import { FC } from "react"

const About: FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div style={{ width: "75%", textAlign: "center", margin: "1rem auto" }}>
        About the Author
      </div>
      <div style={{ width: "75%", textAlign: "left", margin: "1rem auto" }}>
        Tim Drevitch
      </div>
      <div style={{ width: "75%", textAlign: "left", margin: "1rem auto" }}>
        <img
          style={{ width: "20rem", float: "left" }}
          src={require("../Assets/timdrevitch.jpeg")}
          alt="Tim Drevitch"
        />
        <div style={{ float: "left", margin: "0 2rem" }}>
          <div>
            <GrLinkedin /> Visit my LinkedIn profile
          </div>
          <div>
            <GrGithub /> Check out my projects on Github
          </div>
          <div>
            <GrTwitter /> Follow my dev Twitter account
          </div>
        </div>
      </div>
    </>
  )
}

export default About
