import React from 'react'
import ReactDOM from 'react-dom'
import Abby from './abby.jsx'
import Margo from './margo.jsx'
import Theodore from './theodore.jsx'


const style = {
  position: 'absolute',
  border: '1px solid black',
  width: 800,
  height: 400,
  top: 100,
  left: 100
}

const title_style = {
  textAlign: 'center'
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      master_word: 'First'
    }

    this.changeMe = this.changeMe.bind(this)
  }

  changeMe() {
    this.setState({master_word: 'Different'})
  }

  render() {
    return(
      <div style={style}>
        <div style={title_style}>Master Word: {this.state.master_word}<button onClick={this.changeMe}>Change Me</button></div>
        <Abby />
        <Margo />
        <Theodore />
      </div>
      )
}
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
