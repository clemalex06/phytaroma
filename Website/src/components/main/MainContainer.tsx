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
import PlantFamilyDetail from '../plantFamilies/PlantFamilyDetail';
import PlantDetail from '../plantFamilies/PlantDetail';
import { PhytaromaContextEventHelper } from '../../helpers/phytaroma-context-event-helper';

export default function MainContainer() {

  const phytaromaContext: IPhytaromaContext = PhytaromaContextEventHelper.initializeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar></NavBar>
      <TopDescription {...phytaromaContext}></TopDescription>
      {phytaromaContext.searchActivated ?
        <SearchContainer {...phytaromaContext}></SearchContainer>
        : PhytaromaContextEventHelper.isPlantFamilyValueSelected(phytaromaContext) ?
          PhytaromaContextEventHelper.isPlantDetailSelected(phytaromaContext) ?
            <PlantDetail {...phytaromaContext}></PlantDetail>
            : <PlantFamilyDetail {...phytaromaContext}></PlantFamilyDetail>
          : <PlantFamilies {...phytaromaContext}></PlantFamilies>}
      <Footer></Footer>
    </ThemeProvider>
  );
}
