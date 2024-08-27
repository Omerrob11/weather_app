import "./style.css";

import { renderUserInputs } from "./components/domInputs";
import {} from "./components/dailyWeatherApi";
import { renderInitialDataDisplay } from "./components/domContent";
function initialWebsiteLoad() {
  renderUserInputs();
}

initialWebsiteLoad();

renderInitialDataDisplay();
