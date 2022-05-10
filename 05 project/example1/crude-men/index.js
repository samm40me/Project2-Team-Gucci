const fetch = require("node-fetch");
(async () => {
    await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=YOUR_KEY"
    )
        .then((response) => response.json())
        .then((data) => {
            const forecast = data.weather[0].description;
            const temperature = data.main.temp;
            const name = data.name;
            console.log(`Today's forecast for ${name}: ${forecast}`);
            console.log(`It's currently ${temperature}°C `);
        })
        .catch(console.log(`Error: ${err}`));
})();