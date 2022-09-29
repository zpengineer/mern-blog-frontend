import { useParams } from 'react-router-dom';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import PostsSkeleton from 'components/Skeleton';
import { useGetPostCommentsQuery } from 'redux/comments/commentsApi';

import style from './Comments.module.css';

const Comments = () => {
  const { postId } = useParams();
  const {
    data: postComments,
    isLoading,
    isSuccess,
  } = useGetPostCommentsQuery(postId);

  return (
    <section className={style.section}>
      <header className={style.header}>
        <h2
          className={style.title}
        >{`Top comments (${postComments?.comments?.length})`}</h2>
      </header>

      <CommentsForm />
      {isLoading && <PostsSkeleton />}
      {isSuccess && <CommentsList postComments={postComments?.comments} />}
    </section>
  );
};

export default Comments;
