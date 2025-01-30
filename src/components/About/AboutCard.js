import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hlavutelo Maluleke </span>
            from <span className="purple"> Johannesburg, South Africa.</span>
            <br />
            I am currently employed as a software developer working as a Data Engineer at CapaCiti.
            <br />
             I have completed My higher qualification from the IIE Rosebank College 
            where i studied Software Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
          <ImPointRight /> Gym 
          </li>

            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is only one thing that makes
            a dream impossible: the fear of failure"{" "}
          </p>
          <footer className="blockquote-footer">Mn'wanati</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
