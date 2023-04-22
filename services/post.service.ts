import { QUERY_KEY } from '@/config/query';
import { Post } from '@/entities/post.entity';
import { API } from '@/config/api';
import { useQuery } from '@tanstack/react-query';
import { getInstance } from '@/config/axios';

export const getPosts = async (): Promise<Post[]> =>
  getInstance()
    .get(API.post.get)
    .then((res) => res.data);

export const usePosts = () => useQuery(QUERY_KEY.POSTS.ALL, getPosts);

export const usePostsSSR = async () => {
  return getInstance().get(API.post.get + 'x1');
};
