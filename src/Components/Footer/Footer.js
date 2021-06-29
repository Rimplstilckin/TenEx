import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { width } from '../../globals';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: width,
    margin:"auto"
  },
  img: {
    width: '60%'
  }
}));

export default function Footer(){
  const classes = useStyles();

  return(
    <div className={classes.footer}>
      <Grid
        container>
          <Grid
            container
            item
            xs={5}
            >
            <img className={classes.img} src='./img/logo.svg' alt='Logo'/>
          </Grid>
          <Grid
            container
            item
            xs={3}
            >
            <Grid
              item
              xs={6}
              >
                impressum
            </Grid>
            <Grid
              item
              xs={6}
              >
                Privacy policy
            </Grid>
            <Grid
              item
              xs={12}
              >
                Copyright by Direktor 2021.
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={4}
            >
            <Grid
              item
              xs={4}
              >
              About
            </Grid>
            <Grid
              item
              xs={4}
              >
              References
            </Grid>
            <Grid
              item
              xs={4}
              >
              Ride with us
            </Grid>
            <Grid
              item
              xs={4}
              >
              Gallery
            </Grid>
            <Grid
              item
              xs={4}
              >
              Location
            </Grid>
          </Grid>
      </Grid>
    </div>
  )

}
