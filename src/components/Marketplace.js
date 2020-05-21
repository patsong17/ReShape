import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import {Box,Tabs,Tab} from "@material-ui/core"


function Marketplace() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    tabs: {
      width:"100%"
    },
    tabsBox:{
      margin:"2em"
    }
  }));

  const classes = useStyles();
  
  return (
    <div className="Marketplace">
      
        <NavBar/>
        <h1>Marketplace</h1>
        <Box className={classes.tabsBox}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabs} variant="fullWidth">
            <Tab label="All"  />
            <Tab label="Kitchen Space"  />
            <Tab label="Floor Space" />
            <Tab label="Storage Space"  />
            <Tab label="Staff"  />
            <Tab label="Bulk Purchasing"  />
            <Tab label="Advice"  />

          </Tabs>
        </Box>
    </div>
  );
}

export default Marketplace;
