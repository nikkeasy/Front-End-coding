import React, {useState, useEffect } from 'react'; 

function GetSong () {

    const [title, setTitle] = useState(''); 
    const [enclosure, setEnclosure] = useState(''); 
    const [message, setMessage] = useState('Loading data... Please wait'); 

const fetchUrl = async () => {
    try {
        const response = await fetch ('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.publicradio.org%2Fpublic_feeds%2Fsong-of-the-day%2Frss%2Frss');
        const json = await response.json(); 
        setTitle(json.items[0].title); 
        setEnclosure(json.items[0].enclosure.link)
        setMessage(''); 
    }   catch (error) {
        setMessage("Oh Snap! Couldn't find data");
    }
}

useEffect ( () => { fetchUrl () }, [] );  // 

    if (message.length > 0) {
        return <div> 
                <p style={{color: "red"}}> {message} </p>

                </div> 
                }

                return ( 
                    <div style={{ color: "blue" }}>

                    Päivän biisi: { title } <br />
                    <div style={{ color: "green"}}>Link: {enclosure}</div> 

                    </div>
                );
}


export default GetSong;