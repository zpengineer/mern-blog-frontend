import { useSelector } from 'react-redux';

import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';

import style from './Comments.module.css';

const Comments = () => {
  const postComments = useSelector(state => state.postComments.comments);

  return (
    <section className={style.section}>
      <header className={style.header}>
        <h2
          className={style.title}
        >{`Top comments (${postComments.length})`}</h2>
      </header>

      <CommentsForm />
      <CommentsList postComments={postComments} />
    </section>
  );
};

export default Comments;
