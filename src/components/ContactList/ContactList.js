import React from 'react'
import s from './ContactList.module.css'
import PropTypes from "prop-types"

const ContactList=({filteredNames})=>{
    

return(
    
    <ul >
    {filteredNames.map((el) => (
      <li key={el.id}>
        {el.name} : {el.number}
      </li>
    ))}
  </ul>

)

}


export default ContactList