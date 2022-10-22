import Player from '@vimeo/player';

const iframeRef = document.querySelector("iframe")
const player = new Player(iframeRef);
player.on('timeupdate', onPlay);

function onPlay() {
    
}