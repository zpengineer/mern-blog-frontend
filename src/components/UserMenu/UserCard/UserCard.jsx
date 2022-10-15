import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  SkeletonText,
} from '@chakra-ui/react';

import { FiSettings } from 'react-icons/fi';

import {
  useFollowMutation,
  useUnFollowMutation,
  useGetAuthorQuery,
  useUpdateAvatarMutation,
} from 'redux/user/userApi';
// import { useFetchCurrentUserQuery } from 'redux/authorization/authApi';

const UserCard = () => {
  const { postId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const { data, isSuccess } = useGetAuthorQuery(postId, {
    skip: !postId,
  });

  const [follow] = useFollowMutation();
  const [unfollow] = useUnFollowMutation();
  const [uploadAvatar] = useUpdateAvatarMutation();

  const isFollowing = data?.author?.followers.some(id => user.id === id);
  const isAuthorCurrentUser = user.id === data?.author.id ? true : false;
  const isReadingPost = postId && !isAuthorCurrentUser ? true : false;
  const avatarImg = isReadingPost ? data?.author?.avatar : user?.avatar;

  useEffect(() => {
    if (isSuccess || user) setIsLoaded(true);
  }, [isSuccess, user]);

  const updateAvatar = async e => {
    e.preventDefault();

    const file = e.target.files[0];

    const fileMeta = new FormData();
    fileMeta.append('file', file);
    fileMeta.append('upload_preset', 'avatar');

    const instance = axios.create();
    delete instance.defaults.headers.common['Authorization'];

    const { data } = await instance.post(
      'https://api.cloudinary.com/v1_1/defbgb7dw/image/upload/',
      fileMeta
    );

    const avatar = { avatar: data.secure_url };

    uploadAvatar(avatar);
  };

  return (
    <Center marginBottom="24px" display={!isLoggedIn ? 'none' : 'block'}>
      <Box
        w={'full'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        rounded={'md'}
        overflow={'hidden'}
        position="relative"
      >
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://res.cloudinary.com/defbgb7dw/image/upload/v1664718192/pexels-zaksheuskaya-1616403_eyjus8.jpg'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={avatarImg || 'https://bit.ly/broken-link'}
            alt={isReadingPost ? data?.author?.name : user?.name}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        <Box
          position="absolute"
          top="15px"
          right="15px"
          color="white"
          _active={{ color: 'gray.300' }}
          _hover={{ color: 'gray.300' }}
        >
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              color="white"
              _active={{ color: 'gray.300' }}
              _hover={{ color: 'gray.300' }}
            >
              <FiSettings style={{ width: '25px', height: '25px' }} />
            </MenuButton>
            <MenuList color={useColorModeValue('gray.900', 'gray.50')}>
              <MenuItem>
                <Input
                  type="file"
                  display="none"
                  id="file-upload"
                  onChange={updateAvatar}
                />
                <Box as="label" htmlFor="file-upload" cursor="pointer" w="full">
                  <Text fontSize="md">Upload avatar</Text>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <SkeletonText isLoaded={isLoaded}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {isReadingPost ? data?.author?.name : user?.name}
              </Heading>
            </SkeletonText>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <SkeletonText isLoaded={isLoaded}>
                <Text fontWeight={600}>
                  {isReadingPost
                    ? data?.author?.followers?.length
                    : user?.followers?.length}
                </Text>
              </SkeletonText>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <SkeletonText isLoaded={isLoaded}>
                <Text fontWeight={600}>
                  {isReadingPost
                    ? data?.author?.following?.length
                    : user?.following?.length}
                </Text>
              </SkeletonText>
              <Text fontSize={'sm'} color={'gray.500'}>
                Following
              </Text>
            </Stack>
          </Stack>
          {isReadingPost && isSuccess && (
            <>
              <Button
                display={isFollowing ? 'none' : 'flex'}
                w={'full'}
                mt={8}
                bg="gray.700"
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => follow(data?.author?.id)}
              >
                Follow
              </Button>

              <Button
                display={isFollowing ? 'flex' : 'none'}
                w={'full'}
                mt={8}
                bg="gray.700"
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={() => unfollow(data?.author?.id)}
              >
                Unfollow
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default UserCard;
