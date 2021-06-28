import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
  contact: {
    width:"80%",
    margin:"auto"
  },
  icon: {
    width: "20px"
  }
}));

export default function Agile(){
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return(
    <div className={classes.contact}>
        <Grid
          container
          justify="center"
          className={classes.test}
          spacing={3}>
            <h3>Be one of them</h3>
            <Grid
              item
              className={classes.text}
              xs={12}
              sm={8}>
                <form className={classes.root} noValidate autoComplete="off">
                <input
                  className={classes.input + " " + classes.name}
                  type="text"
                  id="name"
                  placeholder="name"
                  name="name"
                  />
                <input
                  className={classes.input + " " + classes.email}
                  type="email"
                  id="email"
                  placeholder="email"
                  name="email"
                  />
                  <textarea
                  className={classes.textarea}
                  id="text"
                  placeholder="Message"
                  name="text"
                  rows="5"
                  />
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