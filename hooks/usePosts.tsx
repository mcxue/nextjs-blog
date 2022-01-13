import {useEffect, useState} from 'react';
import axios from 'axios';

// type Post = {
//   id: string,
//   date: string,
//   title: string
// }

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/v1/posts').then(res => {
      setPosts(res.data);
      if (res.data.length === 0) {
        setIsEmpty(true);
      }
      setIsLoading(false);
    }, () => {
      setIsLoading(false);
    });
  }, []);
  return {
    isLoading, isEmpty, posts
  };
};

export default usePosts;