// define constants
let weather = 'sunny';
const body = document.querySelector('body');
const clock = document.getElementById('clock');
const emoticon = document.getElementById('emoticon');
const message = document.getElementById('message');
const button = document.querySelector('button');

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
    let period;
    if (hours.length === 2) {
        period = (new Date()).toLocaleTimeString().slice(9,11);
    } else {
        period = (new Date()).toLocaleTimeString().slice(8,10);
    }
    clock.textContent = zero_pad(hours, 2) + ':' + minutes + ':' + seconds + ' ' + period;
}

// define function to show inaccurate time
function show_inaccurate_time() {
    let hours = zero_pad((Math.floor(Math.random() * 12) + 1).toString(), 2);
    let minutes = zero_pad(Math.floor(Math.random() * 60).toString(), 2);
    let seconds = zero_pad(Math.floor(Math.random() * 60).toString(), 2);
    let periods = ['AM', 'PM'];
    let period = periods[Math.round(Math.random())]
    clock.textContent = hours + ':' + minutes + ':' + seconds + ' ' + period;
}

let running_clock;

// set the clock's mood according to the weather
function change_mood(weather) {
    if (weather === 'sunny') {
        // format page according to mood
        body.setAttribute('style', 'background-color: #87CEEB');
        clock.setAttribute('class', 'happy');
        emoticon.textContent = 'ᕕ( ᐛ )ᕗ';
        message.setAttribute('style', 'font-family: \'Happy Monkey\', sans-serif');
        message.textContent = 'it\'s a great time to do something fun!';
        button.textContent = 'it\'s gloomy out';
        // show the time immediately upon loading
        show_accurate_time();
        // change the time every second
        running_clock = setInterval(function () { show_accurate_time() }, 1000);
    } else {
        // format page according to mood
        body.setAttribute('style', 'background-color: #7A7A7A');
        clock.setAttribute('class', 'gloomy');
        emoticon.textContent = 'ಠ╭╮ಠ';
        message.setAttribute('style', 'font-family: \'Special Elite\', sans-serif');
        message.textContent = 'i don\'t wanna tell you what time it is';
        button.textContent = 'it\'s sunny out';
        // show the time immediately upon loading
        show_inaccurate_time();
        // change the time every second
        running_clock = setInterval(function () { show_inaccurate_time() }, 1000);
    }
}

change_mood(weather);

button.onclick = function () {
    if (weather === 'sunny') {
        weather = 'gloomy';
    } else {
        weather = 'sunny';
    }
    clearInterval(running_clock);
    change_mood(weather);
};
