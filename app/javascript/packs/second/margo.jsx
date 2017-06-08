import React from 'react'
import ReactDOM from 'react-dom'

const style = {
  position: 'absolute',
  border: '1px solid red',
  width: 200,
  height: 100,
  top: 50,
  left: 500
}

export default class Margo extends React.Component {
  render() {
    return(
      <div style={style}>Margo</div>
    )
  }
}
