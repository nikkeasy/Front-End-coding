import React, { useState } from 'react';

function Lomake () {
   //Tilamuuttujat ja niiden alustaminen
    const [Henkilo, setValues] = useState({
        nimi: '',
        paiva: '',
        arvosana: ''
    });
    const [Virheilmo, setTila] = useState({Virheilmo: ''});

    // Nämä voisivat olla myös vain yksi muuta funktio...
    //Tilan muuttamisfunktio
    const muutaNimi = (e) => {
        //... tarkoittaa kopion luomista objektista
        setValues( {
            ...Henkilo,
            [e.target.name]: e.target.value
        } );
    }
    const muutaPaiva = (e) => {
        //... tarkoittaa kopion luomista objektista
        setValues( {
            ...Henkilo,
            [e.target.name]: e.target.value
        } );
    }
    const muutaArvosana = (e) => {
        //... tarkoittaa kopion luomista objektista
        setValues( {
            ...Henkilo,
            [e.target.name]: e.target.value
        } );
    }
   
    // Funktio painikkeen painallukselle
    const lisaaHenkilo = (e) => {
       // Jotta default-toiminto submit ei käsittele tietoja kentistä
        e.preventDefault();

        if(Henkilo.nimi.length === 0 || Henkilo.paiva.length === 0 || Henkilo.arvosana.length === 0 ) {
    
            setTila({Virheilmo: 'Kaikissa kentissä pitää olla arvot!!'});
        }
        else {
            setTila({Virheilmo: 'Henkilö on lisätty onnistuneesti'});
        }
    }

return (

<form>
    <label htmlFor='nimi'>Nimi: </label>
    <input type='text' name='nimi' value={ Henkilo.nimi }
        onChange={ (e) => muutaNimi(e) } /><br />

    <label htmlFor='paiva'>Päivä: </label>
    <input type='text' name='paiva' value={ Henkilo.paiva } 
        onChange={ (e) => muutaPaiva(e) }/><br />

    <label htmlFor='arvosana'>Arvosana: </label>
    <input type='text' name='arvosana' value={ Henkilo.arvosana }
        onChange={ (e) => muutaArvosana(e) } /><br />

    <input type='submit' value='Lisää' onClick={ (e) => lisaaHenkilo(e) }/>
    <p> { Virheilmo.Virheilmo } </p>
</form>

    );
}



export default Lomake;




/*  AIKAISEMPI KOODI - Katso mitä olisit tehnyt väärin 
function Lomake () { 
    return( 



    
<form> 
    <label htmlFor='nimi'> Nimi </label>
    <input type='text' name='nimi' value { nimi } /> <br />

    <label htmlFor='paiva'> Päivä </label>
    <input type='text' name='paiva' value { paiva } /> <br />

    <label htmlFor='arvosana'> Arvosana </label>
    <input type='text' name='arvosana' value { arvosana } /> <br />
    
    <input type='submit' value='Lisää' onClick={ (e) => lisaaHenkilo(e) } />
    
    )
</form> 
    )
}
*/ 
