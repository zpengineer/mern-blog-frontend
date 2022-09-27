import { Outlet, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SecondaryNav from 'components/SecondaryNav';
// import style from './Main.module.css';

const Main = () => {
  const { postId, tag } = useParams();
  const disabledNav = postId || tag ? true : false;

  return (
    <Grid xs={16} md={10} sx={{ paddingTop: 0 }}>
      <SecondaryNav disabledNav={disabledNav} />
      <Outlet />
    </Grid>
  );
};

export default Main;
