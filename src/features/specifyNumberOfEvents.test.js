/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/render-result-naming-convention */
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");
defineFeature(feature, (test) => {
  test("When user has not specified a number, 32 is the default number", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppDOM;
    given("the user has just opened the app", () => {
      const AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    and("the user has not changes the number of events", () => {});
    let EventListItems;
    when("the user views the events list", async () => {
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then(
      "the Number Of Events input field should display 32 by default",
      () => {
        const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        const numberOfEventsInput =
          within(NumberOfEventsDOM).queryAllByRole("textbox")[0];
        expect(numberOfEventsInput.value).toBe("32");
      }
    );

    and("the number of events in the list should be 32 by default", () => {
      expect(EventListItems.length).toBe(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppDOM;
    given("the user have just opened the app", () => {
      const AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when("the user changes the number of events in input field", async () => {
      const user = userEvent.setup();
      const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
      const numberOfEventsInput =
        within(NumberOfEventsDOM).queryByRole("textbox");

      await user.type(numberOfEventsInput, "{backspace}{backspace}20");
      expect(numberOfEventsInput.value).toBe("20");
    });

    then("the number of events in list will change accordingly", async () => {
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(20);
      });
    });
  });
});
