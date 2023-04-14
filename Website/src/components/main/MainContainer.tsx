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
import PlantFamily from '../../models/plant-family';
import PlantFamilyDetail from '../plantFamilies/PlantFamilyDetail';

export default function MainContainer() {
  const [searchActivated, setSearchActivated] = React.useState<boolean>(false);
  const [plantFamilyValue, setPlantFamilyValue] = React.useState<string>('');
  const [plantDetailValue, setPlantDetailValue] = React.useState<string>('');
  const phytaromaContext: IPhytaromaContext = {
    searchActivated: searchActivated,
    setSearchActivated: setSearchActivated,
    plantFamilyValue: plantFamilyValue,
    setPlantFamilyValue: setPlantFamilyValue,
    plantDetailValue: plantDetailValue,
    setPlantDetailValue: setPlantDetailValue,
  };

  const isPlantFamilyValueSelected: () => boolean = () => {
    return phytaromaContext.plantFamilyValue.length === 0;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar></NavBar>
      <TopDescription {...phytaromaContext}></TopDescription>
      {searchActivated ?
        <SearchContainer></SearchContainer>
        : isPlantFamilyValueSelected() ?
          <PlantFamilies {...phytaromaContext}></PlantFamilies>
          : <PlantFamilyDetail {...phytaromaContext}></PlantFamilyDetail>}
      <Footer></Footer>
    </ThemeProvider>
  );
}
