document.addEventListener("DOMContentLoaded", function() {
let play = true;
    document.getElementById("playPause").addEventListener("click", function() {
        if (play == true) {
            console.log("pause");
            document.getElementById("playPauseImg").src="images/pause.svg";
            play = false;
            } else {
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


    
//  var write = document.createTextNode("Test");
// listElement.classList.add("list-group-item");
//listElement.appendChild(write);
    musicList.appendChild(listElement); 
});