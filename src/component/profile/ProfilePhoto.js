import React from "react";
import picture from './P-pic.jpg';


const Photo = () => {
    return ( 
        <img className="img" src= {picture} alt='myimage' width={400} height={400}/>
    );
}


export default Photo;
