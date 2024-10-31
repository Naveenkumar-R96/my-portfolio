import React from 'react'
import { Element } from 'react-scroll'
import TopContents from '../TopContents/TopContents'
import './TopContainer.css'

const Top = () => {
  return (
    <Element name="about" className='topcontainer'>
        <TopContents/>
    </Element>
  )
}

export default Top
