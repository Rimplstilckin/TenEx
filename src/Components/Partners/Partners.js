import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { width } from '../../globals';

const useStyles = makeStyles((theme) => ({
  map: {
    width: width,
    margin: 'auto',
    padding: '30px'
  },
  image: {
    width: '80%',
  }
}));

export default function Partners(){
  const classes = useStyles();
  return(
    <h4>Partners</h4>
  )
}
