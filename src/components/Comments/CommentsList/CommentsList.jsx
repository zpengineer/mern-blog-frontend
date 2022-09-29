import UserInfo from 'components/UserMenu/UserInfo';
import style from './CommentsList.module.css';

const CommentsList = ({ postComments }) => {
  const commentsItems = postComments.map(comment => (
    <li key={comment._id} id={`#${comment._id}`} className={style.item}>
      <UserInfo
        fullName={comment.owner.fullName}
        avatarURL={comment.owner.avatarURL}
        createdAt={comment.createdAt}
      />
      {comment.content}
    </li>
  ));

  return (
    <ul key={postComments._id} className={style.list}>
      {postComments && commentsItems}
    </ul>
  );
};

export default CommentsList;
