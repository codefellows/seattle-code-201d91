# Event Handling

Event is FIRED (or RAISED)

Code is TRIGGERED (or invoked)

## Events types

- click
- submit
- onChange
- hover
- on page load
- on mouse over
- on key release

**Event Listener**
: code that is TRIGGEERED when an event is FIRED

**Bind**
: bind or ether an event listener to the event

**Event Handler**
: code that runs in response to an event

**Callback Function**
: any function that is passed into another function as an argument

**asynchronous**
: code that runs out of order. Maybe it has to wait for something else to run?

## Old ways to do event handling (DO NOT DO THIS!)

- In the HTML: `<article onClick="handleClick">`

- In the JavaScript: `element.onEvent = functionName;`
ex.: `button(document.getElementById('button')).onSubmit = handleEvent;`

## We will use DOM Level 2 Event Handlers

`let element = document.getElementById('someId');`
`element.addEventListener('click', functionName)`

addEventListener takes in 2 arguments:

- an event as a string (ex: click)
- a callback function

## Event Listener types

- Event Bubbling - outside listening event happening to its inside (its children elements). We will be using this one
- Event Capturing - inside listening to the outside - you will almost never see this
