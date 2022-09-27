import { useSelector } from 'react-redux';

const CommentsList = () => {
  const postComments = useSelector(state => state.postComments.comments);
  console.log(postComments);
  const commentsItems = postComments.map(comment => (
    <li key={comment._id}>{comment.content}</li>
  ));

  return <ul key={postComments._id}>{postComments && commentsItems}</ul>;
};

export default CommentsList;
