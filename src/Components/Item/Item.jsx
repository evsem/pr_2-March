import React from 'react'
import ButtonBrown from '../../UI/ButtonBrown/ButtonBrown'
import classes from './Item.module.css'

const Item = ({ post, number, removePost }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.container_titlePost}>
          {number}. {post.title}
        </h3>
        <p className={classes.container_infoAboutPost}>{post.body}</p>
      </div>
      <ButtonBrown onClick={() => removePost(post)}>Delete</ButtonBrown>
    </div>
  )
}

export default Item
