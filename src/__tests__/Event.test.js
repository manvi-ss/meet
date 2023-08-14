/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Event from "../components/Event";
//import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

// const event = {
//   kind: "calendar#event",
//   etag: '"3181161784712000"',
//   id: "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
//   status: "confirmed",
//   htmlLink:
//     "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
//   created: "2020-05-19T19:17:46.000Z",
//   updated: "2020-05-27T12:01:32.356Z",
//   summary: "Learn JavaScript",
//   description:
//     "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
//   location: "London, UK",
//   creator: {
//     email: "fullstackwebdev@careerfoundry.com",
//     self: true,
//   },
//   organizer: {
//     email: "fullstackwebdev@careerfoundry.com",
//     self: true,
//   },
//   start: {
//     dateTime: "2020-05-19T16:00:00+02:00",
//     timeZone: "Europe/Berlin",
//   },
//   end: {
//     dateTime: "2020-05-19T17:00:00+02:00",
//     timeZone: "Europe/Berlin",
//   },
//   recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
//   originalStartTime: {
//     dateTime: "2020-05-19T16:00:00+02:00",
//     timeZone: "Europe/Berlin",
//   },
//   iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
//   sequence: 0,
//   reminders: {
//     useDefault: true,
//   },
//   eventType: "default",
// };

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("render event title", () => {
    // eslint-disable-next-line jest/valid-expect
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("render event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("render event start date", () => {
    expect(
      EventComponent.queryByText(new Date(allEvents[0].created).toUTCString())
    ).toBeInTheDocument();
  });

  test("render event details by show detail button", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    expect(EventComponent.queryByText(".details")).not.toBeInTheDocument();
  });

  test("shows the details section when user clicks on the 'Show Details' button", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText("Show Details"));

    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
    expect(EventComponent.queryByText("Hide Details")).toBeInTheDocument();
    expect(EventComponent.queryByText("Show Details")).not.toBeInTheDocument();
  });

  test("hide details after user clicks 'hide details' button", async () => {
    const user = userEvent.setup();

    await user.click(EventComponent.queryByText("Show Details"));
    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
    expect(EventComponent.queryByText("Hide Details")).toBeInTheDocument();
    expect(EventComponent.queryByText("Show Details")).not.toBeInTheDocument();

    await user.click(EventComponent.queryByText("Hide Details"));
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
    expect(EventComponent.queryByText("Hide Details")).not.toBeInTheDocument();
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });
});
