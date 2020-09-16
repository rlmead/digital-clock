// define constants
const weather = 'sunny';
const body = document.querySelector('body');
const clock = document.querySelector('div');
const message1 = document.querySelector('h1')
const message2 = document.querySelector('h2')

// create zero-padding function to make the randomized clock look more cohesive
function zero_pad(input_string, desired_length) {
    let output_string = input_string;
    while (output_string.length < desired_length) {
        output_string = '0' + output_string;
    }
    return output_string;
}

function show_accurate_time() {
    let [hours, minutes, seconds] = (new Date()).toLocaleTimeString().slice(0, 8).split(':');
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

function show_inaccurate_time() {
    let hours = zero_pad((Math.floor(Math.random() * 12) + 1).toString(), 2);
    let minutes = zero_pad(Math.floor(Math.random() * 60).toString(), 2);
    let seconds = zero_pad(Math.floor(Math.random() * 60).toString(), 2);
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

if (weather === 'sunny') {
    body.setAttribute('style', 'background-color: #87CEEB');
    clock.setAttribute('class', 'happy');
    message1.setAttribute('style', 'font-family: \'Happy Monkey\', sans-serif');
    message1.textContent = 'HEY YOU ᕕ( ᐛ )ᕗ';
    message2.setAttribute('style', 'font-family: \'Happy Monkey\', sans-serif');
    message2.textContent = 'it\'s a great time to do something fun';
    show_accurate_time();
    setInterval(function () { show_accurate_time() }, 1000);
} else {
    body.setAttribute('style', 'background-color: #7A7A7A');
    clock.setAttribute('class', 'gloomy');
    message1.setAttribute('style', 'font-family: \'Special Elite\', sans-serif');
    message1.textContent = 'meh ಠ╭╮ಠ';
    message2.setAttribute('style', 'font-family: \'Special Elite\', sans-serif');
    message2.textContent = 'i don\'t wanna tell you what time it is';
    show_inaccurate_time();
    setInterval(function () { show_inaccurate_time() }, 1000);
}

// background colors to alternate:
// gloomy: #7A7A7A;
// happy: #87CEEB;
