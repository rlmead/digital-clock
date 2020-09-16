// define constants
const weather = 'sunny';
const body = document.querySelector('body');
const clock = document.getElementById('clock');
const emoticon = document.getElementById('emoticon');
const message = document.getElementById('message');

// define zero-padding function to make the randomized clock look more cohesive
function zero_pad(input_string, desired_length) {
    let output_string = input_string;
    while (output_string.length < desired_length) {
        output_string = '0' + output_string;
    }
    return output_string;
}

// define function to show accurate time
function show_accurate_time() {
    let [hours, minutes, seconds] = (new Date()).toLocaleTimeString().slice(0, 8).split(':');
    clock.textContent = zero_pad(hours, 2) + ':' + minutes + ':' + seconds;
}

// define function to show inaccurate time
function show_inaccurate_time() {
    let hours = zero_pad((Math.floor(Math.random() * 12) + 1).toString(), 2);
    let minutes = zero_pad(Math.floor(Math.random() * 60).toString(), 2);
    let seconds = zero_pad(Math.floor(Math.random() * 60).toString(), 2);
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

// set the clock's mood according to the weather
if (weather === 'sunny') {
    // format page according to mood
    body.setAttribute('style', 'background-color: #87CEEB');
    clock.setAttribute('class', 'happy');
    emoticon.textContent = 'ᕕ( ᐛ )ᕗ';
    message.setAttribute('style', 'font-family: \'Happy Monkey\', sans-serif');
    message.textContent = 'it\'s a great time to do something fun!';
    // show the time immediately upon loading
    show_accurate_time();
    // change the time every second
    setInterval(function () { show_accurate_time() }, 1000);
} else {
    // format page according to mood
    body.setAttribute('style', 'background-color: #7A7A7A');
    clock.setAttribute('class', 'gloomy');
    emoticon.textContent = 'ಠ╭╮ಠ';
    message.setAttribute('style', 'font-family: \'Special Elite\', sans-serif');
    message.textContent = 'i don\'t wanna tell you what time it is';
    // show the time immediately upon loading
    show_inaccurate_time();
    // change the time every second
    setInterval(function () { show_inaccurate_time() }, 1000);
}
