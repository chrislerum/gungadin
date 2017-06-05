import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function activateLasers() {
  alert(9)
}

const Inside = props => (
  <div>
  <div>Inside!</div>
  <button className='button' onClick={activateLasers}>Activate Lasers</button>
    </div>
  )

export default Inside
