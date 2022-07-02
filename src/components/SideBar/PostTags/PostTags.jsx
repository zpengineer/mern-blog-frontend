import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const PostTags = () => {
  return (
    <Paper sx={{ padding: '12px 24px 12px 24px', marginBottom: 1.5 }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link href="#" variant="h6">
          #Link
        </Link>
        <Link href="#" variant="h6">
          #Link
        </Link>
        <Link href="#" variant="h6">
          #Link
        </Link>
      </Stack>
    </Paper>
  );
};

export default PostTags;
