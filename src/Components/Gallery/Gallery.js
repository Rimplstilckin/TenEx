import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { width } from '../../globals';

const useStyles = makeStyles((theme) => ({
  gallery: {
    width: width,
    margin:'auto'
  },
  image: {
    width: '100%'
  }
}));

const gallery = [
  {name: 'Van', path: './img/gallery/kombi.jpeg'},
  {name: 'logo', path: './img/gallery/logo.svg'},
  {name: 'test', path: './img/gallery/test.jpeg'},
  {name: 'test 2', path: './img/gallery/test.jpeg'},
]

export default function Gallery(){
  const classes = useStyles();
  return(
    <div>
      <h3>Gallery</h3>
      <Grid
        className={classes.gallery}
        container
        spacing={2}
        alignItems="center"
        >
        {gallery.map(item => {
          return(<Grid
                  item
                  xs={6}
                  sm={3}
                  key={item.name}
                  >
                    <img
                    className={classes.image}
                    alt={item.name}
                    src={item.path}
                    />
                  </Grid>
                )
              })}
      </Grid>
    </div>
  )
}
