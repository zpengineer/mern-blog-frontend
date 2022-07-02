import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';

// import SecondaryNav from "components/SecondaryNav";

const Main = () => {
  return (
    <Grid item={true} xs={16} md={10} sx={{ padding: 0 }}>
      {/* <SecondaryNav /> */}
      <Outlet />
    </Grid>
  );
};

export default Main;
