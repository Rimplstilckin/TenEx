import React from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
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
  img: {
      width:"10%",
      minWidth: 80,
      [theme.breakpoints.only('xs')]:{

        float: "right",
      }
  },
  app: {
    padding: 20,
    fontSize: 20
  },
  menu: {
    [theme.breakpoints.only('sm')]:{
      display: "block",
    }
  },
  content: {
    width: "80%"
  },
  item: {
    textAlign: "justify",
    padding:"1% 3%",
  },
  xs: {
    [theme.breakpoints.only('xs')]:{
      display: "none",
    }
  },
  button: {
  },
  menu: {
    display: "none",
    [theme.breakpoints.only('xs')]:{
      display: "block",
      fontSize: 30
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
      <Toolbar>
        <Link className={classes.img} href="/.#" onClick={preventDefault}>
          <img src={logo} alt="Logo" />
        </Link>
        <Container className={classes.content}>
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
          <MenuIcon className={classes.menu}/>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
