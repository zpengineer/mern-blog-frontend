import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { getUserId } from 'redux/authorization/auth-selectors';
import { useDeletePostMutation } from 'redux/posts/postsApi';
import UserInfo from 'components/UserMenu/UserInfo';
import PostsSkeleton from 'components/Skeleton/Skeleton';
import style from './Post.module.css';

const Post = ({ post, children, isFullPost }) => {
  const [deletePost] = useDeletePostMutation();
  const userId = useSelector(getUserId);
  const isUser = post.owner._id === userId;

  if (!post) {
    return (
      <>
        <PostsSkeleton />
      </>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <img
            src={post.imgUrl}
            alt="card__image"
            className={style.cardImage}
          />
          {isUser && (
            <ul className={style.editList}>
              <li className={style.editItem}>
                <NavLink to="#">
                  <EditIcon color="success" sx={{ fontSize: 25 }} />
                </NavLink>
              </li>

              <li className={style.editItem}>
                <button
                  type="button"
                  onClick={() => deletePost(post._id)}
                  className={style.buttonDelete}
                >
                  <DeleteIcon sx={{ fontSize: 25, color: 'red' }} />
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className={style.cardWrapper}>
          <UserInfo {...post.owner} createdAt={post.createdAt} />
          <div className={style.cardBody}>
            <ul className={style.tagList}>
              {post?.tags?.map(tag => (
                <li className={style.tagItem}>
                  <NavLink
                    to="#"
                    className={style.tagLink}
                  >{`#${tag}`}</NavLink>
                </li>
              ))}
            </ul>
            <h3 className={style.title}>
              <NavLink to={`posts/${post._id}`} className={style.titleLink}>
                {post.title}
              </NavLink>
            </h3>
          </div>
          <div
            className={style.cardFooter}
            style={{ display: isFullPost ? 'none' : 'flex' }}
          >
            <ul className={style.listFooter}>
              <li className={style.itemFooter}>
                <span className={style.icon}>
                  <VisibilityIcon fontSize="small" />
                </span>
                <p className={style.text}>{post.viewsCount}</p>
              </li>

              <li className={style.itemFooter}>
                <span className={style.icon}>
                  <CommentIcon fontSize="small" />
                </span>
                <p className={style.text}>{post.viewsCount}</p>
              </li>
            </ul>
          </div>
          {children && <div className={style.content}>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Post;
