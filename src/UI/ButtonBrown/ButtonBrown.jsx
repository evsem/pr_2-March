import React from 'react'
import classes from './ButtonBrown.module.css'

const ButtonBrown = ({ children, ...props }) => {
  return (
    <button className={classes.buttonBrown} {...props}>
      {children}
    </button>
  )
}

export default ButtonBrown
