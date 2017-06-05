import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Inside from './inside.jsx'
import Buckaroo from './buckaroo.jsx'

export default class Hey extends React.Component {

  constructor(props) {
    super(props)
    this.state = {master: 'First'}
  }

  render() {
    return(
      <div>
        <div>Hey</div>
        <Buckaroo />
        <table>
          <tbody>
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
            <tr>
              <td><Inside /></td>
              <td><Inside /></td>
              <td><Inside /></td>
            </tr>
          </tbody>
        </table>
      </div>
      )
  }

}
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Hey />,
      document.body.appendChild(document.createElement('div')),
    )
  })
