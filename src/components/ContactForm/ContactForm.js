import React, { Component } from "react";

import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleInput = (e) => {
    // console.log(this.props);
    this.setState({ [e.target.name.toLowerCase()]: e.target.value });
  };
  

  render() {
    return (
      <form onSubmit={this.props.submit}>
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
    );
  }
}

export default ContactForm;
