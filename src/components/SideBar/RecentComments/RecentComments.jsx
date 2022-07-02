import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

const RecentComments = () => {
  return (
    <Paper sx={{ padding: '12px 24px 12px 24px' }}>
      <List sx={{ width: '100%' }}>
        <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0' }}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Author" secondary="Brunch this weekend?" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0' }}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Author" secondary="Brunch this weekend?" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0' }}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Author" secondary="Brunch this weekend?" />
        </ListItem>
      </List>
    </Paper>
  );
};

export default RecentComments;
