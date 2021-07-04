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

const menu = [{name:"Direktor", key: "oNama"},
              {name: "Galerija", key:"galerija"},
              {name: "Reference", key: "reference"},
              {name:"Lokacija", key:"lokacije"}]


const useStyles = makeStyles((theme) => ({
    app: {
      flexGrow: 1,
    },
    container: {
      height: '100px'
    },
    iconButton: {
      fontSize: '20px'
    },
    drawer: {
      width: '250px'
    },
    menuItem: {
      fontSize: '30px',
      padding: '10px 25px',
      color: '#234'
    },
    logoClass: {
      textAlign: 'left'
    },
    img: {
      maxWidth: 150,
      minWidth: 120
    },
    contact: {
      textAlign: 'right'
    }
  }));


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
          className={classes.container}
          spacing={2}
          alignItems="center"
          >
          <Grid
            className={classes.logoClass}
            item
            sm={3}
            md={4}
            xs={10}
            >
            <Link
              href="/.#"
              onClick={preventDefault}
              >
              <img className={classes.img} src={logo} alt="Logo" />
            </Link>
          </Grid>
          {
          screenWidth>700 ?
          <Fragment>
            <Grid item
                  container
                  className={classes.content}
                  // justify="center"
                  sm={5}
                  md={4}
                  spacing={2}>
                  {menu.map(item=>{
                    return(<Grid item
                              sm={12/menu.length}
                              key={item.key}
                              >
                              <Link color="inherit"
                                    className={classes.item + " " + classes.xs}
                                    onClick={preventDefault}
                                    href="#">
                                    {item.name}
                              </Link>
                          </Grid>)
                })}
              </Grid>
              <Grid item xs={4} className={classes.contact}>
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
          </Fragment>
          :
          <Fragment>
            <Grid
              item
              className={classes.menu}
              xs={2}
              >
              <IconButton
              className={classes.iconButton}
              onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Drawer
              anchor="right"
              open={currentState}
              onClose={toggleDrawer}>
                <div onClick={toggleDrawer}>
                  <List className={classes.drawer}>
                    {menu.map(item=>{
                      return(
                        <ListItem
                          className={classes.menuItem}
                          button
                          key={item.key}
                          >
                          <Link
                            className={classes.menuItem}>
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
