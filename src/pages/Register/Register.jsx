import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useRegisterMutation } from 'redux/authorization/authApi';

const Register = () => {
  const toast = useToast();
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isSuccess, isError, error }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: `Registration successful. Now you can log into your account.`,
        status: 'success',
        position: 'top-right',
        isClosable: true,
      });
    }

    if (isError) {
      toast({
        title: `${error?.data.message}`,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  }, [error?.data.message, isError, isSuccess, toast]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const onSubmitRegister = async e => {
    e.preventDefault();

    try {
      await register({ fullName, email, password });
    } catch (err) {
      console.log(err);
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Flex minH={'87vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} w={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool community ✌️
          </Text>
        </Stack>
        <Box
          as="form"
          noValidate
          onSubmit={onSubmitRegister}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Full name</FormLabel>
                <Input
                  name="name"
                  value={fullName}
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
            </Box>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={email}
                onChange={handleChange}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?
                <Link as={NavLink} to="/login" color={'blue.400'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
