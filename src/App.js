import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age:26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked !!")
    this.setState({
      persons: [
        {name: newName, age:28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age:27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Maximliam', age:28},
        {name: event.target.value, age:29},
        {name: 'Stephanie', age:26}
      ]
    })

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
       <div className="App">
        <h1>I'm a react APP</h1>
        <button style={style} 
          onClick={this.switchNameHandler.bind(this,"Max!!")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          click={this.switchNameHandler.bind(this, "Maximilian")}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangedHandler} >My hobbie: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, 'I\'m a React App'));
  }
}

export default App;
