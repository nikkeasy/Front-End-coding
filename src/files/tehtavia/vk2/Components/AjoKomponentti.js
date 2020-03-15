import React from 'react';



function AjoKomponentti (props) {
return (
    
<p> 
    Nimi:               { props.tiedot.laatija } <br />
    Rekisterunumero:    { props.tiedot.rekisterinro } <br />
    Matka:              { props.tiedot.loppu.lukema - props.tiedot.alku.lukema + " Kilometriä"} <br />
    <br />
    <p> Tekijä:             { props.nimi} </p>
    </p>
);


}

export default AjoKomponentti;