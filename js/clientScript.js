document.addEventListener("DOMContentLoaded", function() {
let play = true;
let audio = new Audio("");
let width = document.getElementById("progress").offsetWidth;

document.getElementById("progress").addEventListener("click", function(e) {
    let xPos = e.offsetX;
    console.log("DEBUG: total witdh:", width);
    console.log("DEBUG: clicked x position:", xPos);
    let clickedPercentage = xPos * 100 / width;
    console.log("DEBUG: clicked percentage:", clickedPercentage);
    let jump = audio.duration * clickedPercentage / 100;
    audio.currentTime = jump;
});

function changeAudioTo(src) {
    audio = new Audio(src);
    audio.addEventListener("loadedmetadata", function() {
        didle = document.createTextNode(audio.src);
        document.getElementById("musicInfoID").appendChild(didle);
    }); 
    
}
    document.getElementById("playPause").addEventListener("click", function() {
        if (play == true) {
            audio.play();
            audio.addEventListener("timeupdate", function() {
                console.log("DEBUG: duration:", audio.duration);
                percentage = audio.currentTime * 100 / audio.duration;
                console.log("DEBUG: playback percentage:", percentage.toFixed(1));
                document.getElementById("progressBar").style.width = percentage.toFixed(1) + "%";
            });
            console.log("pause");
            document.getElementById("playPauseImg").src="images/pause.svg";
            play = false;
            } else {
                audio.pause();
                document.getElementById("playPauseImg").src="images/play.svg";
                play = true;
            }
        });
    function createListItem(text) {
    var musicList = document.getElementById("actualMusicList");
    var listElement = document.createElement("li");
    listElement.classList.add("list-group-item");
    var write = document.createTextNode(text);
    listElement.appendChild(write);
    musicList.appendChild(listElement);
    
    }

    for (i=1; i<10; i++) {
        createListItem("Test " + i);
    }
    changeAudioTo("to-the-light.m4a");
});