import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({

    title: {
      flexGrow: 1
    },
    routing:{
      position:"absolute",
      right:"2em",
    },
    reshapeButton:{
      display:"inline-block",
      color:"#FFFFFF",
      textDecoration: "none",
    },
    marketplaceButton:{
      display:"inline-block",
      color:"#FFFFFF",
      textDecoration: "none",
    },
    loginButton:{
      display:"inline-block"

    }
  }));


function NavBar() {

  const classes = useStyles();

  return (
    <div className="NavBar">
       <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" >
            <Link to="/">
                <Button className={classes.reshapeButton}>
                  ReShape
                </Button>
              </Link>
          </Typography>
          <div className={classes.routing}>
            <Typography variant="h7" className={classes.marketplaceButton}>
              <Link to="/marketplace">
                <Button className={classes.marketplaceButton}>
                  Marketplace
                </Button>
              </Link>
            </Typography>

          <Button color="inherit" className={classes.loginButton}>Login</Button>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
