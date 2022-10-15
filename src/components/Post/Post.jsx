import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Heading,
  Link,
  Image,
  List,
  ListItem,
  Text,
  Tag,
  Container,
  Button,
  Flex,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiMessageCircle,
  FiEye,
  FiHeart,
  FiEdit,
  FiTrash,
} from 'react-icons/fi';

import { getUserId } from 'redux/authorization/auth-selectors';
import {
  useDeletePostMutation,
  useLikePostMutation,
} from 'redux/posts/postsApi';
import UserInfo from 'components/UserMenu/UserInfo';
import Comments from 'components/Comments';

const Post = ({ post, children, isFullPost }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const userId = useSelector(getUserId);
  const isLikePost = post?.like.some(id => userId === id);
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation({
    skip: isLikePost,
  });

  const isUser = post.owner._id === userId;

  const handleDelete = () => {
    deletePost(post._id);
    onClose();
  };

  return (
    <Container
      maxW={'7xl'}
      margin="0"
      padding="0"
      marginBottom={{ base: '1', sm: '7' }}
    >
      <Box
        display="flex"
        flexDirection={{ base: 'column', sm: isFullPost ? 'column' : 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          position="relative"
          alignItems="center"
          marginBottom={isFullPost ? '12px' : '0'}
        >
          <Box
            width={{ base: '100%', sm: isFullPost ? '100%' : '85%' }}
            zIndex="2"
          >
            <Link
              as={NavLink}
              to={`/posts/${post._id}`}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <Image
                borderRadius="lg"
                src={post.imgUrl}
                alt={post.title}
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="space-between"
          marginTop={{ base: '3', sm: '0' }}
        >
          <Box>
            <Flex justifyContent="space-between">
              <UserInfo {...post.owner} createdAt={post.createdAt} />
              {isUser && (
                <List display="flex">
                  <ListItem marginRight="6px">
                    <Button
                      as={NavLink}
                      to={`/posts/${post._id}/update`}
                      colorScheme="orange"
                      variant="ghost"
                    >
                      <FiEdit />
                    </Button>
                  </ListItem>

                  <ListItem>
                    <Button
                      type="button"
                      colorScheme="red"
                      variant="ghost"
                      onClick={onOpen}
                    >
                      <FiTrash />
                    </Button>

                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete post
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="red"
                              onClick={handleDelete}
                              ml={3}
                            >
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </ListItem>
                </List>
              )}
            </Flex>
            <List display="flex">
              {post?.tags?.map((tag, index) => (
                <ListItem key={index} marginRight="8px">
                  <Tag
                    as={NavLink}
                    to={`/tags/${tag}`}
                    size={'md'}
                    variant="solid"
                    colorScheme="orange"
                  >
                    {`#${tag}`}
                  </Tag>
                </ListItem>
              ))}
            </List>

            <Heading marginTop="1">
              <Link
                as={NavLink}
                to={`/posts/${post._id}`}
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
              >
                {post.title}
              </Link>
            </Heading>
          </Box>

          <Box
            display={isFullPost ? 'none' : 'flex'}
            justifyContent="space-between"
          >
            <List display="flex">
              <ListItem
                display="flex"
                alignItems="center"
                marginRight="12px"
                fontSize="18px"
              >
                <FiEye />
                <Text fontWeight="medium" marginLeft="6px">
                  {post?.viewsCount}
                </Text>
              </ListItem>
              <ListItem display="flex" alignItems="center" fontSize="18px">
                <FiMessageCircle />
                <Text fontWeight="medium" marginLeft="6px">
                  {post?.comments?.length}
                </Text>
              </ListItem>
            </List>
            <Box display="flex" alignItems="center" fontSize="18px">
              <Button
                leftIcon={<FiHeart fill={isLikePost ? 'red' : 'transparent'} />}
                colorScheme="red"
                variant="ghost"
                onClick={() => likePost(post._id)}
              >
                {post?.like.length}
              </Button>
            </Box>
          </Box>
        </Box>
        {children && <Box marginTop={{ base: '3', sm: '4' }}>{children}</Box>}
        {isFullPost && <Comments />}
      </Box>
    </Container>
  );
};

export default Post;
