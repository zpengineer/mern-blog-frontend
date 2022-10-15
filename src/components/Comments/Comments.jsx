import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';

import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';
import { useGetPostCommentsQuery } from 'redux/comments/commentsApi';

const Comments = () => {
  const { postId } = useParams();
  const { data: postComments, isSuccess } = useGetPostCommentsQuery(postId);

  return (
    <Box marginTop={{ base: '6', sm: '8' }}>
      <Box as="header">
        <Heading as="h3" size="lg">{`Top comments (${
          postComments?.code !== 404 ? postComments?.comments?.length : 0
        })`}</Heading>
      </Box>

      <CommentsForm />
      {isSuccess && <CommentsList postComments={postComments} />}
    </Box>
  );
};

export default Comments;
