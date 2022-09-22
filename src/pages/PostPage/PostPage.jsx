import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import { useGetOnePostQuery } from 'redux/posts/postsApi';
import { getUserId } from 'redux/authorization/auth-selectors';
import Post from 'components/Post';

const PostPage = () => {
  const { postId } = useParams();
  const userId = useSelector(getUserId);
  const { data, isSuccess } = useGetOnePostQuery(postId);

  console.log(data);

  return (
    <>
      {isSuccess && (
        <Post post={data?.posts} userId={userId} isFullPost>
          <ReactMarkdown children={data?.posts?.description} />
        </Post>
      )}
    </>
  );
};

export default PostPage;
