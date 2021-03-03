import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };


  handleInput=(e)=>{
    this.setState(
      // console.dir(e.target)
      { name:e.target.value}
     )}
  
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState =>( {
      contacts:
      [ ...prevState.contacts, this.state.name]}
      ));
    
      this.resetForm()
      
    
  }
   
//  resetForm=()=>{
//  this.setState({
//   event.target.elements.name.value=''
//  }
//  )}
    
  

  render() {
    const { name, contacts } = this.state;

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input name="name" onChange={this.handleInput} type="text" />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(el=>
            <li key={uuidv4()}>{el}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
