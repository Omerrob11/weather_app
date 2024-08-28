import { fetchDailyWeather } from "./dailyWeatherApi";
import { getGif, getGifInputText } from "./giphyApi";

const contentContainer = document.querySelector(".content_container");
const errorImage = "error.jpeg";

function createDataDisplay() {
  const dataDisplayContainer = document.createElement("div");
  dataDisplayContainer.classList.add(".data_display_container");

  const cityTitle = document.createElement("h2");
  cityTitle.classList.add("city_title");
  cityTitle.textContent = "berlin";

  const cityDescription = document.createElement("p");
  cityDescription.classList.add("city_description");

  const degreeDisplay = document.createElement("p");
  degreeDisplay.classList.add("degree", "fahr");

  dataDisplayContainer.append(cityTitle, cityDescription, degreeDisplay);
  return dataDisplayContainer;
}

function createGifDisplay() {
  const gifDisplayContainer = document.createElement("div");
  gifDisplayContainer.classList.add("gif_display_container");

  const gifImage = document.createElement("img");
  gifImage.classList.add("gif_image");

  gifDisplayContainer.appendChild(gifImage);

  return gifDisplayContainer;
}

function renderInitialDataDisplay() {
  const displayContainer = createDataDisplay();
  const gifContainer = createGifDisplay();
  const errorPar = document.querySelector(".error_par");

  //I would probably need that the errorPar will be declared with javascript
  // in order to edit it as flex, exactly as I want
  // displayContainer.appendChild(errorPar);
  contentContainer.insertBefore(displayContainer, errorPar);
  contentContainer.appendChild(gifContainer);
  const cityTitle = document.querySelector(".city_title");

  // getting the inital data, for the city declared upfront
  fetchDailyWeather(cityTitle.textContent).then(async function (data) {
    // after fetching the data, we can fetch the giff

    // edit data display before fetching the giff to not block the stack
    try {
      editDataDisplay(data);
      const gitInputText = getGifInputText(data.temp);
      const gifData = await getGif(gitInputText);
      // if we will have an error with the gif fetching, it will go to the catch code
      // the promise will considred rejected
      const gif = document.querySelector(".gif_image");
      // no error in the responseGif.ok, it just that we don't have value
      // so we check, if not, we bring the default one
      if (
        gifData.data &&
        gifData.data.images &&
        gifData.data.images.original.url
      ) {
        gif.src = gifData.data.images.original.url;
      } else {
        gif.src = errorImage;
      }
    } catch (error) {
      alert(error);
      alert("error, no image found");
    }
  });
}

function editDataDisplay(data) {
  const cityTitle = document.querySelector(".city_title");
  cityTitle.textContent = data.cityTitle;

  const cityDescription = document.querySelector(".city_description");
  cityDescription.textContent = data.cityDescription;

  const degreeDisplay = document.querySelector(".degree");
  degreeDisplay.textContent = data.temp;

  const errorPar = document.querySelector(".error_par");
  errorPar.classList.add("hidden");
}

export { renderInitialDataDisplay, editDataDisplay };
