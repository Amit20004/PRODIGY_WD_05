const fakeWeatherData = [
  {
    city: "Mumbai",
    temperature: 30,
    description: "Sunny",
    icon: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-cute-sunny-png-image_8544640.png",
  },
  {
    city: "Delhi",
    temperature: 35,
    description: "Hot",
    icon: "https://cdn-icons-png.freepik.com/512/5034/5034570.png",
  },
  {
    city: "Bangalore",
    temperature: 25,
    description: "Cloudy",
    icon: "https://example.com/icons/cloudy.png",
  },
  {
    city: "Chennai",
    temperature: 33,
    description: "Humid",
    icon: "https://cdn-icons-png.flaticon.com/512/4148/4148460.png",
  },
  {
    city: "Kolkata",
    temperature: 32,
    description: "Rainy",
    icon: "https://cdn-icons-png.flaticon.com/512/4724/4724091.png",
  },
  {
    city: "Hyderabad",
    temperature: 28,
    description: "Partly Cloudy",
    icon: "https://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png",
  },
  {
    city: "Pune",
    temperature: 27,
    description: "Misty",
    icon: "https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png",
  },
  {
    city: "Ahmedabad",
    temperature: 34,
    description: "Clear Sky",
    icon: "https://cdn-icons-png.flaticon.com/512/3222/3222800.png",
  },
  {
    city: "Jaipur",
    temperature: 31,
    description: "Windy",
    icon: "https://cdn-icons-png.flaticon.com/512/578/578159.png",
  },
  {
    city: "Lucknow",
    temperature: 29,
    description: "Foggy",
    icon: "https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png",
  },
];
const weatherData = document.getElementById("weatherData");
const cityInput = document.getElementById("cityInput");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
// fakeWeatherData.map((weather,index)=>{
//     console.log(`City: ${weather.city}`);
//     city.textContent=`${weather.city}`;
//     console.log(`Temperature: ${weather.temperature}°C`);
//     temperature.textContent=weather.temperature + '°C';
//     console.log(`Description: ${weather.description}`);
//     description.textContent=weather.description;
//     console.log(`Icon: ${weather.icon}`);
//     weatherIcon.src=`${weather.icon}`;
//     console.log('--------------------');
//   });

const displayWeather = (cityname) => {
  const weather = fakeWeatherData.find(
    (weather) => weather.city.toLowerCase() === cityname.toLowerCase()
  );
  if (weather) {
    weatherIcon.style.display = "block";
    city.textContent = weather.city;
    temperature.textContent = weather.temperature + "°C";
    description.textContent = weather.description;
    weatherIcon.src = weather.icon;
  } else {
    city.textContent = "City not found";
    temperature.textContent = "";
    description.textContent = "";
    weatherIcon.src = "";
  }
  cityInput.value = "";
};

// Fetch weather data from API

document
  .getElementById("weatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const cityInput = document.getElementById("cityInput").value;
    displayWeather(cityInput);
  });
