import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

const partners = [
  {name: 'Van', path: './img/gallery/kombi.jpeg'},
  {name: 'logo', path: './img/gallery/logo.svg'},
  {name: 'test', path: './img/gallery/test.jpeg'},
  {name: 'test 2', path: './img/gallery/test.jpeg'},
]

export default function Partners(){
  const classes = useStyles();
  return(
    <div className={classes.partners}>
      <h4>Our content customers</h4>
      <Grid
        className={classes.container}
        xs={12}
        spacing={2}
        alignItems="center"
        >
        {partners.map(item =>{
          return(
            <Grid
            index={item.name}
            >
              <img
                src={item.path}
                alt={item.name}
              />
            </Grid
          )
        })}
      </Grid>
    </div>
  )
}
