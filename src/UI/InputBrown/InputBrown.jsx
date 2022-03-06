import React from 'react'
import classes from './InputBrown.module.css'

const InputBrown = ({ ...props }) => {
  return <input className={classes.inputBrown} {...props} />
}

export default InputBrown
