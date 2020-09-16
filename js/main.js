// define constants
const clock = document.querySelector('div');
const weather = 'sunny';

// create zero-padding function to make the randomized clock look more cohesive
function zero_pad(input_string, desired_length) {
    let output_string = input_string;
    while (output_string.length < desired_length) {
        output_string = '0' + output_string;
    }
    return output_string;
}

if (weather === 'sunny') {
    setInterval(function() {
        let [hours, minutes, seconds] = (new Date()).toLocaleTimeString().slice(0,8).split(':');
        clock.textContent = hours + ':' + minutes + ':' + seconds;
    }, 1000)
} else {
    setInterval(function () {
        let hours = zero_pad((Math.floor(Math.random() * 12) + 1).toString(),2);
        let minutes = zero_pad(Math.floor(Math.random() * 60).toString(),2);
        let seconds = zero_pad(Math.floor(Math.random() * 60).toString(),2);
        clock.textContent = hours + ':' + minutes + ':' + seconds;
    }, 1000)
}

// background colors to alternate:
// gloomy: #7A7A7A;
// happy: #87CEEB;
