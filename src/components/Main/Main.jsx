import { NavLink, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import style from './Main.module.css';

const Main = () => {
  return (
    <Grid xs={16} md={10} sx={{ paddingTop: 0 }}>
      <nav className={style.navHeader}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Button
              component={NavLink}
              to="/"
              sx={{
                color: '#58006E',
                '&:hover': { backgroundColor: '#ECD0F3' },
              }}
            >
              Relevant
            </Button>
          </li>
          <li className={style.navItem}>
            <Button
              component={NavLink}
              to="popular"
              sx={{
                color: '#58006E',
                '&:hover': { backgroundColor: '#ECD0F3' },
              }}
            >
              Popular
            </Button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </Grid>
  );
};

export default Main;
