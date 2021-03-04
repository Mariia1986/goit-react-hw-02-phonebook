import React from 'react'
import s from './Filter.module.css'
import PropTypes from 'prop-types'

const Filter=( {filter,search})=>{

return(
    <input
            name="filter"
            value={filter}
            onChange={search}
            type="text"
          />
)

}

export default Filter