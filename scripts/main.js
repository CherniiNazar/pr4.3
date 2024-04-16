let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/google-chrome-logo-2008-2011.webp') {
        myImage.setAttribute('src', 'images/chrome2.png'); 
    }
    else {
        myImage.setAttribute('src', 'images/google-chrome-logo-2008-2011.webp'); 
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Chrome is cool,' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Chrome is cool,' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

