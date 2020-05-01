const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.greeting');
const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

const paintGreeting = name => {
    greeting.innerText = `Hello ${name}`
    greeting.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
};

const saveName = (name) => {
    localStorage.setItem(USER_LS, name);
};

const handleSubmit = e => {
    e.preventDefault();
    const userName = input.value;
    saveName(userName);
    paintGreeting(userName);
};

const askName = () => {
    greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
};

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    currentUser ? paintGreeting(currentUser) : askName();
};

function init() {
    loadName();
}

init();