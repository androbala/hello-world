# `Hello World App` — AngularJS application

The app contains a sample AngularJS application that says "Hello World!"

The app doesn't do much, shows how to wire a controller & view together using simple routing and displays "Hello World!" message to the user.

The app contains unit tests and end-to-end tests which are written in Jasmine. They are run by Karma and Protractor test runners respectively.


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  say_hello/              --> say hello module container
    say_hello.html            --> the partial template
    say_hello.js              --> the controller logic
    say_hello_test.js         --> unit tests of the controller to be run by Karma
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
  
```
