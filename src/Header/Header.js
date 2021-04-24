import React from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import logo from '../img/logo.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  img: {
      width:200,
  },
  app: {
    height: 100,
    padding: 20
  }
}));

const menu = ["About", "Gallery", "References", "Locations", "Contacts"]

 const Header = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return(
    <div className={classes.root}>
    <AppBar className={classes.app} position="static">
      <Toolbar>
      <img className={classes.img} src={logo} alt="Logo" />
        {menu.map(item=>{
          return(<Link color="inherit"
                       key={item[0]}
                       onClick={preventDefault}
                       href="#">
                        {item}
                       </Link>)
        })}
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Header;
