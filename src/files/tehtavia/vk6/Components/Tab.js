import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';



function TabPanel(props) { // Luovuttaa tietoa tabeille
    const { children, value, index, ...other } = props; 

    return (
    <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index} // !== DOES NOT equal
    id={`simple-tabpanel-${index}`} // The(`) function = grave accent
    {...other}
    >
        {value === index && <Box p={3}>{children}</Box>}
    </Typography>
    );
}

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
  };

    function styleProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls' : `simple-tabpanel-${index}`,
        };
    }

    const useStyles = makeStyles(theme =>({
        root: {
            flexGrow: 1, 
            backgroundColor: theme.palette.background.paper,
        },
    }));

    export default function TabComponent() { 
        const classes = useStyles(); 
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue); 
        };

        return (
            <div className={classes.root}>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Item One" {...styleProps(0)} />
                  <Tab label="Item Two" {...styleProps(1)} />
                  <Tab label="Item Three" {...styleProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </div>
          );
        }
    