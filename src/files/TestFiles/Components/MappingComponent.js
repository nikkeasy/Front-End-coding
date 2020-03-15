import React from 'react'; 


function MappingComponent (props) {
    return( 
       <div>
        { props.aikamerkinnat.map (listaa => {
        return ( 
        <p key={ listaa.nimi }>
        Nimi:   { listaa.nimi } <br />
        Alkaa:  { listaa.alkupaiva } <br />
        Päättyy:{ listaa.loppupaiva } 
                </p> );
            })
        }
        </div> );

       
    }

export default MappingComponent;