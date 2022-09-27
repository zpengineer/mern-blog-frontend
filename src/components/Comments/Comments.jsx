import { useSelector } from 'react-redux';

import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';

const Comments = () => {
  return (
    <section>
      <header>
        <h2>Top comments</h2>
      </header>

      <CommentsForm />
      <CommentsList />
    </section>
  );
};

export default Comments;
