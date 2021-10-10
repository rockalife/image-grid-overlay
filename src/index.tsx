import { render } from "react-dom";
import { App } from "./components/app";

const appContainer = document.querySelector("#app");

if (appContainer) {
  render(<App />, appContainer);
}
