import React from 'react'
import { Element } from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Contact.css"
const Contact = () => {
  return (
    <Element className="contact" name="contact">
        <h1>Contact</h1>
        <div className="contact__container">
            <p>Email: <span>nk946432@gmail.com</span></p>
            <p>Github Username: <span>Naveenkumar-R96</span></p>
            <div className="contact__icons">
           <a href="https://github.com/Naveenkumar-R96">
            <FaGithub/>
            </a>
             <a href="https://www.linkedin.com/in/naveen-kumar-1361252b7/">
               <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/iam_naveen_17/">
                <FaInstagram/>
            </a>
            
        </div>
        </div>
        
    </Element>
  )
}

export default Contact
