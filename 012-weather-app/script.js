// For the Vite server to get the .env variables
// they must begin with VITE_ nothing else is needed
const weather_key = import.meta.env.VITE_VC_API_KEY;
const base_url = import.meta.env.VITE_VC_BASE_URL;

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const infoContainer = document.querySelector('.info-container');


function buildWeatherUrl(base_url, weather_key, location = '', unitGroup = 'metric') {

    if (location === '') {
      console.error('ERROR: Location is obligatory!');
      return;   
    } 

    location = location.toLowerCase();
    unitGroup = unitGroup.toLowerCase();

    return `${base_url}${location}?unitGroup=${unitGroup}&include=current&key=${weather_key}&contentType=json`;
}


async function getWeather(location) {
    const url = buildWeatherUrl(base_url, weather_key, location, 'metric');
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


async function displayData({location, temp, feels, humidity, windspeed}) {
    infoContainer.innerHTML = '';

    const eLocation = document.createElement('h2');
    const eTemp = document.createElement('p');
    const eFeelsLike = document.createElement('p');
    const eHumidity = document.createElement('p');
    const eWindspeed = document.createElement('p');

    eLocation.innerText = `Location: ${location}`;
    eTemp.innerText = `Temperature: ${temp}`;
    eFeelsLike.innerText = `Feels Like: ${feels}`;
    eHumidity.innerText = `Humidity: ${humidity}`;
    eWindspeed.innerText = `Wind Speed: ${windspeed}`;

    infoContainer.append(eLocation, eTemp, eFeelsLike, eHumidity, eWindspeed);
    
}


submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    let location = formData.get('location');
    
    const dataFetched = await getWeather(location);
    const data = await formatData(dataFetched);

    displayData(data);
    console.log(data);
});


