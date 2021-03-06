import React from 'react'
import './TopNav.css'
import { history } from '../../App'

const TopNav = props => {
  function validateColor(color) {
    let regex = /^#(?:[0-9a-fA-F]{6})$/
    return regex.test(color)
  }

  function handleChange(event) {
    if (window.location.pathname !== '/details') {
      const searchValue = event.target.value
      let newColors = []
      props.originalHexColors.forEach(color => {
        if (color.includes(searchValue)) {
          newColors.push(color)
        }
      })
      props.callback(newColors)
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      const color = event.target.value

      if (validateColor(color) === true) {
        history.push({
          pathname: '/details',
          state: {
            comingFromSelected: true,
            colorSelected: color,
          },
        })
      } else {
        alert('Please Enter a Valid Hex Code example: #03badd')
      }
    }
  }

  return (
    <div className="top-nav">
      <h1>Color Swatches</h1>
      <input
        id="search-button"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  )
}

export default TopNav
