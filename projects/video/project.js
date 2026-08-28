const video = document.getElementById("video");
const volume = document.getElementById("volume");
const progress = document.getElementById("progress");

function playVideo(){
video.play();
}

function pauseVideo(){
video.pause();
}

function stopVideo(){
video.pause();
video.currentTime=0;
}

function muteVideo(){
video.muted=!video.muted;
}

function loopVideo(){
video.loop=!video.loop;
}

function fullscreen(){
video.requestFullscreen();
}

function speed(rate){
video.playbackRate=rate;
}

volume.oninput=function(){
video.volume=this.value;
}

video.addEventListener("timeupdate",()=>{

progress.max=video.duration;

progress.value=video.currentTime;

document.getElementById("current").innerHTML=format(video.currentTime);

document.getElementById("duration").innerHTML=format(video.duration);

});

progress.oninput=function(){
video.currentTime=this.value;
}

function format(time){

if(isNaN(time)) return "00:00";

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}

function resize(size){

if(size=="small"){
video.style.height="250px";
}

if(size=="medium"){
video.style.height="420px";
}

if(size=="large"){
video.style.height="600px";
}

}