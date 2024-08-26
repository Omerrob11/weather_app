const userInputs = document.querySelector(".user_inputs");

function createCityFormInput() {
  const cityFormContainer = document.createElement("form");

  const cityInput = document.createElement("input");
  cityInput.type = "text";
  cityInput.placeholder = "London...";

  const cityFormBtn = document.createElement("button");
  cityFormBtn.textContent = "Search";
  cityFormBtn.type = "submit";

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

// why here?
// becuase, in a module, i can put all the methods and variables
// related to that model
function renderUserInputs() {
  debugger;
  const userInputsForm = createCityFormInput();
  const degreeBtn = createChangeDegreeBtn();

  console.log();
  userInputs.append(userInputsForm, degreeBtn);
}

export { renderUserInputs };
// should a component do one thing?
// can i create here the renderToPAGE FUNCTION?
// or not
