import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js'
import UserOutput from '../components/UserOutput/UserOutput.js'
import UserInput from '../components/UserInput/UserInput.js'
import Validation from '../components/Validation/Validation.js'
import Chars from '../components/Chars/Chars.js'
import Cockpit from '../components/Cockpit/Cockpit.js'

class App extends Component {
  state = {
    persons: [
      {id: 'dfaje', name: 'Max', age:28},
      {id: '3ldoc', name: 'Manu', age:29},
      {id: 'ejr3o', name: 'Stephanie', age:26}
    ],
    userOutputs:[
      {username:'Jessie'},
      {username:'Mark'},
      {username:'Van'}
    ],
    showPerson: false,
    userInput: ''
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //create a copy of the original array
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
   this.setState({
      persons:persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];// should be an array
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });

  }

  inputChangedHandler = (event) => {
    this.setState({
      userOutputs:[
        {username: event.target.value},
        {username: event.target.value},
        {username: event.target.value}
      ],
      userInput:event.target.value
    })
  }

  inputFocusedHandler = (event) => {
    this.setState({
      userOutputs:[
        {username: ''},
        {username: ''},
        {username: ''}
      ]
    })
  }
  
  deleteCharHandler = (index) => {
    const letters = this.state.userInput.split('');
    letters.splice(index, 1);
    const updatedLetters = letters.join('');
    this.setState({
      userInput: updatedLetters
    });
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    let persons = null;
    if (this.state.showPerson){
      persons =  <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler} />;
    }



    let chars = null;
    if (this.state.userInput != null){
      const letters = this.state.userInput.split('')
      chars = <Chars
              chars={letters} 
              clicked={this.deleteCharHandler} />;
    }



    console.log(this.state.userInput.value);

    return (
      <div className={classes.App}>
        <Cockpit 
          showPerson={this.state.showPerson} 
          length={this.state.persons.length}
          clicked={this.toggleNameHandler} />
        {persons}
        <UserOutput username={this.state.userOutputs[0].username} />
        <UserOutput username={this.state.userOutputs[1].username} />
        <UserOutput username={this.state.userOutputs[2].username} />
        <UserInput changed={this.inputChangedHandler} focused={this.inputFocusedHandler} value={this.state.userInput} />
        <Validation length={this.state.userInput.length} />
        {chars}
      </div>
    );
    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, 'I\'m a React App'));
  }
}

export default App;
