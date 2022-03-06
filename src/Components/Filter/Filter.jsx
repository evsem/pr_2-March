import React from 'react'
import InputBrown from '../../UI/InputBrown/InputBrown'
import SelectBrown from '../../UI/SelectBrown/SelectBrown'
import classes from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputBrown
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectBrown
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        value={filter.sort}
        defaultValue="Sorting"
      />
    </div>
  )
}

export default Filter
