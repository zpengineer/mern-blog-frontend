import { Box, Flex } from '@chakra-ui/react';
import Main from 'components/Main';
import SideBar from 'components/SideBar';

const Home = () => {
  return (
    <>
      <Box
        as="main"
        width="100%"
        maxW="8xl"
        minH={'84vh'}
        marginInlineStart="auto"
        marginInlineEnd="auto"
        marginTop="16px"
        marginBottom="22px"
      >
        <Flex>
          <Main />
          <SideBar />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
