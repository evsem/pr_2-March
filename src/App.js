import React, { useEffect, useMemo, useState } from 'react'
import PostService from './API/PostService'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { useFetching } from './Hooks/useFetching'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'
import LoaderGrey from './UI/LoaderGrey/LoaderGrey'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Japan', body: 'Country in Asia' },
    { id: 2, title: 'Spain', body: 'Country in Europe' },
    { id: 3, title: 'France', body: 'Country in Europe' },
    { id: 4, title: 'Canada', body: 'Country in America' },
    { id: 5, title: 'Russia', body: 'Country in Europe' },
    { id: 6, title: 'China', body: 'Country in Asia' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })
  let searchedAndSelectedPosts = usePosts(filter.sort, filter.query, posts)
  let [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    let posts = await PostService.getAll()
    setPosts(posts)
  })

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <Filter filter={filter} setFilter={setFilter} />

      {postError && <h2 className="App_titleWarning">Error: {postError}</h2>}

      {isPostLoading ? (
        <div className="App_containerFromLoader">
          <LoaderGrey />
        </div>
      ) : (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      )}

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
