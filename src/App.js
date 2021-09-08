import logo from './logo.svg';
import './App.css';
import React from 'react';
import db from './db';
import Student from './student';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      info: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleDisplay = this.handleDisplay.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClick(event) {
    const stud = new Object()
    stud.name=this._name.value
    stud.roll=this._roll.value
    stud.age = this._age.value

    db.push(stud)

    console.log(db)
  }

  handleDisplay(event){
    this.setState(prev => {
      return {
      info: !prev.info
      }
    })
  }

  handleDelete(event){
    db.pop()
  }

  handleClear(event) {
    this._name.value = ""
    this._roll.value = ""
    this._age.value = ""
  }

  render(){
    const list = db.map(item => <Student details={item} />)
    return (
      <div>
        <h1>Personal Details Form</h1>
        <hr/>
        <h2>Enter the name:</h2>
        <input type="text" ref={value => this._name=value} />
        <h2>Enter the roll:</h2>
        <input type="text" ref={value => this._roll=value} />
        <h2>Enter your age:</h2>
        <input type="text" ref={value => this._age=value} />
        <br/>
        <button onClick={this.handleClick}>Submit</button>
        <br/>
        <button onClick={this.handleDisplay}>display</button>
        <br/>
        <button onClick={this.handleDelete}>Delete</button>
        <br/>
        <button onClick={this.handleClear}>Clear</button>
        <hr/>
        {this.state.info ? <h2>Press "Display" to see the results.</h2>: <div>{list}</div>}
      </div>
    )
  }
}

export default App;
