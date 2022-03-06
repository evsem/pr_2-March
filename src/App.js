import React, { useState } from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Japan', body: 'Country in Asia' },
    { id: 2, title: 'Spain', body: 'Country in Europe' },
    { id: 3, title: 'France', body: 'Country in Europe' },
    { id: 4, title: 'Canada', body: 'Country in America' },
    { id: 5, title: 'Russia', body: 'Country in Europe' },
    { id: 6, title: 'China', body: 'Country in Asia' },
  ])

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      {posts.length ? (
        <List posts={posts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarningNoPosts">No posts</h2>
      )}
    </div>
  )
}

export default App
