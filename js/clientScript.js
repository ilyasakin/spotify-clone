document.addEventListener("DOMContentLoaded", function() {
  let play = true;
  let audio = new Audio("");
  
  document.getElementById("progress").addEventListener("click", function(e) {
    let xPos = event.clientX - event.currentTarget.offsetLeft;
    console.log("DEBUG: clicked x position:", xPos);
    audio.currentTime = (xPos / event.target.offsetWidth) * audio.duration;
  });

  function changeAudioTo(src) {
    audio = new Audio(src);
    audio.addEventListener("loadedmetadata", function() {
      didle = document.createTextNode(audio.src);
      minutes = Math.floor(audio.duration / 60);
      if (/^\d$/.test(minutes)) {
        minutes = "0" + minutes;
      }
      seconds = Math.floor(audio.duration - minutes * 60);
      if (/^\d$/.test(seconds)) {
        seconds = "0" + seconds;
      }
      total = document.createTextNode(minutes + ":" + seconds);
      document.getElementById("musicInfoID").appendChild(didle);
      document.getElementById("totalTime").appendChild(total);
      ImgEl = document.createElement("img");
      ImgEl.src = "cover.jpg";
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
        if (/^\d$/.test(currentMinute)) {
          currentMinute = "0" + currentMinute;
        }
        if (/^\d$/.test(currentSecond)) {
          currentSecond = "0" + currentSecond;
        }
        document.getElementById("curTime").innerHTML =
          currentMinute + ":" + currentSecond;
        percentage = (audio.currentTime * 100) / audio.duration;
        console.log(
          "DEBUG: playback percentage:",
          percentage,
          "duration: ",
          audio.duration
        );
        document.getElementById("progressBar").style.width = percentage + "%";
        if (audio.currentTime >= audio.duration) {
          play = true;
          document.getElementById("playPauseImg").src = "images/play.svg";
        }
      });
      console.log("pause");
      document.getElementById("playPauseImg").src = "images/pause.svg";
      play = false;
    } else {
      audio.pause();
      document.getElementById("playPauseImg").src = "images/play.svg";
      play = true;
    }
  });
  function createListItem(text) {
    let musicList = document.getElementById("actualMusicList");
    let listElement = document.createElement("li");
    listElement.classList.add("list-group-item");
    let write = document.createTextNode(text);
    listElement.appendChild(write);
    musicList.appendChild(listElement);
  }

  for (i = 1; i < 10; i++) {
    createListItem("Test " + i);
  }
  changeAudioTo("to-the-light.m4a");
});
