import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { width } from '../../globals';

const social = [
  {name: 'Skype', src: 'img/social/skype.png',link: '#', key: 'skype'},
  {name: 'Facebook', src: 'img/social/facebook.png',link: '#', key: 'facebook'},
  {name: 'Instagram', src: 'img/social/instagram.png',link: '#', key: 'instagram'},
  {name: 'Viber', src: 'img/social/viber.png',link: '#', key: 'viber'},
  {name: 'Whatsapp', src: 'img/social/whatsapp.png',link: '#', key: 'whatsapp'}
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
  socials: {

  },
  social: {
    // display: 'block',
    // margin: '5px',
    padding: '15px',
    textAlign: 'left',
    lineHeight: '10%',
    verticalAlign: 'middle'
  },
  socialText: {
    textAlign: 'left',
    // width: '200px',
    marginLeft: '30px'
  },
  link: {

  },
  icon: {
    width: "30px",
    padding: '0 15px',
    verticalAlign: 'middle'
  }
}));

export default function Contact(){
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return(
    <div className={classes.contact}>
      <h2 className={classes.heading}>Contact us:</h2>
      <Grid
        container
        spacing={3}>
          <Grid
            item
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
                  <Button
                    size='large'>
                      Contact us
                  </Button>
              </form>
              <p className={classes.text}>We'll make sure to contract you in <br/>shortest possible timeframe</p>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            className={classes.socials}
            >
            {
              social.map(item => {
                return(
                  <Grid
                    className={classes.social}
                    item
                    xs={12}
                    key={item.key}>
                    <Link
                      href={item.link}
                      onClick={preventDefault}
                      rel="noopener"
                      >
                        <p className={classes.socialText}>
                          <img
                            className={classes.icon}
                            src={item.src}
                            alt={item.name} />
                          {item.name}
                        </p>
                    </Link>
                  </Grid>
                )
              })
            }
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.phone}>
            <h2>Call us</h2>
            <Link
              href='tel:+381605613151'
              >
              +381 (0) 60 561 31 51
            </Link>
            <p>Our profesional stuff would provide you all informations that you need</p>
          </Grid>
        </Grid>
      </div>
  )
}
