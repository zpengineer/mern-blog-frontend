import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorization/auth-operations';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Stack spacing={2} direction="row">
      <Button
        component={Link}
        to="/#"
        variant="text"
        sx={{ color: '#fff', outline: '1px solid #fff' }}
      >
        Create post
      </Button>
      <Button
        variant="outlined"
        sx={{ color: '#fff' }}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Stack>
  );
};

export default UserMenu;
