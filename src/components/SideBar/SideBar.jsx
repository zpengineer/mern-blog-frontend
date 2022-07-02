import Grid from '@mui/material/Grid';

import PostTags from './PostTags';
import RecentComments from './RecentComments';

const SideBar = () => {
  return (
    <Grid item xs={16} md={6} sx={{ padding: 0 }}>
      <PostTags />
      <RecentComments />
    </Grid>
  );
};

export default SideBar;
