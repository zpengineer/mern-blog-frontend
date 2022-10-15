import { useState, useEffect } from 'react';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

import Post from 'components/Post';

import { useSubscriptionPostsQuery } from 'redux/posts/postsApi';

const SubscriptionPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data, isSuccess } = useSubscriptionPostsQuery({
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (isSuccess) setIsLoaded(true);
  }, [isSuccess]);

  const postItems = data?.posts?.map(post => (
    <Skeleton isLoaded={isLoaded} key={post._id}>
      <Post post={post} />
    </Skeleton>
  ));

  return (
    <>
      {data?.code === 404 && (
        <Box textAlign="center" py={10} px={6}>
          <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
          <Heading as="h2" size="lg" mt={6} mb={2}>
            {data?.message}
          </Heading>
        </Box>
      )}

      {data?.code === 200 && (
        <>
          <Box>{postItems}</Box>
        </>
      )}
    </>
  );
};

export default SubscriptionPage;
