import { useMemo } from 'react'
import { Post } from "../types/post";

export const useFilter = (posts: Post[], selectedSort: '' | 'title' | 'body', searchQuery:string) => {
   const sortedPosts = useMemo(() => {
      if (selectedSort) {
        return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
      }
      return posts;
    }, [posts, selectedSort]);
    const filterAndSortedPosts = useMemo((): Post[] => {
      return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [sortedPosts, searchQuery]);
   return  filterAndSortedPosts
}
