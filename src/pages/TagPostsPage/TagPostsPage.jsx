import { useParams } from 'react-router-dom';

import PostsSkeleton from 'components/Skeleton';
import Post from 'components/Post';
import { useGetAllPostsByTagQuery } from 'redux/posts/postsApi';

const TagPostsPage = () => {
  const { tag } = useParams();
  const { data, isLoading, isSuccess } = useGetAllPostsByTagQuery(tag);

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

  return (
    <>
      {isSuccess && (
        <div>
          <h2>{`#${tag}`}</h2>
          {postItems}
        </div>
      )}
    </>
  );
};

export default TagPostsPage;
