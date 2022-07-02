import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

const SecondaryNav = () => {
  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 210,
          display: 'flex',
          padding: '0',
          margin: '0',
          paddingTop: 1,
        }}
      >
        <ListItem sx={{ padding: '0', margin: '0' }}>
          <Button component={NavLink} to="/" color="secondary">
            Relevant
          </Button>
        </ListItem>

        <ListItem sx={{ padding: '0', margin: '0' }}>
          <Button component={NavLink} to="/popular" color="secondary">
            Popular
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default SecondaryNav;
