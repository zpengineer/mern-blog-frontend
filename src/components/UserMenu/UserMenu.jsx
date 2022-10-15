import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { GoPlus, GoSignOut } from 'react-icons/go';

import { useLogoutMutation } from 'redux/authorization/authApi';

const UserMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'green.400'}
        textTransform="uppercase"
        _hover={{
          bg: 'green.300',
        }}
        leftIcon={<GoPlus />}
        as={Link}
        to="/add-post"
      >
        Create post
      </Button>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        textTransform="uppercase"
        color={'white'}
        bg={'red.600'}
        _hover={{
          bg: 'red.500',
        }}
        leftIcon={<GoSignOut />}
        onClick={onOpen}
      >
        Log out
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log out
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleLogout} ml={3}>
                Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default UserMenu;
