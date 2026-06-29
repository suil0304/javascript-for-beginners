import "dotenv/config";

const WEATHER_API_KEY = process.env["API_KEY"];

/**
 * @typedef {{
 *      coord:{
 *          lat:number,
 *          lon:number
 *      };
 *      weather:{
 *          id:number,
 *          main:string,
 *          description:string,
 *          icon:string
 *      }[];
 *      base:string;
 *      main:{
 *          temp:number,
 *          feels_like:number,
 *          temp_min:number,
 *          temp_max:number,
 *          presure:number,
 *          humidity:number,
 *          sea_level:number,
 *          grnd_level:number
 *      };
 *      visibility:number;
 *      wind:{
 *          speed:number,
 *          deg:number,
 *          gust?:number
 *      };
 *      clouds: {
 *          all:number
 *      };
 *      dt:number;
 *      sys:{
 *          country:string,
 *          sunrise:number,
 *          sunset:number
 *      };
 *      timezone:number;
 *      id:number;
 *      name:string;
 *      cod:number;
 * }} WeatherData
 */

/**
 * 
 * @param {number} lat 
 * @param {number} lng 
 * @returns {Promise<WeatherData>}
 */
async function getCurrentWeatherData(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`)
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.error(error);
        });
}

/**
 * @type {PositionCallback}
 */
function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    (async () => {
        const data = await getCurrentWeatherData(lat, lng);

        const weather = document.getElementById("weather-text");
        const city = document.getElementById("city-text");

        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    })();
}
/**
 * @type {PositionErrorCallback}
 */
function geoError(positionError) {
    alert("Can't find geolocation.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);