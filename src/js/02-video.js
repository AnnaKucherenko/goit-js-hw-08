import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

const onPlayerTime = function(dataTime) {
    const dataTimeJSON = JSON.stringify(dataTime);
    localStorage.setItem(STORAGE_KEY, dataTimeJSON);
    
};
player.on('timeupdate', throttle(onPlayerTime, 1000));

const savedDataTime = localStorage.getItem(STORAGE_KEY);
const objectDataTime = JSON.parse(savedDataTime);

player.setCurrentTime(objectDataTime.seconds).then(function(seconds) {
    seconds = objectDataTime.seconds
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});


