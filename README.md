# atsis-techtest

atsis-techtest is the project proposed (web design & animation + behaviour + application state) for implementing the
suggested technical test

## 🧾 It uses

| package     | additional information                                                                            |
| :---------- | :------------------------------------------------------------------------------------------------ |
| axios       | promise based HTTP client for the browser and node.js                                             |
| bootstrap   | the most popular front-end framework for developing responsive, mobile first projects on the web. |
| lodash      | library with JS utilities                                                                         |
| node-sass   | css pre-processor                                                                                 |
| redux       | library for application state management                                                          |
| react-redux | the official needed bindings to use redux on React applications                                   |
| redux-thunk | middleware used for perform async operations with redux                                           |

## 🔎 What you will find

| screen 🖥️ / feature ⚛️ | description                                                |
| :--------------------- | :--------------------------------------------------------- |
| 🖥️ screen              | List of all existing characters                            |
| 🖥️ screen              | Character detail                                           |
| ⚛️ feature             | Uses redux & redux-thunk to manage the application state   |
| ⚛️ feature             | Uses axios to manage http requests to the Breaking Bad API |
| ⚛️ feature             | Uses react-router to manage communication between routes   |
| ⚛️ feature             | Uses React Bootstrap as component library                  |

<span style="color: grey;">Also too: http request memoization, custom hooks, React Context...</span>

## 🛠 Installation & 🚀 Usage

In order to properly run the package, you will need installed [v16.13.1](https://nodejs.org/) & npm on your machine

```javascript
// for the 🛠 installation
cd ./atsis-techtest
npm i

// for 🚀 running the project
npm start
```

## ❓ Application Store rationale

All API requests are done through redux. This means that within the components we will try to have minimal application
state logic. An example of this is the fetchRandomQuoteByAuthor action, as it returns the combined response of two
endpoints in their payload.

## 🙇 An apology regarding git commits:

First of all: I've used vanilla git, but following the branch name conventions. I wanted to keep the feature branches
and not remove them, and the command `git flow feature finish` removes them. That being said… There are a few 'wip'
commit messages, some exceeding length of 50chars… The other thing is: I've not treated the feature branches as is.
Instead, I've committed most the commits I've done in the last few days in the same feature branch because what I
intended was to end the MPV much more early.

<!--
## 🖍 Diagrams

The initial diagrams used for laying out the markup of this project are [here](INSERT LINK HERE) -->
<!--
### Project references used

[Robin Wieruch: How to use SASS in create-react-app?](https://www.robinwieruch.de/create-react-app-with-sass-support) -->

## License

[MIT](https://choosealicense.com/licenses/mit/)
