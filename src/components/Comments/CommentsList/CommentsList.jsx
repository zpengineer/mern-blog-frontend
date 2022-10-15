import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  List,
  ListItem,
  Alert,
  AlertIcon,
  chakra,
  Flex,
  Stack,
  Button,
  Box,
  Divider,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiThumbsUp, FiThumbsDown, FiTrash } from 'react-icons/fi';

import {
  useLikeCommentMutation,
  useDislikeCommentMutation,
  useDeleteCommentMutation,
} from 'redux/comments/commentsApi';

import { getUserId } from 'redux/authorization/auth-selectors';
import UserInfo from 'components/UserMenu/UserInfo';

const CommentsList = ({ postComments }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const { postId } = useParams();
  const userId = useSelector(getUserId);
  const isError = postComments?.code === 404;
  const isSuccess = postComments?.code === 200;

  const [like] = useLikeCommentMutation();
  const [dislike] = useDislikeCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  const handleDelete = id => {
    deleteComment({ id, postId });
    onClose();
  };

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} borderRadius="md">
      {isError && (
        <Alert status="info" marginTop="12px">
          <AlertIcon />
          {postComments?.message}
        </Alert>
      )}

      {isSuccess && (
        <List marginTop="12px">
          {postComments?.comments.map(comment => (
            <ListItem
              key={comment._id}
              id={`#${comment._id}`}
              marginBottom="12px"
              rounded={'xl'}
            >
              <Flex
                direction="column"
                width={'full'}
                justifyContent={'space-between'}
                py={4}
              >
                <Flex
                  direction={'row'}
                  textAlign={'left'}
                  justifyContent={'space-between'}
                  px={4}
                >
                  <UserInfo
                    fullName={comment.owner.fullName}
                    avatarURL={comment.owner.avatarURL}
                    createdAt={comment.createdAt}
                  />
                  {comment.owner._id === userId && (
                    <Box>
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
                              Delete comment
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              Are you sure? You can't undo this action
                              afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="red"
                                onClick={() => handleDelete(comment._id)}
                                ml={3}
                              >
                                Delete
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                    </Box>
                  )}
                </Flex>
                <Flex paddingLeft={16} paddingRight={4}>
                  <chakra.p
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'16px'}
                    pb={4}
                  >
                    {comment.content}
                  </chakra.p>
                </Flex>
                <Stack
                  direction="row"
                  spacing={2}
                  display="flex"
                  justifyContent="flex-end"
                  paddingLeft={16}
                  paddingRight={4}
                >
                  <Button
                    leftIcon={<FiThumbsUp />}
                    colorScheme="green"
                    variant="ghost"
                    padding="0px"
                    onClick={() => like(comment._id)}
                  >
                    {comment?.like.length}
                  </Button>
                  <Button
                    rightIcon={<FiThumbsDown />}
                    colorScheme="pink"
                    variant="ghost"
                    padding="0px"
                    onClick={() => dislike(comment._id)}
                  >
                    {comment?.dislike.length}
                  </Button>
                </Stack>
              </Flex>
              <Divider />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default CommentsList;
