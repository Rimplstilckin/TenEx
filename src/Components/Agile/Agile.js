import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  agile: {
    margin: 'auto',
    overflow: "hidden"
  },
  left: {
    color: 'red',
    textAlign: 'left'
  },
  right: {
    color: 'blue'
  },
  image: {
    width: '60%'
  }
}));

export default function Agile(){
  const classes = useStyles();
  return(
    <Grid
      container
      className={classes.agile}
      spacing={2}
      justify="center">
        <Grid
          item
          className={classes.left}
          xs={12}
          sm={6}
          >
          <h3>Our agille vans</h3>
          <p>Cabin Bag Sizes
              In order to bring 2 cabin bags on board add
              Priority & 2 Cabin Bags to your booking.
              Oversized or extra bags or items will need to
              be carried in the hold. The fee for this is
              €50/ 50 at the
              </p>
        </Grid>
        <Grid
          item
          className={classes.right}
          xs={12}
          sm={6}
          justify="center"
          >
          <img
            className={classes.image}
            alt="Van"
            src='./img/KombiOk.jpeg'
            />
        </Grid>
      </Grid>
  )
}
