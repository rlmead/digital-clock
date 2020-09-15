# Digital Clock... with a Personality

HTML/CSS/Javascript project for Awesome Inc Bootcamp Pre-work Week 4

## Pseudocode

### HTML
```
<head>
    // link main page css stylesheet
    // link project css stylesheet
    // link project js script
</head>

<body>
    <header>copy header from main page?</header>
    <h1>headline</h1>
    <div>clock</div>
    <h2>message conveying current mode</h2>
</body>
```

### CSS

* match main page formatting
* add formatting for clock elements
    * class 'happy' if it's a sunny day in Lexington
    * class 'gloomy' if it's a gray day in Lexington

```
.happy {
    background color: sky blue
    clock div color: sunny yellow
    font: something happy
}

.gloomy {
    background color: medium gray
    clock div color: light gray
    font: something gloomy
}
```

### JS

* get current weather in Lexington: sunny or no?
* set clock element formatting according to weather
    * sunny => happy
    * gray => gloomy
* define clock functions according to weather
    * sunny => cooperative
    * gray => uncooperative

```
if (current_weather === sunny) {
    message.textContent = 'The time is currently...';
    let start_time = Date;
    // does start_time need to be parsed?
    clock.textContent = start_time;
    body.setAttribute('class','happy')
} else
    message.textContent = 'I don't wanna tell you what time it is ಠ╭╮ಠ';
    let start_time = something random!!! (set max/min?);
    clock.textContent = start_time;
    body.setAttribute('class','gloomy')
}
```
