import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'; 
import Box from '@material-ui/core/Box'
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            width: 330, 
        },
            m: 2,
    },
}));

    export default function OutLineTextField () {
        const classes = useStyles(); 

        return( 
           
        <form className={classes.root} noValidate autoComplete="off">
             <Box m={2}/>
        <TextField id="outlined-basic" label="Nimesi" variant="outlined" />
        </form>
   
        );
    }
    