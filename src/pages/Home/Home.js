import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Main from 'components/Main';
import SideBar from 'components/SideBar';

const Home = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mt: 0, paddingTop: 2 }} columns={16}>
          <Main />
          <SideBar />
        </Grid>
      </Container>

      <footer>Develop by Oleh Fedorov</footer>
    </>
  );
};

export default Home;
