import React from 'react';
import Header from './Components/Header/Header';
import { makeStyles } from '@mui/styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header/>
    </div>
  );
}

export default App;
const useStyles = makeStyles(() => ({
  App: {
  },

 
}));