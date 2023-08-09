/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  let AppDOM;
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    AppDOM = render(<App />).container.firstChild;
  });
  test("renders list of events", () => {
    // eslint-disable-next-line testing-library/no-node-access
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });
  test("render CitySearch", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });
  test("render number of events", () => {
    expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();
  });
});
