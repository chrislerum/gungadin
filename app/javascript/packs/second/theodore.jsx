import React from 'react'
import ReactDOM from 'react-dom'
import Left from './left.jsx'
import Right from './right.jsx'

const style = {
  position: 'absolute',
  border: '1px solid green',
  width: 700,
  height: 150,
  top: 200,
  left: 50
}

export default class Theodore extends React.Component {

  constructor(props) {
    super(props)

    this.changeMasterWord = this.changeMasterWord.bind(this)
  }

  changeMasterWord() {
      alert(9)
    this.setState({
      master_word: 'Changed'
    })
    console.log(this.state)
  }

  render() {
    return(
      <div style={style}>
        Theodore
        <Left />
        <Right />
      </div>
      )
  }
}
