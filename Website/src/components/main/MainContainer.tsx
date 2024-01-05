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

export default function MainContainer() {
  const [searchActivated, setSearchActivated] = React.useState<boolean>(false);
  const [plantFamilyValue, setPlantFamilyValue] = React.useState<string>('');
  const [plantDetailIdValue, setPlantDetailIdValue] = React.useState<string>('');
  const [searchstring, setSearchstring] = React.useState<string>('');
  const phytaromaContext: IPhytaromaContext = {
    searchActivated: searchActivated,
    setSearchActivated: setSearchActivated,
    plantFamilyValue: plantFamilyValue,
    setPlantFamilyIdValue: setPlantFamilyValue,
    plantDetailIdValue: plantDetailIdValue,
    setPlantDetailIdValue: setPlantDetailIdValue,
    searchstring: searchstring,
    setSearchstring: setSearchstring,
  };

  const isPlantFamilyValueSelected: () => boolean = () => {
    return phytaromaContext.plantFamilyValue.length !== 0;
  }

  const isPlantDetailSelected: () => boolean = () => {
    return phytaromaContext.plantDetailIdValue.length !== 0;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar></NavBar>
      <TopDescription {...phytaromaContext}></TopDescription>
      {searchActivated ?
        <SearchContainer></SearchContainer>
        : isPlantFamilyValueSelected() ?
          isPlantDetailSelected() ?
            <PlantDetail {...phytaromaContext}></PlantDetail>
            : <PlantFamilyDetail {...phytaromaContext}></PlantFamilyDetail>
          : <PlantFamilies {...phytaromaContext}></PlantFamilies>}
      <Footer></Footer>
    </ThemeProvider>
  );
}
