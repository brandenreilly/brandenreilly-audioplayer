import React, { useRef, useState, useEffect } from "react";

const Home = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isLooping, setIsLooping] = useState(false)
	const [newSongList, setNewSongList] = useState([])
	useEffect(()=>{
		fetch("https://playground.4geeks.com/apis/fake/sound/songs")
		.then(resp => resp.json())
		.then(data => setNewSongList(data))
	}, [])
		var audioRef = null
		var currentSong = 0;
		const playAudio = (index) => {
			audioRef.src= "https://assets.breatheco.de/apis/sound/" + newSongList[index].url
			audioRef.play()
			currentSong = index
			setIsPlaying(true)
		}
		const pauseAudio = () => {
			audioRef.pause()
			setIsPlaying(false)
		}
		const raiseVolume = () => {
			audioRef.volume += 0.1 
			console.log(audioRef.volume)
			if(audioRef.volume >= 1){
				alert("Volume is already at 100%")
			}
		}
		const lowerVolume = () => {
			audioRef.volume -= 0.1
			console.log(audioRef.volume)
			if(audioRef.volume <= 0.1){
				alert("Volume can not go any lower.")
			}
		}
		const repeatSong = () => {
			if(isLooping == false){
				audioRef.loop = true
				setIsLooping(true)
			} else if(isLooping == true){
				audioRef.loop = false
				setIsLooping(false)
			}
		}
		
		var currentSong = 0;
		const getPercentOfSong = () => {
			const percentagePosition = (100*audioRef.currentTime) / audioRef.duration;
			console.log(percentagePosition)
		}
		var timeline = useRef(null)
		return (
		<div>
			{newSongList.map((song,index)=>{
			return (
				<div key={index} onClick={()=>{playAudio(index)}} tabIndex={0} className="selector">
            		<p className="songList songPosition" ><strong>{index + 1}</strong></p>
            		<p className="songList songName">{song.name} -</p>
        		</div>
				)
			})}
		
			<footer className="text-center fixed-bottom">
				<div className="MediaRow row d-flex align-items-center justify-content-center">
					<div className="col-3">
					<button className="btn MediaIcons" onClick={()=>{repeatSong()}}><i class="fas fa-redo fa-lg"></i></button>
					</div>
					<div className="col-5">
						<button className="btn MediaIcons" onClick={()=>{playAudio(currentSong - 1)}}><i className="fas fa-backward fa-lg"></i></button>
						<button className="btn MediaIcons" style={{display: isPlaying ? "none" : ""}} onClick={()=>{playAudio(currentSong)}}><i class="fas fa-play fa-lg"></i></button>
						<button className="btn MediaIcons" style={{display: isPlaying ? "" : "none"}} onClick={()=>{pauseAudio()}}><i class="fas fa-pause-circle fa-lg"></i></button>
						<button className="btn MediaIcons" onClick={()=>{playAudio(currentSong + 1)}}><i className="fas fa-forward fa-lg"></i></button>
						<input type="range" className="timeline" max={"100"} value={"0"} onChange={()=>{
							console.log(audioRef.currentTime);
							getPercentOfSong()
							}} ref={timeline}></input>
							<button className="btn MediaIcons" onClick={()=>{getPercentOfSong();console.log(audioRef.duration)}}>Test</button>
					</div>
					<div className="col-4">
						<button className="btn MediaIcons" onClick={()=>{lowerVolume()}}><i class="fas fa-volume-down fa-lg"></i></button>
						<button className="btn MediaIcons" onClick={()=>{raiseVolume()}}><i class="fas fa-volume-up fa-lg"></i></button>
					</div>
				</div>
				<audio ref={(e)=>audioRef=e}></audio>
			</footer> 
		</div>
	);
};

export default Home;
