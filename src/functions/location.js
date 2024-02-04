import axios from "axios";

import { openWeatherApiKey } from "./env.js";

const navigatorOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export async function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, navigatorOptions);
  });
}

export async function getGeoIdByCoordinates(lat, lon) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`
    );

    const geoId = response.data["id"];
    const city = response.data["name"];

    return { id: geoId, name: city };
  } catch (e) {
    console.log(e);
  }
}
