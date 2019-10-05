let play = true;
let audio = new Audio('');
let currentVolume = 1;

// probably there is some better way to store server url but,
// since this application won't be published corporately,
// there is no need for security features.

const targetUrl = 'http://192.168.1.40:3500/';

// function that start the song and change icon of the button

function playSong() {
  audio.play();
  console.log('pause');
  document.getElementById('playPauseImg').src = 'images/pause.svg';
  play = false;
}

// function that stop the song and change icon of the button

function pauseSong() {
  audio.pause();
  document.getElementById('playPauseImg').src = 'images/play.svg';
  play = true;
}

// function that tracks the time and manipulate some elements

function trackTime() {
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
}

// calculate percentage of the position that user clicked,
// and jump to the calculated time

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('progress').addEventListener('click', function(e) {
    const xPos = e.clientX - e.currentTarget.offsetLeft;
    console.log('DEBUG: clicked x position:', xPos);
    audio.currentTime = (xPos / e.target.offsetWidth) * audio.duration;
  });

  // same thing above but for volume

  document
    .getElementById('volumeBlockID')
    .addEventListener('click', function(e) {
      const xPos = e.clientX - e.currentTarget.offsetLeft;
      const calculatedVolume = (xPos / e.target.offsetWidth) * 1;

      // if x position is below or above range
      // set volume to min or max level

      if (calculatedVolume < 0) {
        audio.volume = 0;
      } else if (calculatedVolume > 1) {
        audio.volume = 1;
      } else {
        audio.volume = calculatedVolume;
      }
    });

  // listen keys
  document.onkeydown = function(event) {
    if (event.keyCode === 32) {
      // space key
      if (play === true) {
        playSong();
      } else {
        pauseSong();
      }
    } else if (event.keyCode === 37) {
      // left arrow
      audio.currentTime -= 3; // jump 3 seconds back
    } else if (event.keyCode === 39) {
      // right arrow
      audio.currentTime += 3; // jump 3 seconds forward
    } else if (event.keyCode === 38) {
      // up key
      audio.volume += 0.1; // volume up by %10
    } else if (event.keyCode === 40) {
      // down key
      audio.volume -= 0.1; // volume down by %10
    }
  };
});

// function that fetch & process promise

async function fetchAsync(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// go back to 0 percent
// seems unnecessary will change later

function stopAudio(audioOb) {
  if (document.getElementById('progressBar') != null) {
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('playPauseImg').src = 'images/play.svg';
  }
  play = true;
  audioOb.currentTime = 0;
  audioOb.pause();
}

// as the name suggests when triggered with given arguments,
// it manipulates certain elements and changes source of the,
// audio element

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
  trackTime();
}

// function that creates music list with given arguments

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

// fetch count of songs
const fetchLenght = fetchAsync(`${targetUrl}api/music/lenght`);
fetchLenght.then(response => {
  console.log(response);
  // create list items as many as given response
  for (let i = 1; i <= response; i += 1) {
    const fetchSongs = fetchAsync(`${targetUrl}api/music/${i}`);
    fetchSongs.then(responseSong => {
      // responseSong strangely gives an array with an object inside, thats why indexes are 0
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

// wait for content to load then add event listeners
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('playPause').addEventListener('click', function() {
    if (play === true) {
      playSong();
    } else {
      pauseSong();
    }
  });
  audio.addEventListener('volumechange', function() {
    currentVolume = audio.volume;
    const volumePercentage = (currentVolume * 100) / 1;
    document.getElementById(
      'volumeProgress'
    ).style.width = `${volumePercentage}%`;
    document.getElementById('volume').value = currentVolume * 10;
  });
});

// initial song
changeAudioTo(
  `${targetUrl}assets/music/to-the-light.m4a`,
  `${targetUrl}assets/images/cover.jpg`,
  'A.CHAL',
  'To The Light'
);
