import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import SecondaryNav from 'components/SecondaryNav';
import Main from 'components/Main';
import SideBar from 'components/SideBar';

const Blog = () => {
  return (
    <>
      <Container maxWidth="xl">
        <main>
          <Grid container spacing={2} sx={{ mt: 0 }} columns={16}>
            <Grid item={true} xs={16}>
              <SecondaryNav />
            </Grid>
            <Main />
            <SideBar />
          </Grid>
        </main>
      </Container>

      <footer>Develop by Oleh Fedorov</footer>
    </>
  );
};

export default Blog;
