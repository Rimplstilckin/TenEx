import React from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import logo from '../img/logo.svg';


const useStyles = makeStyles((theme) => ({
  app: {
  },
  img: {
    minWidth: 150,
    [theme.breakpoints.only('xs')]:{
        display: "block!important",
        margin: "auto!important"
      }
  },
  toolbar: {
    width: "100%"
  },
  content: {
    [theme.breakpoints.only('xs')]:{
        display: "none!important",
      }
  },
  innerContainer: {
    width: "80%"
  },
  item: {
    padding: 10
  },
  button: {
  },
  iconButton: {
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

const menu = ["About", "Gallery", "References", "Locations"]

 const Header = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return(
    <AppBar
      className={classes.app}
      position="static"
      color="bar">
      <Toolbar className={classes.toolbar}>
        <Link className={classes.img} href="/.#" onClick={preventDefault}>
          <img src={logo} alt="Logo" />
        </Link>
        <Container className={classes.content}>
          <Container className={classes.innerContainer}>
            {menu.map(item=>{
              return(<Link color="inherit"
                         className={classes.item + " " + classes.xs}
                         key={item[0]}
                         onClick={preventDefault}
                         href="#">
                          {item}
                         </Link>)
             })}
          </Container>
          <Button
                component={Link}
                variant="contained"
                color="blue"
                href="#"
                className={classes.button + " " + classes.xs}
                size="large">
          Contact
          </Button>
        </Container>
        <IconButton className={classes.iconButton}>
          <MenuIcon className={classes.menu} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
