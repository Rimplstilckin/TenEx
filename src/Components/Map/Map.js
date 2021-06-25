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

export default function Map(){
  const classes = useStyles();
  return(
    <div className={classes.map}>
      <h3>Our favorite routes</h3>
        <p>Sve od Kragujevca do Kilimandžara<br/>
            Od noćnog Pariza do sunčanog Dakara<br/>
            Od Novoga Sada preko Venca sve do Rume,<br/>
            Ostavljamo tragove od spaljene gume!
        </p>
      <img
        className={classes.image}
        src='./img/map.jpeg'
        alt='Mapa'
        />
    </div>
  )
}
