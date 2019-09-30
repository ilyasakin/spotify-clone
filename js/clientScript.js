let play = true;
let audio = new Audio("");
let targetUrl = "http://192.168.1.40:3500/";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("progress").addEventListener("click", function(e) {
    let xPos = event.clientX - event.currentTarget.offsetLeft;
    console.log("DEBUG: clicked x position:", xPos);
    audio.currentTime = (xPos / event.target.offsetWidth) * audio.duration;
  });
});

function stopAudio(audioOb) {
  if (document.getElementById("progressBar") != null) {
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("playPauseImg").src = "images/play.svg";
  }
  play = true;
  audioOb.currentTime = 0;
  audioOb.pause();
}
function changeAudioTo(src, cover, artist, title) {
  stopAudio(audio);
  audio = new Audio(src);
  audio.addEventListener("loadedmetadata", function() {
    minutes = Math.floor(audio.duration / 60);
    if (/^\d$/.test(minutes)) {
      minutes = "0" + minutes;
    }
    seconds = Math.floor(audio.duration - minutes * 60);
    if (/^\d$/.test(seconds)) {
      seconds = "0" + seconds;
    }
    total = document.createTextNode(minutes + ":" + seconds);
    document.getElementById("songTitle").innerHTML = `${artist} - ${title}`;
    document.getElementById("totalTime").innerHTML = minutes + ":" + seconds;
    ImgEl = document.getElementById("songCoverID");
    ImgEl.innerHTML = `<img src="${cover}" class="songCoverImgCls">`;
  });
}

document.addEventListener("DOMContentLoaded", function() {
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
});
function createListItem(idNum, text, coverLocation) {
  let musicList = document.getElementById("actualMusicList");
  let listElement = document.createElement("li");
  listElement.id = idNum;
  listElement.classList.add("list-group-item");
  listElement.classList.add("list-group-item-dark");
  listElement.classList.add("dummyClass");
  let coverElement = document.createElement("img");
  coverElement.classList.add("coverSmall");
  if (coverLocation != undefined) {
    coverElement.src = coverLocation;
  }
  listElement.appendChild(coverElement);
  let write = document.createTextNode(text);
  listElement.appendChild(write);
  musicList.appendChild(listElement);
}

fetchLenght = fetchAsync(targetUrl + "api/music/lenght");
fetchLenght.then(response => {
  console.log(response);
  for (i = 1; i <= response; i++) {
    fetchSongs = fetchAsync(targetUrl + "api/music/" + i);
    fetchSongs.then(responseSong => {
      createListItem(
        responseSong.id,
        `${responseSong.artist} - ${responseSong.name}`,
        responseSong.cover
      );
      // console.log(responseSong.name);
    });
  }
});

async function fetchAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

window.addEventListener("load", function() {
  [...document.querySelectorAll(".dummyClass")].forEach(function(item) {
    item.addEventListener("click", function() {
      console.log(item.id, item.innerHTML);
      fetchItem = fetchAsync(targetUrl + "api/music/" + item.id);
      fetchItem.then(responseUrl => {
        changeAudioTo(
          responseUrl.location,
          responseUrl.cover,
          responseUrl.artist,
          responseUrl.name
        );
      });
    });
  });
});

changeAudioTo("to-the-light.m4a", "cover.jpg", "A.CHAL", "To The Light");
