import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';

import geekLove from '../../img/geek-love.jpg';

const RelevantPosts = () => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={geekLove}
          alt="geek love"
        />

        <CardHeader
          avatar={<Avatar sx={{ bgcolor: 'red' }} aria-label="avatar" />}
          title="Oleh Fedorov"
          subheader="Jun 27, 2022"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: '12px' }}
          >
            #tag1, #tag2, #tag3
          </Typography>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <List sx={{ display: 'flex' }}>
                <ListItem>
                  <ListItemIcon>
                    <VisibilityIcon
                      fontSize="small"
                      sx={{ marginRight: '4px' }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="160" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CommentIcon fontSize="small" sx={{ marginRight: '4px' }} />
                  </ListItemIcon>
                  <ListItemText primary="12" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default RelevantPosts;
