import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { getUserIsLoggedIn } from 'redux/authorization/auth-selectors';

import SearchPostForm from './SearchPostForm';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

const MainNav = ({ isLoading }) => {
  const userIsLoggedIn = useSelector(getUserIsLoggedIn);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      width="100%"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      align={'center'}
      position="sticky"
      top="0"
      right="0"
      left="0"
      zIndex="3"
      boxShadow="sm"
    >
      <Box
        maxW="8xl"
        marginInlineStart="auto"
        marginInlineEnd="auto"
        py={{ base: 2 }}
        px={{ base: 4 }}
      >
        <Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Button
              as={Link}
              display={{ base: 'none', md: 'inline-flex' }}
              marginRight="24px"
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              to="/"
              _hover={{
                bg: 'pink.300',
              }}
            >
              GEEK
            </Button>
            <SearchPostForm />
          </Flex>

          <Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={5}
            >
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <FiMoon /> : <FiSun />}
              </Button>

              {userIsLoggedIn ? <UserMenu /> : <AuthNav />}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainNav;
