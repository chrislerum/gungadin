import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Inside from './inside.jsx'
import Buckaroo from './buckaroo.jsx'

export default class Hey extends React.Component {

  constructor(props) {
    super(props)
    this.state = {master: 'First'}

    this.changeMaster = this.changeMaster.bind(this)
  }

  changeMaster() {
    this.setState({master: 'Second'})
  }

  render() {
    return(
      <div>
        <div>Hey</div>
        <Buckaroo />
        <table>
          <tbody>
            <tr>
              <td>{this.state.master}</td>
              <td><Inside value={this.state.master} /></td>
              <td><button onClick={this.changeMaster}>Change Master</button></td>
            </tr>
            <tr>
              <td><Inside value={this.state.master} /></td>
              <td><Inside value={this.state.master} /></td>
              <td><Inside value={this.state.master} /></td>
            </tr>
            <tr>
              <td><Inside value={this.state.master} /></td>
              <td><Inside value={this.state.master} /></td>
              <td><Inside value={this.state.master} /></td>
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
