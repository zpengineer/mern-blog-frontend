import { Box } from '@chakra-ui/react';

import UserCard from 'components/UserMenu/UserCard';
import PostTags from './PostTags';
import RecentComments from './RecentComments';

const SideBar = () => {
  return (
    <Box px={{ base: 4 }} maxW={'450px'} w={'full'}>
      <UserCard />
      <PostTags />
      <RecentComments />
    </Box>
  );
};

export default SideBar;
