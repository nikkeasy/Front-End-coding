// ks esimerkki object.valuesista 

import React from 'react'; 





function ListOldUsersComponent () { 
    return ( 
            <div> 
                { oldusers.map (list => {
                    return ( 
                        <p key={ list.id }>
                            Id: { list.id } <br />
                            First Name {list.first_name } <br />
                            Last Name {list.last_name } <br /> 
                            Country: {list.country } <br />
                            Gender: {list.gender } <br />
                            Ip address {list.ip_address }
                        </p> );
                })
            }    
                
            
         </div>  );
 }

let oldusers = 
[
    {id:"1", first_name:"Maryl",last_name:"Casterou",email:"mcasterou0@berkeley.edu",gender:"Female",ip_address:"8.75.97.175",
},
    {id:"2",first_name:"Annalise",last_name:"Blazewski",email:"ablazewski1@engadget.com",gender:"Female",ip_address:"240.88.168.70",
},
    {id:"3",first_name:"Giavani",last_name:"Dregan",email:"gdregan2@webnode.com",gender:"Male",ip_address:"244.45.34.245",
},
    {id:"4",first_name:"Thomasa",last_name:"Joannet",email:"tjoannet3@1und1.de",gender:"Female",ip_address:"31.49.121.122",
},
    {id:"5",first_name:"Leontyne",last_name:"Knappett",email:"lknappett4@apache.org",gender:"Female",ip_address:"8.57.101.46",
},
];

function ListOldUsersApp () { 

return( 
<div> 
    <h1 style= {{backgroundColor: "lightblue"}}>  Vanhoja käyttäjiä </h1> {/* css-tyyli otsikossa */ }

   <ListOldUsersComponent list = { oldusers } /> <br /> 
   {/* Error:  Uncaught TypeError: Cannot read property 'map' of undefined?? Miksi?*/ }
</div> 
); 
}

export default ListOldUsersApp;