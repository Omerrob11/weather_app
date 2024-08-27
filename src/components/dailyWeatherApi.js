// component using the daily weather api
// we will also render it to the page
// it might be better to seperate the render to the
// component_ui, to sepereate render from logic
// but we will do this here. ask this later

import { editDataDisplay } from "./domContent";

function fetchDailyWeather(userCityInput) {
  return new Promise((resolve) => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userCityInput}?key=C6U43WQXQNAXHR6Y8YMJAWGDW`,
    )
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      })
      .then(function (response) {
        const data = {
          cityTitle: response.address,
          cityDescription: response.description,
          temp: response.currentConditions.temp,
        };
        // we reslove this promise, if we resolved the fetch promise
        // and got the data
        resolve(data);
      })
      .catch(function (error) {
        // if fetch operation fail
        console.log(error + "error inside daily weather app");
      });
  });
}

export { fetchDailyWeather };
