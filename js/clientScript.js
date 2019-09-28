document.addEventListener("DOMContentLoaded", function() {
let play = true;
let audio = new Audio("");
let width = document.getElementById("progress").offsetWidth;

// TODO: CORRECT SEEKING
function jumpToPercent(percent) {
    newPercent = (audio.duration / 100) * percent;
    audio.currentTime = newPercent;
}

document.getElementById("progress").addEventListener("click", function(e) {
    let xPos = e.offsetX;
    console.log("DEBUG: total witdh:", width);
    console.log("DEBUG: clicked x position:", xPos);
    clickedPercentage = (xPos * 100 / width);
    console.log("DEBUG: clicked percentage:", clickedPercentage);
    console.log("DEBUG:", "width:", width, "x pos:", xPos, "clicked percentage:", clickedPercentage);
    jumpToPercent(clickedPercentage);
});

function changeAudioTo(src) {
    audio = new Audio(src);
    audio.addEventListener("loadedmetadata", function() {
        didle = document.createTextNode(audio.src);
        minutes = Math.floor(audio.duration / 60);
        if (/^\d$/.test(minutes))  {
            minutes = "0" + minutes;
          }
        seconds = Math.floor(audio.duration - minutes * 60);
        if (/^\d$/.test(seconds))  {
            seconds = "0" + seconds;
          }
        total = document.createTextNode(minutes + ":" + seconds);
        document.getElementById("musicInfoID").appendChild(didle);
        document.getElementById("totalTime").appendChild(total);
        ImgEl = document.createElement("img");
        ImgEl.src="cover.jpg";
        ImgEl.classList.add("songCoverImgCls");
        document.getElementById("songCoverID").appendChild(ImgEl);
    }); 
    
}
    document.getElementById("playPause").addEventListener("click", function() {
        if (play == true) {
            audio.play();
            audio.addEventListener("timeupdate", function() {
                currentMinute = Math.floor(audio.currentTime / 60);
                currentSecond = Math.floor(audio.currentTime - currentMinute * 60);
                if (/^\d$/.test(currentMinute))  {
                    currentMinute = "0" + currentMinute;
                  }
                if (/^\d$/.test(currentSecond))  {
                    currentSecond = "0" + currentSecond;
                  }
                document.getElementById("curTime").innerHTML=currentMinute + ':' + currentSecond;
                percentage = audio.currentTime * 100 / audio.duration;
               // console.log("DEBUG: playback percentage:", percentage);
                document.getElementById("progressBar").style.width = percentage + "%";
                if (audio.currentTime >= audio.duration) {
                    play = true;
                    document.getElementById("playPauseImg").src="images/play.svg";
                }
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