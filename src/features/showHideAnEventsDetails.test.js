/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("the user have just opened the app", () => {
      AppComponent = render(<App />);
    });

    let EventListItems;
    when("the user view the event list", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then("all events details should be hidden", async () => {
      await waitFor(() => {
        EventListItems.forEach((eventListItem) => {
          expect(
            eventListItem.querySelector(".details")
          ).not.toBeInTheDocument();
        });
      });
    });
  });

  test("User can expand an event to see details", ({
    given,
    when,
    then,
    and,
  }) => {
    let AppComponent;
    given("the user have just opened the app", () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    let EventListItems;
    when(
      "the user click on the details button of one of the event",
      async () => {
        const user = userEvent.setup();
        AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");
        let detailsBtn;
        await waitFor(() => {
          EventListItems = within(EventListDOM).queryAllByRole("listitem");
          detailsBtn = within(EventListItems[0]).queryByText("Show Details");
        });
        await user.click(detailsBtn);
      }
    );

    then("the event details should be shown", async () => {
      const details = EventListItems[0].querySelector(".details");
      expect(details).toBeInTheDocument();
    });

    and("the event detail button text should change to (Hide Details)", () => {
      const detailsBtn = within(EventListItems[0]).queryByText("Hide Details");
      expect(detailsBtn.textContent).toBe("Hide Details");
    });
  });

  test("User can collapse an event to hide details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppDOM;
    let EventListItems;
    let detailsBtn;
    given("the event details are shown", async () => {
      const user = userEvent.setup();
      const AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        detailsBtn = within(EventListItems[0]).queryByText("Show Details");
      });
      await user.click(detailsBtn);
      expect(EventListItems[0].querySelector(".details")).toBeInTheDocument();
    });

    and("the event Details button text is now (Hide Details)", () => {
      detailsBtn = within(EventListItems[0]).queryByText("Hide Details");
      expect(detailsBtn.textContent).toBe("Hide Details");
    });

    when("the user clicks on details button of the event", async () => {
      const user = userEvent.setup();
      await user.click(detailsBtn);
    });

    then("the event details should be hidden", () => {
      expect(
        EventListItems[0].querySelector(".details")
      ).not.toBeInTheDocument();
    });

    and("the event Details button text should change to (Show Details)", () => {
      detailsBtn = within(EventListItems[0]).queryByText("Show Details");
      expect(detailsBtn.textContent).toBe("Show Details");
    });
  });
});
