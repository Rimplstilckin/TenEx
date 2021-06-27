import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  img: {
    width:"100%"
  }
}));

export default function Main(){
  const classes = useStyles();
  return(
    <Grid
      item
      xs={12}
      className={classes.main}>
        <img
          className={classes.img}
          src="./img/kombi.jpeg"
          alt="Kombi"
          />
    </Grid>
  )
}
