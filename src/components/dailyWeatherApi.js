// component using the daily weather api
// we will also render it to the page
// it might be better to seperate the render to the
// component_ui, to sepereate render from logic
// but we will do this here. ask this later

import { editDataDisplay } from "./domContent";

const variable = "berlin";

function fetchDailyWeather(userCityInput) {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userCityInput}?key=C6U43WQXQNAXHR6Y8YMJAWGDW`,
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        // why? catch don't handle status errors,
        // only when server not responding
      }
      // we first have a promise, that it's result is:
      // a response object
      // response.json() brings us a promise,
      // the result of the promise (when resolved)
      // is the response body text as json
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      // this is a function on what to do when the promoise resolved
      // well, when it is resolved, i want to render the data
      console.log(response);
      // why not factory functions?
      // because , i only need to create one object
      // when i need multiple stuff - for example, multiple projects/tasks
      // then, factory functions is needed
      // the question hold - when do i need objects, and when not?
      debugger;
      const data = {
        cityTitle: response.address,
        cityDescription: response.description,
        temp: response.currentConditions.temp,
      };
      editDataDisplay(data);
    })
    .catch(function (error) {
      // couldn't fetch
      // so fetch the original one, london/berlin
    });
}

export { fetchDailyWeather };

// what i didnt understand, is this:
// once i fetch the data and get the date
// i want imeediantly to:
// render the data to the page
// search correspanding giphy, but i don't want the giph to block the page

// what i want to do:
// see the error handling i did and in the article
// complete this function
// see the error handling web boss did
// and why use try/catch and not then
// do the giphy apy with await and async
