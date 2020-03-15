import React from 'react'; 
import Switch from '@material-ui/core/Switch'; 
import TypoGraphy from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Switches() { 
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const useStyles = makeStyles(theme => ({
        root: {
            ...theme.typography.button, 
            padding: theme.spacing(1),
            width: 330,
        },

    }));
    

const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked }); 

}; 
const classes = useStyles();
return ( 

           
    <div className={classes.root}>  {"Hyväksyn ehdot"} 
      
        <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'checkbox'}}
        />
        </div> 
);

}