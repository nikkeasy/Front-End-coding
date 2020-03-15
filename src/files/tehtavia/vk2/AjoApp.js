import React from 'react';  
import AjoKomponentti from './Components/AjoKomponentti';

const ajopaivakirja = 
    
{
    rekisterinro: "XYZ-123",
    laatija: "Risto Reipas",
    alku: {
     lukema: "32500",
     lahtoaika: "13:30",
     paiva: "2020-01-27",
     paikka: "Ratapihantie 13, Helsinki",
    },
    loppu: {
     lukema: "32510",
     loppuaika: "13:50",
     paiva: "2020-06-27",
     paikka: "Hietakummuntie 1, Helsinki",
    }

    
     };


function AjoApp () { 

    return (
        <div>
            <h1> Ajopäiväkirjan tiedot </h1>
        <AjoKomponentti tiedot = { ajopaivakirja } nimi={'Nikolas Kunnas'}/> <br/>
      
        </div> 
    )
}

export default AjoApp;