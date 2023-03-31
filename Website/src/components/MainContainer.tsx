import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import Footer from './Footer';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function MainContainer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              PhytAroma
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {'PhytAroma est un moteur de recherche intuitif permettant de rechercher'
                + 'de nombreuses plantes utilisées en phytothérapie et Aromathérapie.'
                + 'Il propose une interface facile pour afficher les informations présentes sur '}
              <Link color="inherit" href="http://www.wikiphyto.org/wiki/Accueil">
                WikiPhyto
              </Link>.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="http://www.wikiphyto.org/w/images/thumb/3/38/Sylibum_marianumJM.jpg/1200px-Sylibum_marianumJM.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}
