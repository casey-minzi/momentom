const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('.js-title');

const normaliseTimeToken = (token) => {
    return token < 10 ? `0${token}` : token;
};

const getTime = () => {
    const date = new Date();
    const hour = normaliseTimeToken(date.getHours());
    const min = normaliseTimeToken(date.getMinutes());
    const sec = normaliseTimeToken(date.getSeconds());
    clockTitle.innerText = `${hour}:${min}:${sec}`;
};

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();