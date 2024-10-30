import React from 'react'
import { Link } from 'react-scroll'
import './TopContents.css'

const TopContents = () => {
  return (
    <div className='topcontent'>
      <div className="topcontent__container">
        <h1>Naveenkumar</h1>
        <p>A professional Web and App Developer</p>
        <a href="">
          <button>Download CV</button>
        </a>
        <Link To="projects" smooth={true} duration={500}>
          <button>
            My Work
          </button>
        </Link>
      </div>

    </div>
  )
}

export default TopContents
