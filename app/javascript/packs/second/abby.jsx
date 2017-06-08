import React from 'react'
import ReactDOM from 'react-dom'

const style = {
  position: 'absolute',
  border: '1px solid blue',
  width: 200,
  height: 100,
  top: 50,
  left: 100
}

export default class Abby extends React.Component {

  constructor(props) {
    super(props)
    this.changeMasterWord = this.changeMasterWord.bind(this)
  }

  changeMasterWord() {
    this.setState({
      master_word: 'Changed by Abby'
    })
  }

  render() {
    return(
      <div style={style}>
        Abby
        <button onClick={this.changeMasterWord}>Change Master Word</button>
      </div>
    )
  }
}
