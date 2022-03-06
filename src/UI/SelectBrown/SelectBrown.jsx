import React from 'react'
import classes from './SelectBrown.module.css'

const SelectBrown = ({ value, onChange, options, defaultValue }) => {
  return (
    <select
      className={classes.selectBrown}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default SelectBrown
