import { fetchDailyWeather } from "./dailyWeatherApi";

const contentContainer = document.querySelector(".content_container");

function createDataDisplay() {
  const dataDisplayContainer = document.createElement("div");
  dataDisplayContainer.classList.add(".data_display_container");

  const cityTitle = document.createElement("h2");
  cityTitle.classList.add("city_title");
  cityTitle.textContent = "berlin";

  const cityDescription = document.createElement("p");
  cityDescription.classList.add("city_description");

  const degreeDisplay = document.createElement("p");
  degreeDisplay.classList.add("degree");

  dataDisplayContainer.append(cityTitle, cityDescription, degreeDisplay);
  return dataDisplayContainer;
}

function renderInitialDataDisplay() {
  console.log("is it working");
  const displayContainer = createDataDisplay();
  contentContainer.append(displayContainer);
  const cityTitle = document.querySelector(".city_title");
  // getting the inital data, for the city declared upfront
  fetchDailyWeather(cityTitle.textContent).then(function (data) {
    editDataDisplay(data);
  });
}

function editDataDisplay(data) {
  const cityTitle = document.querySelector(".city_title");
  cityTitle.textContent = data.cityTitle;

  const cityDescription = document.querySelector(".city_description");
  cityDescription.textContent = data.cityDescription;

  const degreeDisplay = document.querySelector(".degree");
  degreeDisplay.textContent = data.temp;
}

export { renderInitialDataDisplay, editDataDisplay };
