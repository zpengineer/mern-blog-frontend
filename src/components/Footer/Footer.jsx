import {
  Box,
  Link,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'8xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Mern blog. All rights reserved</Text>
        <Stack direction={'row'} spacing={4}>
          <Link href="https://github.com/zpengineer" isExternal>
            <FiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/oleh-fedorov-608338a5/"
            isExternal
          >
            <FiLinkedin />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
