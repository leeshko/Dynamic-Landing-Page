let time = document.getElementById('time');
let name = document.getElementById('name');
let focus = document.getElementById('focus');


function showTime() {
    let fullTimeNow = new Date();
    let hours = fullTimeNow.getHours();
    let minutes = fullTimeNow.getMinutes();
    let seconds = fullTimeNow.getSeconds();
    let timeWithZero = (e) => e < 10 ? ('0' + e) : e;
    let amPm = (hours) => hours < 13 ? 'AM' : 'PM';
    let timeNow = timeWithZero(`${hours}`) + ':' + timeWithZero(`${minutes}`) + ':' + timeWithZero(`${seconds}`) +' ' + amPm();
    
    setTimeout(showTime, 1000);
    time.innerHTML = timeNow;
}

function changeBackground() {
    let fullTimeNow = new Date();
    let hours = fullTimeNow.getHours();
    if (hours < 11) {
        document.body.style.backgroundImage = "url(../img/morning.jpg)";
        greeting.textContent = 'Good Morning, ';
    } else if (hours < 18) {
        document.body.style.backgroundImage = "url(../img/noon.jpg)";
        greeting.textContent = 'Good Afternoon, ';
    } else {
        document.body.style.backgroundImage = 'url(../img/evening.jpg)';
        document.body.style.color = 'purple';
        greeting.textContent = 'Good Evening, ';
    }
}

function nameStorage() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[enter your name]';    
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function focusStorage() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[enter your focus]';    
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setName(e) {
    if (e.type === 'keydown') {
        if(e.key === 'Enter') {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function setFocus(e) {
    if (e.type === 'keydown') {
        if(e.key === 'Enter') {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keydown', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keydown', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
changeBackground();
nameStorage();
focusStorage(); 