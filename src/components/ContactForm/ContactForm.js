import React, { Component } from "react";

import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

const  ContactForm=({submit}) =>{
 
  return (
      <form className={s.form} onSubmit={submit}>
        <label className={s.label}>
          Name
          <input className={s.formInput} name="name"  type="text" />
        </label>
        <label  className={s.label}>
          Phone
          <input className={s.formInput} name="phone"  type="text" />
        </label>
        <button className={s.formButton} type="submit">Add contact</button>
      </form>
    );
  
}


ContactForm.propTypes={
  submit:PropTypes.func.isRequired,
  contacts:PropTypes.array.isRequired ,
}


export default ContactForm;
