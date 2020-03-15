import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core'; 
import Avatar from '@material-ui/core/Avatar'; 
import React from 'react';
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'



function ListComponent (props) { 
    return(
        <Grid container spacing={1}>
    {
         props.data.map(school => {
            return ( 
            <Grid key={ school.id}> 
                <Card style={ {minWidth: 250, minHeight: 400} }>
                    <CardHeader
                        avatar= { <Avatar> <AccountCircleIcon /> </Avatar>} />
                    <CardContent> 
                        <Typography variant = 'h5'> { school.otsikko } </Typography>
                        <Typography> { school.paiva} </Typography>
                {
                    <CardMedia
                    style={{height: 300, width: 200}}
                    image={ school.picture} />
                 } </CardContent> 
            <CardActions>
                <Button color="primary"> Muokkaa </Button>
                <Button color="secondary"> Poista </Button>

            </CardActions> 
        </Card>
    </Grid>
            )} 
         )}
</Grid>
    ); 
            }  
        
                
                
  
export default ListComponent; 