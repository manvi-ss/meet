# Meet App

User Story: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
Feature 1: Filter Events by City.

Given: The user is on the event listings page of the application.
When: The user selects a specific city from the availabe city options in city menu.
Then: The event listings page reloads, displaying the event listings in that specific city.

User Story: As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
Feature 2 : Show/Hide Event Details.

Given: The user is on the event viewing page.
When: The user clicks the button to expand or collapse details about a particular event.
Then: The event details section expands or collapse, showing or hiding additional information about the event, respectively.

User Story: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
Feature 3: Specify Number of Events.

Given: There are default number of listings on event listing page of application
When: The user inputs the number of events to be displayed.
Then: The listing page refreshes to show the number of events occuring which user entered.

User Story: As a user,I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
Feature 4: Use the App When Offline.

Given: The user is offline but has previously accessed the application being online.
When: The user has switched off internet or enabled airplane mode.
Then: The app displays a message indicating that the user is offline but can access previously viewed events and some features maybe limited or unavailable.

User Story: As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
Feature 5: Add an App Shortcut to the Home Screen.

Given: The user has event listings app installed on mobile phone.
When: The user long-presses the app icon and is provided with two options add to home screen or uninstall.
Then: By selecting add to home screen user can have app shortcut on homescreen.

User Story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
Feature 6: Display Charts Visualizing Event Details.

Given: The user has not selcted a city.
When: The user wants to compare events between two cities or more.
Then: The user should be able to access a chart with the number of upcoming events in each city.

## Severless Functions in this App

In this app , serverless functions will be utilized to use certain features that require on-demand processing.
For example, when users filter out events by city or specify the number of events they want to view,serverless functions can handle the filtering task.
