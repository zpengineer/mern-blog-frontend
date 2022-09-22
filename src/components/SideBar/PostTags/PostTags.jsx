import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import { useGetAllTagsQuery } from 'redux/posts/postsApi';

const PostTags = () => {
  const { data, isSuccess } = useGetAllTagsQuery();
  const postTags = data?.posts?.map(tag => (
    <Link href="#" variant="h6">{`#${tag}`}</Link>
  ));

  return (
    <Paper sx={{ padding: '12px 24px 12px 24px', marginBottom: 1.5 }}>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
        {isSuccess && postTags}
      </Stack>
    </Paper>
  );
};

export default PostTags;
