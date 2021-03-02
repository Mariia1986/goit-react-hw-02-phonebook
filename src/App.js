import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
 

  render() {
  
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form>
          <label>Name
            <input name="name" type="text"/>
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
           <ul>
             
           </ul>
        </div>
      </div>
    );
  }
}

export default App;
