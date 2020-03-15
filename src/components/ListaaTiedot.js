import React, { useState } from 'react'; 

function TietoLomake (props) { 

    
    const [henkilotiedot, setHenkiloTiedot] = useState( {  
        etunimi: '',
        sukunimi: '',
        maa: '',
        sukupuoli: '',
        pituus: '',
        paino: '',
    } );



    const lisaaTiedot = (e)  => {
        setHenkiloTiedot( {etunimi:e.target.value, sukunimi: '', maa: '',
                        sukupuoli: '', pituus: '', paino: '',
            
         });
    }
    
    const inputChanged = event => {
        setHenkiloTiedot({ ...henkilotiedot, [event.target.name]: event.target.value  });



    }

    return (
    
    <div>
        <form> 
            <label htmlFor='etunimi'> Etunimi </label> 
            <input type='text' name='etunimi' value={ henkilotiedot.etunimi} onChange={inputChanged}      /> <br />

            <label htmlFor='sukunimi'> Sukunimi </label> 
            <input type='text' name='sukunimi' value={ henkilotiedot.sukunimi} onChange={inputChanged} /> <br />


            <label htmlFor='maa'> Maa </label> 
            <input type='text' name='maa' value={ henkilotiedot.maa} onChange={inputChanged}/> <br />

            <label htmlFor='sukupuoli'> Sukupuoli </label> 
            <input type='text' name='sukupuoli' value={ henkilotiedot.sukupuoli} onChange={inputChanged} /> <br />

            <label htmlFor='pituus'> Pituus </label> 
            <input type='text' name='pituus' value={ henkilotiedot.pituus} onChange={inputChanged} /> <br />

            <label htmlFor='paino'> Paino </label> 
            <input type='text' name='paino' value={ henkilotiedot.paino} onChange={inputChanged} /> <br />

            <input type='submit' value='Lisää' onClick={lisaaTiedot} />

            
        </form>
    </div>
    
    );

}

export default TietoLomake; 