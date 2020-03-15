import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardContent, CardActions, Avatar} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';



function TestCard () {


return (
  

<Grid container spacing={4}>
    <Grid item>
    <Card> 
        <CardHeader
            avatar={ <Avatar> <AccountCircleIcon /></Avatar>}
            title='Mysteeri'
            subheader='10.06.2020' />
            <CardContent>
        <Typography> Mysteeri on ... </Typography>
            </CardContent>
        <CardActions>
            <Button color ='secondary'> Näytä</Button>
        </CardActions>
    </Card>
</Grid>
<Grid item> 
    <Card> 
            <CardHeader 
                avatar={ <Avatar> <AccountCircleIcon></AccountCircleIcon> </Avatar>}
                title='Ei ole mysteeri'
                subheader='01.06.2020'
              />
        <Typography> Tämä on joku kortti :)</Typography>
    <CardActions> 
        <Button color ='primary'> Näytä </Button>
        </CardActions>            


    </Card>

</Grid>

</Grid>
);


}

export default TestCard;