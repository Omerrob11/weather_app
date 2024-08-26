import "./style.css";

import { renderUserInputs } from "./components/domInputs";
import { fetchDailyWeather } from "./components/dailyWeatherApi";
import { renderInitialDataDisplay } from "./components/domContent";
function initialWebsiteLoad() {
  renderUserInputs();
}

initialWebsiteLoad();

renderInitialDataDisplay();

// things to do before moving on:
// make the inital render with data about berlin
// ask the main questions:
// when to use objects is proper
// go back to your planning - plan accordignly
