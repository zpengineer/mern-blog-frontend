import { useParams, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  Textarea,
  ButtonGroup,
  Button,
  Divider,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
} from '@chakra-ui/react';

import { useAddCommentMutation } from 'redux/comments/commentsApi';

const CommentsForm = () => {
  const [content, setContent] = useState('');
  const { postId } = useParams();
  const [comment] = useAddCommentMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();

    comment({ content, postId });

    setContent('');
  };

  const handleClick = e => {
    if (!isLoggedIn) {
      onOpen();
    }
  };

  return (
    <>
      <Box marginTop={{ base: '4', sm: '6' }}>
        <Box as="form" onSubmit={handleSubmit}>
          <Textarea
            placeholder="Type your message here..."
            size="sm"
            resize="vertical"
            value={content}
            onChange={e => setContent(e.currentTarget.value)}
            onClick={handleClick}
          />
          <ButtonGroup
            variant="outline"
            spacing="4"
            display={isLoggedIn ? 'block' : 'none'}
            marginTop={{ base: '3', sm: '4' }}
            marginBottom={{ base: '3', sm: '4' }}
          >
            <Button colorScheme="pink" type="submit">
              Submit
            </Button>
            <Button onClick={() => setContent('')}>Cancel</Button>
          </ButtonGroup>
          <Divider />
        </Box>
      </Box>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in to continue</ModalHeader>
          <ModalCloseButton />
          <ModalBody>To continue, log in or register on the site.</ModalBody>
          <ModalFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              as={NavLink}
              to="/login"
              colorScheme="blue"
              width="150px"
              marginRight="12px"
              textTransform="uppercase"
            >
              Log in
            </Button>
            <Button
              as={NavLink}
              to="/register"
              variant="ghost"
              textTransform="uppercase"
            >
              Create account
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentsForm;
