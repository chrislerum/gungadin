import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


export default class Inside extends React.Component {

  constructor(props) {
    super(props)
    this.state = {when: 'Now!'}

    this.activateLasers = this.activateLasers.bind(this)
  }

  activateLasers() {
    this.setState({when: 'Soon!'})
    console.log(this.props)
  }

  render() {
    return(
    <div>
      <div>Inside, master is {this.props.value}.</div>
      <button className='button' onClick={this.activateLasers}>Activate Lasers {this.state.when}</button>
    </div>
    )
  }
}
