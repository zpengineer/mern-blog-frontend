import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import SecondaryNav from 'components/SecondaryNav';
import SearchPage from 'pages/SearchPage';

const Main = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { postId, tag } = useParams();

  const value = searchParams.get('query');

  const disabledNav = postId || tag ? true : false;

  return (
    <Box px={{ base: 4 }} w="8xl">
      {value && (
        <>
          <SearchPage value={value} />
        </>
      )}

      {!value && (
        <>
          <SecondaryNav disabledNav={disabledNav} />
          <Outlet />
        </>
      )}
    </Box>
  );
};

export default Main;
