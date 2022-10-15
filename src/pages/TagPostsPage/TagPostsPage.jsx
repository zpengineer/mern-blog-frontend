import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

import Post from 'components/Post';
import { useGetAllPostsByTagQuery } from 'redux/posts/postsApi';

const TagPostsPage = () => {
  const { tag } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const { data, isSuccess } = useGetAllPostsByTagQuery(tag, {
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
          <Heading as="h2" size="xl" mt={6} mb={4}>
            {`#${tag}`}
          </Heading>
          <Box>{postItems}</Box>
        </>
      )}
    </>
  );
};

export default TagPostsPage;
