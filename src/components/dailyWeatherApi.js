// component using the daily weather api
// we will also render it to the page
// it might be better to seperate the render to the
// component_ui, to sepereate render from logic
// but we will do this here. ask this later

import { editDataDisplay } from "./domContent";
import { getGif } from "./giphyApi";

function fetchDailyWeather(userCityInput) {
  return new Promise((resolve, reject) => {
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
      .catch(async function (error) {
        try {
          // if fetch operation fail / responsee status was 400
          const errorPar = document.querySelector(".error_par");
          errorPar.classList.remove("hidden");
          // error in location giff
          // getGif is async, meaning it's return a promise, meaning we should wait(or use a then), we can listen to that promise
          const gifData = await getGif("Stop Sign");
          const gif = document.querySelector(".gif_image");
          gif.src = gifData.data.images.original.url;
        } catch (error) {
          alert(error);
        }
      });
  });
}

export { fetchDailyWeather };
