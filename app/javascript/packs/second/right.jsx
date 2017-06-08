import React from 'react'
import ReactDOM from 'react-dom'

const right_style = {
  position: 'absolute',
  border: '1px solid black',
  width: 100,
  height: 50,
  top: 50,
  left: 400
}

export default class Right extends React.Component {
  render() {
    return(
      <div style={right_style}>
        Right
        <button onClick={this.changeMasterWord}>Change Master Word</button>
      </div>
    )
  }
}
