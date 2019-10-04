let play = true;
let audio = new Audio('');
const targetUrl = 'http://192.168.1.40:3500/';

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('progress').addEventListener('click', function(e) {
    const xPos = e.clientX - e.currentTarget.offsetLeft;
    console.log('DEBUG: clicked x position:', xPos);
    audio.currentTime = (xPos / e.target.offsetWidth) * audio.duration;
  });
});

async function fetchAsync(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function stopAudio(audioOb) {
  if (document.getElementById('progressBar') != null) {
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('playPauseImg').src = 'images/play.svg';
  }
  play = true;
  audioOb.currentTime = 0;
  audioOb.pause();
}

function changeAudioTo(src, cover, artist, title) {
  stopAudio(audio);
  audio = new Audio(src);
  audio.addEventListener('loadedmetadata', function() {
    let minutes = Math.floor(audio.duration / 60);
    if (/^\d$/.test(minutes)) {
      minutes = `0${minutes}`;
    }
    let seconds = Math.floor(audio.duration - minutes * 60);
    if (/^\d$/.test(seconds)) {
      seconds = `0${seconds}`;
    }
    document.getElementById('songTitle').innerHTML = `${artist} - ${title}`;
    document.getElementById('totalTime').innerHTML = `${minutes}:${seconds}`;
    const ImgEl = document.getElementById('songCoverID');
    ImgEl.innerHTML = `<img src="${cover}" class="songCoverImgCls">`;
    document.getElementById('slideSeek').value = `0`;
  });
}

function createListItem(idNum, text, coverLocation) {
  const musicList = document.getElementById('actualMusicList');
  const listElement = document.createElement('li');
  const listAElement = document.createElement('a');
  listAElement.id = idNum;
  listElement.classList.add('list-group-item');
  listElement.classList.add('list-group-item-dark');
  listAElement.classList.add('dummyClass');
  const coverElement = document.createElement('img');
  coverElement.classList.add('coverSmall');
  if (coverLocation !== undefined) {
    coverElement.src = coverLocation;
  }
  listAElement.appendChild(coverElement);
  const write = document.createTextNode(text);
  listAElement.appendChild(write);
  listAElement.onclick = function() {
    const fetchThis = fetchAsync(`${targetUrl}api/music/${listAElement.id}`);
    fetchThis.then(responseUrl => {
      console.log(responseUrl);
      changeAudioTo(
        targetUrl + responseUrl[0].location,
        targetUrl + responseUrl[0].cover,
        responseUrl[0].artist,
        responseUrl[0].name
      );
    });
  };
  listElement.appendChild(listAElement);
  musicList.appendChild(listElement);
}

const fetchLenght = fetchAsync(`${targetUrl}api/music/lenght`);
fetchLenght.then(response => {
  console.log(response);
  for (let i = 1; i <= response; i += 1) {
    const fetchSongs = fetchAsync(`${targetUrl}api/music/${i}`);
    fetchSongs.then(responseSong => {
      console.log(responseSong[0]);
      createListItem(
        responseSong[0].id,
        `${responseSong[0].artist} - ${responseSong[0].name}`,
        targetUrl + responseSong[0].cover
      );
      // console.log(responseSong.name);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('playPause').addEventListener('click', function() {
    if (play === true) {
      audio.play();
      audio.addEventListener('timeupdate', function() {
        let currentMinute = Math.floor(audio.currentTime / 60);
        let currentSecond = Math.floor(audio.currentTime - currentMinute * 60);
        if (/^\d$/.test(currentMinute)) {
          currentMinute = `0${currentMinute}`;
        }
        if (/^\d$/.test(currentSecond)) {
          currentSecond = `0${currentSecond}`;
        }
        document.getElementById(
          'curTime'
        ).innerHTML = `${currentMinute}:${currentSecond}`;
        const percentage = (audio.currentTime * 100) / audio.duration;
        console.log(
          'DEBUG: playback percentage:',
          percentage,
          'duration: ',
          audio.duration
        );
        document.getElementById('progressBar').style.width = `${percentage}%`;
        document.getElementById('slideSeek').value = `${percentage}`;
        if (audio.currentTime >= audio.duration) {
          play = true;
          document.getElementById('playPauseImg').src = 'images/play.svg';
        }
      });
      console.log('pause');
      document.getElementById('playPauseImg').src = 'images/pause.svg';
      play = false;
    } else {
      audio.pause();
      document.getElementById('playPauseImg').src = 'images/play.svg';
      play = true;
    }
  });
});

changeAudioTo(
  `${targetUrl}assets/music/to-the-light.m4a`,
  `${targetUrl}assets/images/cover.jpg`,
  'A.CHAL',
  'To The Light'
);
