import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Link, Button } from '@chakra-ui/react';

const SecondaryNav = ({ disabledNav }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Box as="nav" display={disabledNav ? 'none' : 'flex'} marginBottom="12px">
        <List display="flex">
          <ListItem marginRight="8px">
            <Button
              as={NavLink}
              end
              to="/"
              colorScheme="pink"
              variant="outline"
              _activeLink={{
                fontWeight: 'bold',
                bg: 'pink.300',
                color: 'white',
              }}
            >
              Relevant
            </Button>
          </ListItem>
          <ListItem marginRight="8px">
            <Button
              as={NavLink}
              end
              to="/popular"
              colorScheme="pink"
              variant="outline"
              _activeLink={{
                fontWeight: 'bold',
                bg: 'pink.300',
                color: 'white',
              }}
            >
              Popular
            </Button>
          </ListItem>
          {isLoggedIn && (
            <ListItem>
              <Button
                as={NavLink}
                end
                to="/subscription"
                colorScheme="pink"
                variant="outline"
                _activeLink={{
                  fontWeight: 'bold',
                  bg: 'pink.300',
                  color: 'white',
                }}
              >
                Subscription
              </Button>
            </ListItem>
          )}
        </List>
      </Box>
    </>
  );
};

export default SecondaryNav;
