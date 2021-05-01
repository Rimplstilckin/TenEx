import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../img/logo.svg';


const useStyles = makeStyles((theme) => ({
  app: {
    flexGrow: 1
  },
  logoClass: {
    textAlign: 'left'
  },
  img: {
    maxWidth: 150
  },
  // toolbar: {
  //   width: "100%"
  // },
  content: {
    [theme.breakpoints.only('xs')]:{
        display: "none!important",
      }
  },
  menu: {
    display: "none!important",
    color: "red",
      [theme.breakpoints.only('xs')]:{
          display: "inline!important",
          padding: 10,
        }
  }
}));

const menu = [{name:"About", key: "oNama"},
              {name: "Gallery", key:"galerija"},
              {name: "References", key: "reference"},
              {name:"Locations", key:"lokacije"}]

 export default function Header(){

  const [currentState, newState] = useState(false);
  const menuDrawer = (event) => {
    console.log(currentState);
    newState(!currentState);
  }

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return(
    <AppBar
      className={classes.app}
      position="static"
      color="bar">
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={2} alignItems="center">
          <Grid className={classes.logoClass} item sm={2} xs={10} >
            <Link href="/.#" onClick={preventDefault}>
              <img className={classes.img} src={logo} alt="Logo" />
            </Link>
          </Grid>
          <Grid item
                className={classes.content}
                container
                sm={8}
                spacing={2}>
              {menu.map(item=>{
                return(<Grid item
                             sm={3}
                             key={item.key}>
                          <Link color="inherit"
                                className={classes.item + " " + classes.xs}
                                onClick={preventDefault}
                                href="#">
                                {item.name}
                          </Link>
                        </Grid>)
               })}
            </Grid>
            <Grid item xs={2} className={classes.content}>
            <Button
                  component={Link}
                  variant="contained"
                  color="blue"
                  href="#"
                  className={classes.button}
                  size="large">
            Contact
            </Button>
            </Grid>
            <Grid item className={classes.menu} xs={2}>
              <IconButton className={classes.iconButton} onClick={menuDrawer}>
                <MenuIcon />
              </IconButton>
            </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
