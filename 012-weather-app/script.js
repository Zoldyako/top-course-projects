console.log(`We're alive!`);

/* 
*
* HOW TO CONSTRUCT THE URL FOR THE VISUAL CROSSING WEATHER API
* 
* Visual Crossing API uses the get method to fetch data,  so we need to pass an url. 
*
* First the base url:
* - https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
*
* Then we have the location
* - Using 'salvador bahia'
* - https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/salvador
*
* We could use a date range, however I'll not, so next we pass
*/

const weather_key = import.meta.env.VITE_VC_API_KEY;
const base_url = import.meta.env.VITE_VC_BASE_URL;
let location = '';
let unitGroup = ''; // us: Fº, miles | uk: Cº, miles | metric: Cº km | Base: Kelvin km
let language = '';
const contentType = '&contentType=json';


function buildWeatherUrl(base_url, weather_key, location = '', unitGroup = 'metric') {

    if (location === '') {
      console.error('ERROR: Location is obligatory!');
      return;   
    } 

    location = location.toLowerCase();
    unitGroup = unitGroup.toLowerCase();

    return `${base_url}${location}?unitGroup=${unitGroup}&include=current&key=${weather_key}&contentType=json`;
}


async function getWeather() {
    const url = buildWeatherUrl(base_url, weather_key, 'águas de lindóia', 'metric');
    console.log(`Final url: ${url}`);

    try {
        const response = await fetch(url, {
            'method': 'GET',
            'headers': {}
        });

        if (!response.ok) throw new Error('Request error');
        const data = await response.json();

        return data;
    }

    catch(err) { 
        console.log(err);
    }
}

async function formatData(data) {
    const location = data.resolvedAddress;
    const temp = data.currentConditions.temp;
    const feels = data.currentConditions.feelslike;
    const humidity = data.currentConditions.humidity;
    const windspeed = data.currentConditions.windspeed;

    return { location, temp, feels, humidity, windspeed }
}

const dataFetched = await getWeather();
const data = await formatData(dataFetched);

console.log(data);
