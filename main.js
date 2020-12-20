let time = document.getElementById('time');
let name = document.getElementById('name');
let focus = document.getElementById('focus');

let timeWithZero = (timeUnit) => timeUnit < 10 ? ('0' + timeUnit) : timeUnit;

function showTime() {
    let fullTimeNow = new Date();
    let hoursEur = fullTimeNow.getHours();
    let amPm = hoursEur < 13 ? 'AM' : 'PM';
    let hours = hoursEur>12 ? hoursEur%12 : hoursEur;
    let minutes = fullTimeNow.getMinutes();
    let seconds = fullTimeNow.getSeconds();
    
    let timeNow = `${timeWithZero(hours)}:${timeWithZero(minutes)}:${timeWithZero(seconds)} ${amPm}`;
    changeBackground();
    time.innerHTML = timeNow;

    setTimeout(showTime, 1000);
}

function changeBackground() {
    let fullTimeNow = new Date();
    let hours = fullTimeNow.getHours();
    if (hours < 11) {
        document.body.style.backgroundImage = "url(img/morning.jpg)";
        greeting.textContent = 'Good Morning, ';
    } else if (hours < 18) {
        document.body.style.backgroundImage = "url(img/noon.jpg)";
        greeting.textContent = 'Good Afternoon, ';
    } else {
        document.body.style.backgroundImage = 'url(img/evening.jpg)';
        document.body.style.color = 'purple';
        greeting.textContent = 'Good Evening, ';
    }
}

function getTextContentFromStorage(itemName, item) {
    if (localStorage.getItem(itemName) === null) {
        item.textContent = `[enter your ${itemName}]`;
    } else {
        item.textContent = localStorage.getItem(itemName);
    }
}

function setBehaviour (itemName, item) {
   return function (e) {
        if (e.type === 'keydown') {
            if (e.key === 'Enter') {
                item.blur();
            }
        } else {
            localStorage.setItem(itemName, e.target.innerText);
        }
    }
}


name.addEventListener('keydown', setBehaviour('name', name));
name.addEventListener('blur', setBehaviour('name', name));
focus.addEventListener('keydown', setBehaviour('focus', focus));
focus.addEventListener('blur', setBehaviour('focus', focus));


showTime();
getTextContentFromStorage('name', name);
getTextContentFromStorage('focus', focus); 


