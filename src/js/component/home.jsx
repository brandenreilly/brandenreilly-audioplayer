import React, { useRef, useState } from "react";
import SongSelector from "./selector.jsx"

const Home = () => {
	const [isPlaying, setIsPlaying] = useState(false)

	/* var myAudioObject = new Audio();
	for (var key in myAudioObject){
   		if (typeof myAudioObject[key] === "number"){
       console.log(key);
   		}
		else if (typeof myAudioObject[key] === "function"){
			console.log(key)
		}
	} */
		var audioRef = null
		var currentSong = 0;
		const playAudio = (index) => {
			audioRef.src=songList[index].url
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
			if(audioRef.currentTime === audioRef.duration){
				audioRef.play(currentSong)
			}
		}
		var currentSong = 0;
		let songList = [
			{
				title: "South Park",
				id: "south-park",
				author: "Kyle",
				url:
					"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
			},
			{
				title: "Thunder Cats",
				id: "thundercats",
				author: "Moonra",
				url:
					"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
			},
			{
				title: "X-Men",
				id: "x-men",
				author: "Profesor",
				url:
					"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
			}
		]
		
		return (
		<div>
			{songList.map((song,index)=>{
			return (
				<SongSelector isPlaying={isPlaying} song={song} index={index} playAudio={playAudio} key={index} currentSong={currentSong} />
				)
			})}
		
			<footer className="text-center fixed-bottom">
				<div className="MediaRow row d-flex justify-content-center">
					<div className="col-3">
					<button className="btn MediaIcons" onClick={()=>{repeatSong()}}><i class="fas fa-redo fa-lg"></i></button>
					</div>
					<div className="col-5">
						<button className="btn MediaIcons" onClick={()=>{playAudio(currentSong - 1)}}><i className="fas fa-backward fa-lg"></i></button>
						<button className="btn MediaIcons" style={{display: isPlaying ? "none" : ""}} onClick={()=>{playAudio(currentSong)}}><i class="fas fa-play fa-lg"></i></button>
						<button className="btn MediaIcons" style={{display: isPlaying ? "" : "none"}} onClick={()=>{pauseAudio()}}><i class="fas fa-pause-circle fa-lg"></i></button>
						<button className="btn MediaIcons" onClick={()=>{playAudio(currentSong + 1)}}><i className="fas fa-forward fa-lg"></i></button>
					</div>
					<div className="col-4">
						<button className="btn MediaIcons" onClick={()=>{lowerVolume()}}><i class="fas fa-volume-down fa-lg"></i></button>
						<button className="btn MediaIcons" onClick={()=>{raiseVolume()}}><i class="fas fa-volume-up fa-lg"></i></button>
					</div>
				</div>
				<audio controls ref={(e)=>audioRef=e}></audio>
			</footer> 
		</div>
	);
};

export default Home;
