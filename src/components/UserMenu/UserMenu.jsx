import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useLogoutMutation } from 'redux/authorization/authApi';
import { logOut } from 'redux/authorization/auth-slice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
    dispatch(logOut());
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        component={Link}
        to="/add-post"
        variant="text"
        sx={{ color: '#fff', outline: '1px solid #fff' }}
      >
        Create post
      </Button>
      <Button
        variant="outlined"
        sx={{ color: '#fff' }}
        onClick={() => handleLogout()}
      >
        Log out
      </Button>
    </Stack>
  );
};

export default UserMenu;
