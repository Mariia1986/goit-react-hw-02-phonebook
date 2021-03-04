import React from 'react'
import s from './ContactList.module.css'
import PropTypes from "prop-types"

const ContactList=({filteredNames, deleteItem})=>{
    

return(
    
    <ul >
    {filteredNames.map((el) => (
      <li key={el.id}>
        <p> {el.name} : {el.number}</p>
        <button  type="button" onClick={()=>deleteItem(el.id)}>Delete</button>
       
      </li>
    ))}
  </ul>

)

}


export default ContactList