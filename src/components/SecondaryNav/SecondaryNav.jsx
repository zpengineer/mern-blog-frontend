import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import style from './SecondaryNav.module.css';

const SecondaryNav = ({ disabledNav }) => {
  return (
    <>
      <nav
        className={style.navHeader}
        style={{ display: disabledNav ? 'none' : 'flex' }}
      >
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
    </>
  );
};

export default SecondaryNav;
