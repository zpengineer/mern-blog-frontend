import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
// import PostsSkeleton from 'components/Skeleton';
import { useGetAllCommentsQuery } from 'redux/comments/commentsApi';

const RecentComments = () => {
  const { data, isSuccess } = useGetAllCommentsQuery();

  // console.log(data.comments);
  return (
    <Paper sx={{ padding: '12px 24px 12px 24px' }}>
      {/* {isLoading && <PostsSkeleton />} */}
      <List sx={{ width: '100%' }}>
        {isSuccess &&
          data?.comments?.map(comment => (
            <ListItem
              alignItems="flex-start"
              sx={{ padding: '0', margin: '0' }}
              key={comment._id}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={comment.owner.avatarURL} />
              </ListItemAvatar>
              <ListItemText primary={comment.owner.fullName} />
              <Link to={`/posts/${comment.post._id}`}>
                {comment.post.title}
              </Link>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default RecentComments;
