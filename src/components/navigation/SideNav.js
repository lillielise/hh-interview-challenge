import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNav = props => {

  // TODO: https://www.cs.rit.edu/~ncs/color/t_convert.html
  // TODO: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  return (
    <div className="side-nav">
      <ul id="side-nav-list">
        <Link
          to={{ pathname: '/details', state: { comingFromSelected: false } }}
          id="random-color-button"
        >
          Random Color
        </Link>
        <Link
          to={{ pathname: '/details', state: { comingFromSelected: false } }}
          id="random-color-button"
        >
          Redd
        </Link>
        <li>Red</li>
        <li>Orange</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Blue</li>
        <li>Purple</li>
        <li>Brown</li>
        <li>Gray</li>
      </ul>
    </div>
  )
}

export default SideNav
