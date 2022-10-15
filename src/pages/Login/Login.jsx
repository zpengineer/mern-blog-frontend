import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';

import { useLoginMutation } from 'redux/authorization/authApi';

const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    if (isLoading) {
      toast({
        title: `Authorization successful.`,
        status: 'success',
        position: 'top-right',
        isClosable: true,
      });
    }

    if (isError) {
      toast({
        title: `Invalid email or password.`,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  }, [error?.data.message, isError, isLoading, toast]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const onSubmitLogin = async e => {
    e.preventDefault();

    try {
      await login({ email, password });
    } catch (err) {
      console.log(err);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <Flex minH={'87vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool{' '}
            <Link as={NavLink} to="/" color={'blue.400'}>
              community
            </Link>
            ✌️
          </Text>
        </Stack>
        <Box
          as="form"
          onSubmit={onSubmitLogin}
          noValidate
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={email}
                type="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                value={password}
                type="password"
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Text>
                  If you do not have an account,{' '}
                  <Link as={NavLink} to="/register" color={'blue.400'}>
                    then register a new one.
                  </Link>
                </Text>
              </Stack>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
