import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Buckaroo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {thing: 'Bobby'}

    this.changeThing = this.changeThing.bind(this)
  }

  changeThing() {
    this.setState({thing: 'Henry'})
  }

  render() {
    return(
      <div>
        hello {this.state.thing}
        <button onClick={this.changeThing}>Change Thing</button>
      </div>
      )
  }
}
