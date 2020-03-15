import React, {useState, useEffect} from 'react';

function FetchComponent () {
const [Hlotieto, setHlotieto ] = useState( {
    id: '', 
    name: '', 
    username: '', 
    city: '',
    

});
const [virhe, setVirhe] = useState('Haetaan...');

const fetchUrl = async () => {
    try { 

        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const json = await response.json();
         setVirhe ('');
         setHlotieto( 
                {
                    id: json.id, 
                    name: json.name,
                    username: json.username, 
                    city: json.address.city, 
                }
         );  

    } catch (error) {
        setVirhe("Haku ei onnistunut");

    }
}

useEffect( () => { fetchUrl() }, [] );

if (virhe.lenght > 0) {
    return( 
            <p> {virhe} </p>
        );
}

    return( 
        <div>
            Nimi:  { Hlotieto.name } <br />
            Käyttäjä: {Hlotieto.username } <br />
            Kaupunki: { Hlotieto.city } <br />

        </div>


    )

}

export default FetchComponent;

//API-KEY aa90ec56063b8a21e8c959047e6b9dd6
