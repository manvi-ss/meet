Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given the user have just opened the app
        When the user view the event list
        Then all events details should be hidden

    Scenario: User can expand an event to see details
        Given the user have just opened the app
        When the user click on the details button of one of the event
        Then the event details should be shown
        And the event detail button text should change to (Hide Details)

    Scenario: User can collapse an event to hide details
        Given the event details are shown
        And the event Details button text is now (Hide Details)
        When the user clicks on Details button of the event
        Then the event details should be hidden
        And the event Details button text should change to (Show Details)