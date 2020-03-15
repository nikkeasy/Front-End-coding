import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs'; 
import Tab from '@material-ui/core/Tab';
import TypoGraphy from '@material-ui/core/Typography';
import React, { useState } from 'react';
import ListLoma from '../../vk1/lomamerkinnat';
import WorkOffSharpIcon from '@material-ui/icons/WorkOffSharp';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import SliderApp from '../../vk5/SliderApp';
import AdjustIcon from '@material-ui/icons/Adjust';
import AjoApp from '../../vk2/AjoApp';
import FetchApp from '../../vk4/fetchApp';
import LomakeApp from '../../vk3/LomakeApp';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import MenuIcon from '@material-ui/icons/Menu';

function TabApp () {
    const [value, setValue] = useState(0);

    const handleChange = (event, val) => {
        setValue( val ); 
    }
     
return (
    <div> 
        <AppBar position='fixed'> 
            <Tabs value={ value }
                onChange={ handleChange }>
                <Tab label='Tehtävä 1' icon={<WorkOffSharpIcon/>}/>
                <Tab label= 'Tehtävä 2' icon={<DirectionsCarIcon />}  />
                <Tab label= 'Tehtävä 3'icon={<BorderColorIcon />}   />
                <Tab label= 'Tehtävä 4' icon={<BorderColorIcon /> } />
                <Tab label= 'Tehtävä 5' icon={<AdjustIcon/>}/>
                <Tab label= 'Menu (Tehtävä 6)' icon={<MenuIcon/>} />
            </Tabs> 
        </AppBar>

    { value === 0 && < ListLoma/> }
    { value === 1 &&  <AjoApp /> }
    { value === 2 &&  <LomakeApp/> }
    { value === 3 && <FetchApp/>   }
    { value === 4 && <SliderApp/>  } 
    { value === 5 && <p  asd /> }


    </div>
    )

}

export default TabApp; 