import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { width } from '../../globals';

const social = [
  {name: 'Skype', src: '../../skype.png',link: '#', key: 'skype'},
  {name: 'Facebook', src: '../../facebook.png',link: '#', key: 'facebook'},
  {name: 'Instagram', src: '../../instagram.png',link: '#', key: 'instagram'},
  {name: 'Viber', src: '../../viber.png',link: '#', key: 'viber'},
  {name: 'Whatsapp', src: '../../whatsappp.png',link: '#', key: 'whatsapp'}
]
const useStyles = makeStyles((theme) => ({
  contact: {
    width: width,
    margin:"auto"
  },
  heading: {
    textAlign: 'left'
  },
  input: {
    width: '80%',
    margin: '15px'
  },
  icon: {
    width: "20px"
  }
}));

export default function Contact(){
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return(
    <div className={classes.contact}>
      <h2 className={classes.heading}>Be one of them</h2>
      <Grid
        container
        justify="center"
        className={classes.test}
        spacing={3}>
          <Grid
            item
            className={classes.text}
            xs={12}
            sm={8}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  className={classes.input + " " + classes.name}
                  id="name"
                  label="Name"
                  variant='filled'/>
                <TextField
                  className={classes.input + " " + classes.email}
                  id="email"
                  label="email"
                  variant='filled'/>
                <TextField
                  className={classes.input + " " + classes.text}
                  id='text'
                  label="Message"
                  multiline
                  rows={5}
                  variant='filled'/>
              </form>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}>
              <div className={classes.social}>
                <Link
                  href="#"
                  onClick={preventDefault}
                  rel="noopener">
                  <img
                    className={classes.icon}
                    src='./img/social/skype.png'
                    alt='Skype'/>
                  Tenex
                </Link>
              </div>
          </Grid>
        </Grid>
      </div>
  )
}
