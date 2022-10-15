import { NavLink } from 'react-router-dom';
import {
  Box,
  Center,
  Text,
  List,
  ListItem,
  useColorModeValue,
  Heading,
  Link,
} from '@chakra-ui/react';

import tags from '../../../data/tags.json';

const PostTags = () => {
  const postTags = tags.map(item => (
    <ListItem
      key={item.id}
      _hover={{ bg: 'teal.400', color: 'white', rounded: 'md' }}
      cursor="pointer"
      px={2}
      py={2}
    >
      <Link
        as={NavLink}
        to={`/tags/${item.tag}`}
        textDecoration="none"
        _hover={{ textDecoration: 'hidden' }}
        textTransform="uppercase"
        display="block"
        w="full"
      >
        <Text fontSize="md">{`#${item.tag}`}</Text>
      </Link>
    </ListItem>
  ));

  return (
    <Center marginBottom="24px">
      <Box w={'full'} rounded={'md'} overflow={'hidden'}>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
          marginBottom="12px"
        >
          Popular tags
        </Heading>

        <Box bg={useColorModeValue('gray.50', 'gray.900')}>
          <List
            spacing={3}
            height="200px"
            overflow="hidden"
            _hover={{ overflowY: 'auto' }}
          >
            {postTags}
          </List>
        </Box>
      </Box>
    </Center>
  );
};

export default PostTags;
