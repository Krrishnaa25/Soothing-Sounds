//Variables
let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById("gif");
let mast = document.getElementById("mast");
let songName = document.getElementsByClassName("songItem");




//Song List
let songs = [
    { songName: "Japan", filePath: "/songs/1.mp3", coverPath: "/img/1.jpg" },
    { songName: "All I need", filePath: "/songs/2.mp3", coverPath: "/img/2.jpg" },
    { songName: "Throwback Anthem", filePath: "/songs/3.mp3", coverPath: "/img/3.jpg" },
    { songName: "Breathing Underwater", filePath: "/songs/4.mp3", coverPath: "/img/4.jpg" },
    { songName: "Solar Eclipses", filePath: "/songs/5.mp3", coverPath: "/img/5.jpg" },
    { songName: "Love through the night", filePath: "/songs/6.mp3", coverPath: "/img/6.jpg" },
    { songName: "Flip Reset", filePath: "/songs/7.mp3", coverPath: "/img/7.jpg" },
]


// Play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        mast.style.opacity = 1;


    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
        mast.style.opacity = 0;

    }
})

//Listen to Event
audioElement.addEventListener('timeupdate', () => {
    //Update seekbar
    progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.value = progress;

})

//Update seekbar
progressBar.addEventListener('change', () => {
    progresss = (progressBar.value * audioElement.duration) / 100;
    audioElement.currentTime = progresss;
})


    


//Update individual song buttons
const makeAllPlays = () => {

    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {

    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = `/songs/${songIndex + 1}.mp3`;
            mast.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            mast.style.opacity = 1;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        } else {

            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.src = `/songs/${songIndex + 1}.mp3`;
            mast.innerText = songs[songIndex].songName;
            audioElement.pause();
            gif.style.opacity = 0;
            mast.style.opacity = 0;
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
        }
    })

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `/songs/${songIndex + 1}.mp3`;
    mast.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    mast.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('forward').addEventListener('click', () => {

    if (songIndex > 5) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/songs/${songIndex + 1}.mp3`;
    mast.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    mast.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

