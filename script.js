const hourBar = document.querySelector(".hour-hand");
const minuteBar = document.querySelector(".minute-hand");
const secondBar = document.querySelector(".second-hand");


const clockTick = () => {
    const now = new Date();
    const seconds = now.getSeconds() / 60;
    const minutes = (seconds + now.getMinutes()) / 60;
    const hours = (minutes + now.getHours()) / 12;

    rotateHand(secondBar, seconds);
    rotateHand(minuteBar, minutes);
    rotateHand(hourBar, hours);
};

const rotateHand = (element, rotation) => {
    element.style.setProperty("--rotate", rotation * 360);
};

setInterval(clockTick, 1000);