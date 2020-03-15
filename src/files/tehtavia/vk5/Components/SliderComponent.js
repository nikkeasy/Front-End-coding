import React from 'react'; 
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'; 


const useStyles = makeStyles(theme => ({
  root: {
    width: 330,
  },
  
}));




function valuetext(value) {
    return `${value}`;
}

export default function DiscreteSlider () {
    const classes = useStyles(); 

    const marks = [
        {
            value:0, 
            label: '0',
        },
        {
            value:1, 
            label: '1',
        },
        {
            value:2, 
            label: '2',
            },
        {
            value:3, 
            label: '3',
            },
        {
            value:4, 
            label: '4',
            },
        {
            value:5, 
            label: '5',
            },
        ];
        

    return ( 
                <div className={classes.root}>
            <Typography id="discrete-slider-custom" gutterBottom>
                Arvosana
            </Typography>
        <Slider
        defaultValue={3}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
       min={0}
       max={5}
        />
       


        </div>
        
    )
}

