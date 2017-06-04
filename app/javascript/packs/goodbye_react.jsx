import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Goodbye = props => (
  <div>Goodbye {props.name}!</div>
  )

Goodbye.defaultProps = {
  name: 'Barney'
}

Goodbye.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Goodbye name='Phil' />,
    document.body.appendChild(document.createElement('div')),
  )
})
