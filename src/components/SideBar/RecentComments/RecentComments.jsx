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
  Flex,
  Avatar,
} from '@chakra-ui/react';

import { useGetAllCommentsQuery } from 'redux/comments/commentsApi';

const RecentComments = () => {
  const { data, isSuccess } = useGetAllCommentsQuery();

  return (
    <Center>
      <Box w={'full'} rounded={'md'} overflow={'hidden'}>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
          marginBottom="12px"
        >
          Recent comments
        </Heading>

        <Box bg={useColorModeValue('gray.50', 'gray.900')}>
          {data?.code === 404 && (
            <Box p="8px">
              <Text fontSize="md">{data?.message}</Text>
            </Box>
          )}

          {data?.code === 200 && (
            <List>
              {isSuccess &&
                data?.comments?.map(comment => (
                  <ListItem
                    key={comment._id}
                    px={2}
                    py={2}
                    _hover={{ bg: 'teal.400', color: 'white', rounded: 'md' }}
                    cursor="pointer"
                  >
                    <Link
                      as={NavLink}
                      to={`/posts/${comment.post._id}`}
                      _hover={{ textDecoration: 'none' }}
                      display="flex"
                    >
                      <Flex>
                        <Avatar
                          size={'md'}
                          src={comment.owner.avatarURL}
                          alt={comment.owner.fullName}
                          marginRight="12px"
                        />
                      </Flex>
                      <Flex flexDirection="column">
                        <Heading
                          as="h4"
                          size="md"
                          width="320px"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {comment.post.title}
                        </Heading>
                        <Text
                          fontSize="md"
                          width="320px"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {comment.content}
                        </Text>
                      </Flex>
                    </Link>
                  </ListItem>
                ))}
            </List>
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default RecentComments;
