import React, { Fragment,  useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../img/logo.svg';


const useStyles = makeStyles((theme) => ({
  app: {
    flexGrow: 1
  },
  logoClass: {
    textAlign: 'left'
  },
  img: {
    maxWidth: 150,
    minWidth: 120
  },
  content: {
    textAlign: 'right'
  }
}));


const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  function useCurrentWidth() {
  // save current window width in the state object
  let [screenWidth, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return screenWidth;
}

const menu = [{name:"O Direktoru", key: "oNama"},
              {name: "Galerija", key:"galerija"},
              {name: "Reference", key: "reference"},
              {name:"Lokacija", key:"lokacije"}]

export default function Header(){

  const [currentState, newState] = useState(false);

  const toggleDrawer = (event) => {
    newState(!currentState);
  }

  let screenWidth = useCurrentWidth();

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return(
    <AppBar
      className={classes.app}
      position="static"
      color="bar">
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          >
          <Grid
            className={classes.logoClass}
            item
            sm={4}
            xs={10}
            >
              <Link href="/.#" onClick={preventDefault}>
                <img className={classes.img} src={logo} alt="Logo" />
              </Link>
          </Grid>
          {
          screenWidth>700 ?
          <Fragment>
            <Grid item
                  container
                  className={classes.content}
                  sm={4}
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
              <Grid item xs={4} className={classes.content}>
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
            </Fragment> :
            <Fragment>
              <Grid item className={classes.menu} xs={2}>
                <IconButton className={classes.iconButton} onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Drawer
                anchor="left"
                open={currentState}
                onClose={toggleDrawer}>
                  <div onClick={toggleDrawer}>
                    <List>
                      {menu.map(item=>{
                        return(
                          <ListItem button key={item.key}>
                            <Link>
                              {item.name}
                            </Link>
                          </ListItem>
                        )
                      }
                      )}
                    </List>
                  </div>
              </Drawer>
            </Fragment>
            }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
