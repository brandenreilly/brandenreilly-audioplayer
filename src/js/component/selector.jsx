import React from "react";
import { isPlaying } from "./home";

const SongSelector = (props) => { 
    return (
        <div onClick={()=>props.playAudio(props.index)} className="selector" /* style={{background: props.isPlaying ? "red" : "green"}} */>
            <p className="songList songPosition" ><strong>1</strong></p>
            <p className="songList songName">{props.song.title} -</p>
        </div>

    )
}

export default SongSelector