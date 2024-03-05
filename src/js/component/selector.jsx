import React, { useState } from "react";
import { isPlaying } from "./home";


// Moved to "/home.jsx"
// Didn't need another component.


const SongSelector = (props) => { 
    
    return (
        <div onClick={()=>{props.playAudio(props.index)}} tabIndex={0} className="selector">
            <p className="songList songPosition" ><strong>{props.index + 1}</strong></p>
            <p className="songList songName">{props.song.title} -</p>
        </div>

    )
}

export default SongSelector