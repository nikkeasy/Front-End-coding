import Box from '@material-ui/core/Box';
import React from 'react';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1, 
    style: {width: '400px', height: '400px'},
    borderColor: 'text.primary',
};

export default function Border () {
    return ( 
        <Box display="flex" justifyContent="center">
            <Box border={1} {...defaultProps} />
        </Box>
    );

}
