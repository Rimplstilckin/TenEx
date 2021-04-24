import React from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const menu = ["About", "Gallery", "References", "Locations", "Contacts"]

 const Header = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return(
    <div className={classes.root}>
    <A    Bar position="static">
      <T oolbar>
        {menu.map(item=>{
          return(<Link color="inherit"
                       key={item[0]}
                       onClick={preventDefault    }
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
