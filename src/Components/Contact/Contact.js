import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

}));

export default function Agile(){
  const classes = useStyles();
  return(
    <Grid
      container
      className={classes.agile}
      spacing={2}
      justify="center">
      </Grid>
  )
}
