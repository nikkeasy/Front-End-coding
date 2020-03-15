import React from 'react'; 

let lomamerkinnat = [
    {
     nimi: "Virtanen Matti",
     alkupaiva: "2020-06-01",
     loppupaiva: "2020-06-30",
    },
    {
     nimi: "Laaksonen Lisa",
     alkupaiva: "2020-07-01",
     loppupaiva: "2020-07-31",
    },
    {
     nimi: "Niemi Juha",
     alkupaiva: "2020-06-01",
     loppupaiva: "2020-06-14",
    },
    {
     nimi: "Lehtonen Erkki",
     alkupaiva: "2020-08-01",
     loppupaiva: "2020-08-31",
    } ];
    
    function LomaObject (props) {

        return ( 
            <div> 

           {props.lomamerkinnat.map (list => {
            return (
               <p key= { list.nimi}> 
         Loma : {list.nimi } 
        <p> Loma alkaa  : {list.alkupaiva} Ja päättyy {list.loppupaiva} </p> 
        </p> );
            })
                }
        </div>);
    }

    function ListLoma () {
        return (
            <div> 
                <h2> Lomamerkinnät </h2>
                <LomaObject lomamerkinnat = { lomamerkinnat } /> 
            </div>
        )
    }

    export default ListLoma; 