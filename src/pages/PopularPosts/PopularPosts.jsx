import { usePopularPostsQuery } from 'redux/posts/postsApi';

import Post from 'components/Post';
import PostsSkeleton from 'components/Skeleton';

import style from './PopularPosts.module.css';

const PopularPosts = () => {
  const { data, isLoading, isSuccess } = usePopularPostsQuery();
  const postItems = data?.posts?.map(post => (
    <Post key={post._id} post={post} />
  ));

  return (
    <>
      {isLoading && <PostsSkeleton />}

      {isSuccess && <div className={style.posts}>{postItems}</div>}
    </>
  );
};

export default PopularPosts;
