import React, { useState } from "react";
import { isPlaying } from "./home";

const SongSelector = (props) => { 
    
    return (
        <div onClick={()=>props.playAudio(props.index)} className="selector">
            <p className="songList songPosition" ><strong>{props.index + 1}</strong></p>
            <p className="songList songName">{props.song.title} -</p>
        </div>

    )
}

export default SongSelector