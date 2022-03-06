import { useMemo } from 'react'

export const useSortedPosts = (sort, posts) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (sort, query, posts) => {
  let sortedPosts = useSortedPosts(sort, posts)

  const searchedAndSelectedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    )
  }, [query, sortedPosts])

  return searchedAndSelectedPosts
}
