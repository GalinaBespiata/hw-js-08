import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
 const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);


function onVideoPlayer(event){
    
     let watchedTime = event.seconds;
     localStorage.setItem(STORAGE_KEY || 0, JSON.stringify(watchedTime))
}
iframePlayer.on('timeupdate', throttle(onVideoPlayer, 1000));
console.log(localStorage)
 
const startwatching = localStorage.getItem(STORAGE_KEY);

if(startwatching){
    iframePlayer
    .setCurrentTime(startwatching)
    .then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
}
