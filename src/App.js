import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: "",
    phone:"",
    filter: ''
  };


  handleInput=(e)=>{
    this.setState(
    //  console.log(e.target.name)
      { [e.target.name.toLowerCase()]:e.target.value}
     )}
  
  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    this.setState(prevState =>( {
      contacts:[...prevState.contacts,{name:  this.state.name,
        number:this.state.phone}]
       
      
      }
      

      
      ));
    
      // this.resetForm()
      
    
  }
   
//  resetForm=()=>{
//  this.setState({

//  }
//  )}
    
handleFilter=(e)=>{
  this.setState({filter : e.currentTarget.value})
}



  render() {
    const { name, contacts, filter } = this.state;
    const normalaizedFilter=this.state.filter.toLowerCase()
    const filteredNames=this.state.contacts.filter(el=>el.name.toLowerCase().includes(normalaizedFilter))
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input name="name" onChange={this.handleInput} type="text" />
          
          </label>
          <label>
            Phone
          <input name="phone" onChange={this.handleInput} type="text" />
          </label>
          <button type="submit">Add contact</button>
        </form>
        
        <div>
          <h2>Contacts</h2>
          <input name="filter" value={filter} onChange={this.handleFilter} type="text" />
          <ul>
            {filteredNames.map(el=>
            <li key={el.id}>{el.name} : {el.number}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
