import Box from '@material-ui/core/Box';
import React from 'react'; 

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1, 
    borderColor: 'text.primary', 
};

export default function BoxBorder () {
    return ( 
        <Box display="flex" justifyContent="center">
            <Box border={1} {...defaultProps} />



        </Box>
    )


}

