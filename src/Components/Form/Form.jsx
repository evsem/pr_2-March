import React, { useState } from 'react'
import classes from './Form.module.css'
import InputBrown from '../../UI/InputBrown/InputBrown'
import ButtonBrown from '../../UI/ButtonBrown/ButtonBrown'

const Form = ({ addPost_Func }) => {
  let [param, setParam] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...param,
      id: Date.now(),
    }
    addPost_Func(newPost)
    setParam({ title: '', body: '' })
  }
  return (
    <form className={classes.wrapper}>
      <InputBrown
        placeholder="Title"
        value={param.title}
        onChange={(e) => setParam({ ...param, title: e.target.value })}
      />
      <InputBrown
        placeholder="Body"
        value={param.body}
        onChange={(e) => setParam({ ...param, body: e.target.value })}
      />
      <ButtonBrown onClick={addNewPost}>Add post</ButtonBrown>
    </form>
  )
}

export default Form
