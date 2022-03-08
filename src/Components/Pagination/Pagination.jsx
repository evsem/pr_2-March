import React from 'react'
import classes from './Pagination.module.css'
import ButtonBrown from '../../UI/ButtonBrown/ButtonBrown'
import { getPagesArray } from '../../Utils/Pages'

const Pagination = ({ totalPages, changePost }) => {
  let pagesArray = getPagesArray(totalPages)
  return (
    <div className={classes.paginationWrapper}>
      {pagesArray.map((p) => (
        <ButtonBrown onClick={() => changePost(p)} key={p}>
          {p}
        </ButtonBrown>
      ))}
    </div>
  )
}

export default Pagination
