import { fetchDailyWeather } from "./dailyWeatherApi";
import { editDataDisplay } from "./domContent";
import { getGifInputText, getGif } from "./giphyApi";
const userInputs = document.querySelector(".user_inputs");

function createCityFormInput() {
  const cityFormContainer = document.createElement("form");

  const cityInput = document.createElement("input");
  cityInput.type = "search";
  cityInput.placeholder = "London...";
  cityInput.classList.add("city_input");

  const cityFormBtn = document.createElement("button");
  cityFormBtn.textContent = "Search";
  cityFormBtn.type = "submit";

  cityFormBtn.addEventListener("click", renderUserCityInput);

  cityFormContainer.append(cityInput, cityFormBtn);

  return cityFormContainer;
}

function createChangeDegreeBtn() {
  const changeDegreeBtnContainer = document.createElement("div");

  const changeDegreeBtn = document.createElement("button");
  changeDegreeBtn.textContent = "°C \\  °F ";

  changeDegreeBtnContainer.appendChild(changeDegreeBtn);
  changeDegreeBtn.addEventListener("click", handleDegreeConversionBtn);

  return changeDegreeBtnContainer;
}

// Form Event Listeners //

function renderUserCityInput(event) {
  // prevent default to not reload the page
  event.preventDefault();
  const cityInput = document.querySelector(".city_input");
  const userCityValue = cityInput.value;
  // fetching the weather data on each form submit
  fetchDailyWeather(userCityValue).then(async function (data) {
    // after fetching the data, display and fetch the giff

    // why async? because this function is not instant, we need to fetch the giff
    // here, we also edit, but also geth the giphy
    try {
      editDataDisplay(data);
      const gitInputText = getGifInputText(data.temp);
      const gifData = await getGif(gitInputText);
      const gif = document.querySelector(".gif_image");
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
    }
  });
}

// why here?
// becuase, in a module, i can put all the methods and variables
// related to that model
function renderUserInputs() {
  const userInputsForm = createCityFormInput();
  const degreeBtn = createChangeDegreeBtn();
  userInputs.append(userInputsForm, degreeBtn);
}

// event listener should happen only after we fetch the data
// so we can attach the event handler only after we fetch the data
// or what we did here - we attached the event handler at first, but changes stuff only if the text content is not nothing
function handleDegreeConversionBtn() {
  const degreePar = document.querySelector(".degree");
  // checking if we currently have it
  if (degreePar && degreePar.textContent != "") {
    debugger;
    if (degreePar.className == "degree fahr") {
      degreePar.className = "degree cels";
      const fahrDeg = +degreePar.textContent;
      const celsiusDeg = (fahrDeg - 30) / 2;
      degreePar.textContent = celsiusDeg;
    } else {
      degreePar.className = "degree fahr";
      const celsiusDeg = +degreePar.textContent;
      const faherDeg = celsiusDeg * 2 + 30;
      degreePar.textContent = faherDeg;
    }
  }
}
export { renderUserInputs };
