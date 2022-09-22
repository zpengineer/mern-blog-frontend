import PostsSkeleton from 'components/Skeleton';
import Post from 'components/Post';

import { useRelevantPostsQuery } from 'redux/posts/postsApi';

import style from './RelevantPosts.module.css';

const RelevantPosts = () => {
  const { data, isSuccess, isLoading } = useRelevantPostsQuery();
  const postItems = data?.posts?.map(post => (
    <Post key={post._id} post={post} />
  ));

  if (isLoading) {
    return (
      <>
        <PostsSkeleton />
      </>
    );
  }

  return <>{isSuccess && <div className={style.posts}>{postItems}</div>}</>;
};

export default RelevantPosts;
