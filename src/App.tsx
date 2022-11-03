import React from 'react';
import Header from './Components/Header/Header';
import { makeStyles } from '@mui/styles';
import NavBar from './Components/NavBar/NavBar';
import HomeBackgroundContainer from './Components/HomeBackground/HomeBackgroundContainer';
import PremiumCollection from './Components/Main/PremiumCollection';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header/>
      <NavBar/>
      <HomeBackgroundContainer />
      <PremiumCollection/>
    </div>
  );
}

export default App;
const useStyles = makeStyles(() => ({
  App: {
  },

 
}));