
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let currentTime = 0
const LOCALSTOREG_TIME = "videoplayer-current-time"

function getTime({seconds}) {
    console.log('played the video!')

    localStorage.setItem(LOCALSTOREG_TIME, seconds)
    currentTime = localStorage.getItem(LOCALSTOREG_TIME)
    console.log(currentTime)
}

player.on('timeupdate', throttle(getTime, 1000));

const savedTime = localStorage.getItem(LOCALSTOREG_TIME)

if (savedTime) {
    player.setCurrentTime(savedTime)
}



