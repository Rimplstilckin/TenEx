import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  image: {
    width: "60%",
    maxWidth: '150px'
  }
}));

const partners = [
  [
    {name: 'Amzon', path: './img/partners/amazon.png'},
    {name: 'Apple', path: './img/partners/apple.png'},
    {name: 'Coca-Cola', path: './img/partners/cocaCola.png'}
  ],
  [
    {name: 'Google', path: './img/partners/google.png'},
    {name: 'Ikea', path: './img/partners/ikea.png'}
  ],
  [
    {name: 'Lidl', path: './img/partners/lidl.png'},
    {name: 'Merzedes-Benz', path: './img/partners/mercedes.png'},
    {name: 'Microsoft', path: './img/partners/microsoft.png'}
  ],
  [
    {name: 'Scania', path: './img/partners/scania.png'},
    {name: 'Swiss', path: './img/partners/swiss.png'}
  ],
  [
    {name: 'Xiaomi', path: './img/partners/xiaomi.png'}
  ]
]

export default function Partners(){
  const classes = useStyles();
  return(
    <div className={classes.partners}>
      <h4>Our content customers</h4>
      <Grid
        container
        className={classes.container}
        spacing={3}
        alignItems="center"
        >
        {partners.map((item, index) =>{
          return(
              item.map((partner, i) => {
                return(
                  <Grid
                  index={partner.name}
                  item
                  key={partner.name}
                  xs={item.length>1 ? 6 : 12}
                  sm={12/item.length}
                  >
                    <img
                      className={classes.image}
                      src={partner.path}
                      alt={partner.name}
                    />
                  </Grid>
                  )
              })
          )
        })}
      </Grid>
    </div>
  )
}
