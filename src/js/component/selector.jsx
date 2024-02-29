import React from "react";

const SongSelector = (props) => { 
    return (
        <div onClick={()=>props.playAudio(props.index)} className="selector">
            <p className="songList songPosition"><strong>1</strong></p>
            <p className="songList songName">{props.song.title} -</p>
        </div>

    )
}

export default SongSelector