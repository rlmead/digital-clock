const clock = document.querySelector('div');

setInterval(function() { clock.textContent = Date().split(' ')[4]; }, 1000 )

// background colors to alternate:
// gloomy: #7A7A7A;
// happy: #87CEEB;
