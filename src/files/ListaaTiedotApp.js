import React from 'react';
import ListaaTiedot from '../components/ListaaTiedot';
import ListOldUsersComponent from '../components/ListOldUsersComponent';
import GetSong from '../files/TestFiles/Components/RadioComponent'

function ListaaTiedotApp () { 
    return( 
        <div> 
            <ListaaTiedot/>
            <ListOldUsersComponent/>
            <GetSong/>

        </div>


    )

}

export default ListaaTiedotApp;