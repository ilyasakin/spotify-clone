let isPlaying = false;
let isLoading = true;
let audio = new Audio('');
let currentVolume = 1;
let currentSong;
let fetchedLenght;

// probably there is some better way to store server url but,
// since this application won't be published corporately,
// there is no need for security features.

const targetUrl = 'https://spotify-clone-server.herokuapp.com/';

// function that fetch & process promise

const fetchAsync = async url => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

// go back to 0 percent
// seems unnecessary will change later

const stopAudio = audioOb => {
	if (document.getElementById('progressBar') != null) {
		document.getElementById('progressBar').style.width = '0%';
		document.getElementById('playPauseImg').src = 'images/play.svg';
	}
	isPlaying = false;
	audioOb.currentTime = 0;
	audioOb.pause();
};

// function that start the song and change icon of the button

const playSong = () => {
	audio.play();
	document.getElementById('playPauseImg').classList.remove('fa-play');
	document.getElementById('playPauseImg').classList.add('fa-pause');
	isPlaying = true;
};

// function that stop the song and change icon of the button

const pauseSong = () => {
	audio.pause();
	document.getElementById('playPauseImg').classList.remove('fa-pause');
	document.getElementById('playPauseImg').classList.add('fa-play');
	isPlaying = false;
};

// as the name suggests when triggered with given arguments,
// it manipulates certain elements and changes source of the,
// audio element

const changeAudioTo = (src, cover, artist, title) => {
	if (isPlaying === true) {
		stopAudio(audio);
		isPlaying = true;
	} else {
		stopAudio(audio);
	}
	audio = new Audio(src);
	audio.volume = currentVolume;
	audio.addEventListener('loadedmetadata', () => {
		let minutes = Math.floor(audio.duration / 60);
		if (/^\d$/.test(minutes)) {
			minutes = `0${minutes}`;
		}
		let seconds = Math.floor(audio.duration - minutes * 60);
		if (/^\d$/.test(seconds)) {
			seconds = `0${seconds}`;
		}
		document.getElementById('songTitle').innerHTML = `${artist} - ${title}`;
		document.getElementById(
			'totalTime'
		).innerHTML = `${minutes}:${seconds}`;
		const ImgEl = document.getElementById('songCoverID');
		ImgEl.innerHTML = `<img src="${cover}" class="songCoverImgCls">`;
		document.getElementById('slideSeek').value = `0`;
		if (isPlaying === true) {
			playSong();
		}
	});
	// eslint-disable-next-line no-use-before-define
	trackTime();
	// eslint-disable-next-line no-use-before-define
	trackVolume();
};

const fNextSong = () => {
	currentSong += 1;
	const next = fetchAsync(`${targetUrl}api/music/${currentSong}`);
	next.then(nextSong => {
		changeAudioTo(
			targetUrl + nextSong[0].location,
			targetUrl + nextSong[0].cover,
			nextSong[0].artist,
			nextSong[0].name
		);
	});
};

const fPrevSong = () => {
	currentSong -= 1;
	const next = fetchAsync(`${targetUrl}api/music/${currentSong}`);
	next.then(prevSong => {
		changeAudioTo(
			targetUrl + prevSong[0].location,
			targetUrl + prevSong[0].cover,
			prevSong[0].artist,
			prevSong[0].name
		);
	});
};

// function that tracks the volume of the song and updates the elements width

const trackVolume = () => {
	audio.addEventListener('volumechange', () => {
		currentVolume = audio.volume;
		const volumePercentage = (currentVolume * 100) / 1;
		document.getElementById(
			'volumeProgress'
		).style.width = `${volumePercentage}%`;
		document.getElementById('volume').value = currentVolume * 10;
	});
};

// function that tracks the time and manipulate some elements

const trackTime = () => {
	audio.addEventListener('timeupdate', () => {
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
			if (isPlaying === true) {
				stopAudio(audio);
				isPlaying = true;
			} else {
				stopAudio(audio);
			}
			if (currentSong < fetchedLenght && currentSong >= 1) {
				fNextSong();
			} else {
				console.log('do not exceed');
			}
		}
	});
};

// calculate percentage of the position that user clicked,
// and jump to the calculated time

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('progress').addEventListener('click', e => {
		const xPos = e.clientX - e.currentTarget.offsetLeft;
		console.log('DEBUG: clicked x position:', xPos);
		audio.currentTime = (xPos / e.target.offsetWidth) * audio.duration;
	});

	// same thing above but for volume

	document.getElementById('volumeBlockID').addEventListener('click', e => {
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
	document.onkeydown = event => {
		if (event.keyCode === 32) {
			// space key
			if (isPlaying === false) {
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

// function that creates music list with given arguments

const createListItem = (idNum, text, coverLocation) => {
	// if this function executed it means server responded
	// if server responded there is no need for loader
	// it is not the best practice to execute everytime
	// but its works for now
	if (isLoading === true) {
		document.getElementById('loader').style.display = 'none';
		isLoading = false;
	}
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
	listAElement.onclick = () => {
		const fetchThis = fetchAsync(
			`${targetUrl}api/music/${listAElement.id}`
		);
		fetchThis.then(responseUrl => {
			currentSong = responseUrl[0].id;
			console.log('Current Song:', currentSong);
			console.log(responseUrl);
			changeAudioTo(
				targetUrl + responseUrl[0].location,
				targetUrl + responseUrl[0].cover,
				responseUrl[0].artist,
				responseUrl[0].name
			);
			if (isPlaying === false) {
				playSong();
			}
		});
	};
	listElement.appendChild(listAElement);
	musicList.appendChild(listElement);
};

const cleanList = () => {
	document.getElementById('actualMusicList').innerHTML = '';
};

const mainMenu = () => {
	// will give an error at first start because page isn't loaded yet
	// so when it gave an error it will wait to content to loaded
	try {
		cleanList();
	} catch {
		document.addEventListener('DOMContentLoaded', () => {
			cleanList();
		});
	}

	// fetch count of songs
	const fetchLenght = fetchAsync(`${targetUrl}api/music/lenght`);
	fetchLenght.then(response => {
		fetchedLenght = response;
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
};

const myPlaylist = () => {
	cleanList();
};

// wait for content to load then add event listener
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('playPause').addEventListener('click', () => {
		if (isPlaying === false) {
			playSong();
		} else {
			pauseSong();
		}
	});
	document.getElementById('leftControl').addEventListener('click', () => {
		if (currentSong <= 1) {
			console.log('do not exceed');
		} else {
			fPrevSong();
		}
	});
	document.getElementById('rightControl').addEventListener('click', () => {
		if (currentSong >= fetchedLenght) {
			console.log('do not exceed');
		} else {
			fNextSong();
		}
	});

	document.getElementById('mainMenu').addEventListener('click', () => {
		mainMenu();
	});
	document.getElementById('myPlaylist').addEventListener('click', () => {
		myPlaylist();
	});
});
mainMenu();
// initial song
currentSong = 1;
changeAudioTo(
	`${targetUrl}assets/music/to-the-light.m4a`,
	`${targetUrl}assets/images/cover.jpg`,
	'A.CHAL',
	'To The Light'
);
