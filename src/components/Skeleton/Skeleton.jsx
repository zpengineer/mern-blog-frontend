import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const PostsSkeleton = () => {
  return (
    <Box>
      <Stack spacing={1} sx={{ marginBottom: 2 }}>
        <Skeleton variant="rectangular" height={118} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" height={40} />
      </Stack>

      <Stack spacing={1} sx={{ marginBottom: 2 }}>
        <Skeleton variant="rectangular" height={118} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" height={40} />
      </Stack>

      <Stack spacing={1} sx={{ marginBottom: 2 }}>
        <Skeleton variant="rectangular" height={118} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" height={40} />
      </Stack>
    </Box>
  );
};

export default PostsSkeleton;
