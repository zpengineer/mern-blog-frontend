import Grid from '@mui/material/Grid';

import PostTags from './PostTags';
import RecentComments from './RecentComments';

const SideBar = () => {
  return (
    <Grid xs={16} md={6} sx={{ paddingTop: 0, paddingLeft: 2 }}>
      <PostTags />
      <RecentComments />
    </Grid>
  );
};

export default SideBar;
