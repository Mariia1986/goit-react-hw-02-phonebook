import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

   

    this.state.contacts.forEach((el)=>{
      if (el.name.toLowerCase()===e.target.elements.name.value.toLowerCase()){
        alert(`${e.target.elements.name.value} is already in contacts`)
        return; 
      }
    
    })

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          name: e.target.elements.name.value,
          number: e.target.elements.phone.value,
          id: uuidv4(),
        },
      ],
    }
   
    
    ));

    // if (this.contacts.name===e.target.elements.name.value){
    //   alert(`${e.target.elements.name.value} is already in contacts)`)
    // }


  };


  onClickDelete=(id)=>{
this.setState(prevState=>({
  contacts:prevState.contacts.filter((el)=>el.id!==id)
}))
  }
  //  resetForm=()=>{
  //  this.setState({

  //  }
  //  )}

  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalaizedFilter = filter.toLowerCase();
    const filteredNames = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalaizedFilter)
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactForm submit={this.onHandleSubmit} contacts={contacts} />
        <div>
          <h2>Contacts</h2>
          <Filter filter={filter} search={this.handleFilter} />
          <ContactList filteredNames={filteredNames}  deleteItem={this.onClickDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
