import React from 'react'; 

let oldusers1 = 
[
    {
        nimi: "Mysteeri", 
        ika: "11", 
        koodausstatus: "Aktiivinen",
    },
    {
        nimi: "Salla", 
        ika: "22", 
        koodausstatus: "Ei-aktiivinen",
    },
    {
        nimi: "X",
        ika: "26",
        koodausstatus: ":)",
    
  },

];

function ListingUsers (props) { 

    return ( 
        <div> 
           
            {props.oldusers1.map (list => {
                return ( 
                    <p key= { list.nimi }> 
                    Nimi:   { list.nimi} <br />
                    Ikä:    { list.ika }<br />
                    Status: { list.koodausstatus }                 
                    </p> );     
            })
                }
        </div> ); 
        }

function ListAll (props) { 
    return ( 
<div> 
        <ListingUsers list = { oldusers1 } /> <br />


</div>
    )
}
export default ListAll; 