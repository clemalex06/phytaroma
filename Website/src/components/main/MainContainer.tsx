import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../theme';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import Footer from './Footer';
import TopDescription from './TopDescription';
import PlantFamilies from '../plantFamilies/PlantFamilies';
import { IPhytaromaContext } from '../../models/phytaroma-context';
import SearchContainer from '../search/SearchContainer';

export default function MainContainer() {
  const [searchActivated, setSearchActivated] = React.useState<boolean>(false);
  const phytaromaContext: IPhytaromaContext = {
    searchActivated: searchActivated,
    setSearchActivated: setSearchActivated,
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar></NavBar>
      <TopDescription {...phytaromaContext}></TopDescription>
      {searchActivated ?
        <SearchContainer></SearchContainer>
        : <PlantFamilies></PlantFamilies>}
      <Footer></Footer>
    </ThemeProvider>
  );
}
