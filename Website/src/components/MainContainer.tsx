import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import Footer from './Footer';
import TopDescription from './TopDescription';
import PlantCategories from './PlantCategories';

export default function MainContainer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar></NavBar>
      <TopDescription></TopDescription>
      <PlantCategories></PlantCategories>
      <Footer></Footer>
    </ThemeProvider>
  );
}
