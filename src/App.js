import React, { useMemo, useState } from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'
import InputBrown from './UI/InputBrown/InputBrown'
import SelectBrown from './UI/SelectBrown/SelectBrown'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Japan', body: 'Country in Asia' },
    { id: 2, title: 'Spain', body: 'Country in Europe' },
    { id: 3, title: 'France', body: 'Country in Europe' },
    { id: 4, title: 'Canada', body: 'Country in America' },
    { id: 5, title: 'Russia', body: 'Country in Europe' },
    { id: 6, title: 'China', body: 'Country in Asia' },
  ])
  let [selectedSort, setSelectedSort] = useState('')
  let [searchQuery, setSearchQuery] = useState('')

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }, [selectedSort, posts])
  const searchedAndSelectedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    )
  }, [searchQuery, sortedPosts])
  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <InputBrown
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SelectBrown
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
        onChange={sortPosts}
        value={selectedSort}
        defaultValue="Sorting"
      />

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarningNoPosts">No posts</h2>
      )}
    </div>
  )
}

export default App
