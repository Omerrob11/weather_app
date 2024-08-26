import { fetchDailyWeather } from "./dailyWeatherApi";

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

  cityFormBtn.addEventListener("click", getUserCityInput);

  cityFormContainer.append(cityInput, cityFormBtn);

  return cityFormContainer;
}

function createChangeDegreeBtn() {
  const changeDegreeBtnContainer = document.createElement("div");

  const changeDegreeBtn = document.createElement("button");
  changeDegreeBtn.textContent = "°C \\  °F ";

  changeDegreeBtnContainer.appendChild(changeDegreeBtn);

  return changeDegreeBtnContainer;
}

// Form Event Listeners //

function getUserCityInput(event) {
  // maybe prevent default to not reload the page
  event.preventDefault();
  const cityInput = document.querySelector(".city_input");
  const userCityValue = cityInput.value;
  fetchDailyWeather(userCityValue);

  //   send the data to the api calls
}

// why here?
// becuase, in a module, i can put all the methods and variables
// related to that model
function renderUserInputs() {
  const userInputsForm = createCityFormInput();
  const degreeBtn = createChangeDegreeBtn();

  console.log();
  userInputs.append(userInputsForm, degreeBtn);
}

export { renderUserInputs };
// should a component do one thing?
// can i create here the renderToPAGE FUNCTION?
// or not
