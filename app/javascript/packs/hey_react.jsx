import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Inside from './inside.jsx'
import Buckaroo from './buckaroo.jsx'

const style = {
  color: 'blue'
}

const Hey = props => (
  <div>
    <div>Hey {props.name}!</div>
    <Buckaroo />
    <table>
      <tbody>
        <tr>
          <td style={style}><Inside /></td>
          <td><Inside /></td>
          <td><Inside /></td>
        </tr>
        <tr>
          <td><Inside /></td>
          <td><Inside /></td>
          <td><Inside /></td>
        </tr>
        <tr>
          <td><Inside /></td>
          <td><Inside /></td>
          <td><Inside /></td>
        </tr>
      </tbody>
    </table>
  </div>
  )

Hey.defaultProps = {
  name: 'John'
}

Hey.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hey name="Boz" />,
    document.body.appendChild(document.createElement('div')),
  )
})
