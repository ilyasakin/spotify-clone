document.addEventListener("DOMContentLoaded", function() {
let play = true;
let audio = new Audio("");
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
                percentage = audio.currentTime * 100 / audio.duration;
                console.log(percentage.toFixed(1));
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