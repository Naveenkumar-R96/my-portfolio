import React from 'react'
import { Element } from 'react-scroll'
import skilling from "../../assets/Screenshot (14).png"
import "./SkillContainer.css"
import LinearProgress from '@mui/material/LinearProgress';

const SkillContainer = () => {
  return (
    <Element className='skillContainer' name='skills'>
      <div className="skillContainer__image">
        <img src={skilling} alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLS SET</h2>
        <div className="skillContainer__skillset">
          <h5>React.js</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant='determinate' value={90} />
          </div>
          <h5>JavaScript</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant='determinate' value={85} />
          </div>
          <h5>Python</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant='determinate' value={65} />
          </div>
          <h5>CSS</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant='determinate' value={95} />
          </div>
          <h5>HTML5</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant='determinate' value={98} />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default SkillContainer
