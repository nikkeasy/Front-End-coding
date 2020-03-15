import React from 'react'; 
import Grid from '@material-ui/core/Grid'
import DiscreteSlider from './Components/SliderComponent' 
import CssBaseline from '@material-ui/core/CssBaseline';
import OutLineTextField from './Components/TextField';
import Switches from './Components/Switch';
import TwoButtons from './Components/Button';



function SliderApp () { 
   
    return ( 
        
        <Grid
         container spacing={3}
         justify="center"> 
        <Grid item xs={5}>
        <React.Fragment>
        <CssBaseline/>
        <OutLineTextField/>
        <DiscreteSlider/>
        <Switches/>
        <TwoButtons/>
        </React.Fragment>
        </Grid>
        </Grid>
      
           
            
    )

}

export default SliderApp; 