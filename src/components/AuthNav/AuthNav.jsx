import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AuthNav = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        component={Link}
        to="/login"
        variant="text"
        sx={{ color: '#fff' }}
      >
        Log in
      </Button>
      <Button
        component={Link}
        to="/register"
        variant="outlined"
        sx={{ color: '#fff', outline: '1px solid #fff' }}
      >
        Create account
      </Button>
    </Stack>
  );
};

export default AuthNav;
