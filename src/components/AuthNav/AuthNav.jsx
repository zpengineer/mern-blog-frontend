import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <>
      <Button
        as={Link}
        fontSize={'sm'}
        fontWeight={400}
        textTransform="uppercase"
        variant={'link'}
        to="/login"
      >
        Sign In
      </Button>
      <Button
        as={Link}
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        textTransform="uppercase"
        color={'white'}
        bg={'pink.400'}
        to="/register"
        _hover={{
          bg: 'pink.300',
        }}
      >
        Create account
      </Button>
    </>
  );
};

export default AuthNav;
