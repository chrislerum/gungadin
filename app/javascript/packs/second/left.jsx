import React from 'react'
import ReactDOM from 'react-dom'

const left_style = {
  position: 'absolute',
  border: '1px solid black',
  width: 100,
  height: 50,
  top: 50,
  left: 100
}

export default class Left extends React.Component {
  render() {
    return(
      <div style={left_style}>Left</div>
    )
  }
}
