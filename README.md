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

## 🧱 Component rationale

The component structure is pretty standard: a 'views' directory, that holds its needed components; and the 'components'
directory, that holds the mentioned components

| view 🛕 / component 🧱          | description                                                              |
| :------------------------------ | :----------------------------------------------------------------------- |
| 🛕 Home                         | The first screen the user sees. It has no functionality                  |
| 🛕 FourOhFour                   | The screen the user sees when an unidentified path is entered in the URL |
| 🛕 CharactersList               | The screen the user sees when it decides to enter the app                |
| 🛕 CharacterDetail              | The screen the user sees when it clicks in a character card              |
| 🧱 CharacterCard                | It renders the card of a character in 🛕 CharactersList                  |
| 🧱 CharacterDetailCard          | It renders the card of a character in 🛕 CharacterDetail                 |
| 🧱 CharacterDetailCardDataEntry | It renders the data entry of a character in 🛕 CharacterDetail           |
| 🧱 CharacterQuote               | It renders the quote of a character in 🛕 CharacterDetail                |
| 🧱 DataCards                    | It renders the cata card of a character in 🛕 Home                       |
| 🧱 GenericButton                | It renders a Button with default properties                              |
| 🧱 SwitchLanguage               | I renders the application navbar, and is able to switch localizations    |

## ❓ Application Store rationale

All API requests are done through redux. This means that within the components I will try to have minimal application
state logic. An example of this is the fetchRandomQuoteByAuthor action, as it returns the combined response of two
endpoints in their payload.

## 🗣️ Internationalization (i18n) rationale

Because I had a fair amount of time available when I was set out to implement i18n, I developed a custom way:

- All components that need i18n have a 'i18n' directory inside their respective component directories. Inside the
  mentioned 'i18n' there will be 'uiTexts.{locale}.json' file per localization. That is, for Spanish, there will be a
  `uiTexts.es.json`, and a `uiTexts.en.json` for English.
- If some components have element lists that need translation, a similar logic will be followed: the user will decide
  the name of the list, and it will be followed by the localization. That is, for localize the DataCards component into
  Spanish, there will be a `dataCards.es.json`, and a `dataCards.en.json` for english.
- The language is stored into LocalStorage (applied using a custom hook) once the application is loaded and every
  component is able to access the value see the current language thanks to React Context.

## 🙇 An apology regarding git commits:

First of all: I've used vanilla git, but following the branch name conventions. I wanted to keep the feature branches
and not remove them, and the command `git flow feature finish` removes them. That being said… There are a few 'wip'
commit messages, some exceeding length of 50chars… The other thing is: I've not treated the feature branches as is.
Instead, I've committed most the commits I've done in the last few days in the same feature branch because what I
intended was to end the MPV much more early.

## 🛠 Installation & 🚀 Usage

In order to properly run the package, you will need installed [v16.13.1](https://nodejs.org/) & npm on your machine

```javascript
// for the 🛠 installation
cd ./atsis-techtest
npm i

// for 🚀 running the project
npm start
```

<!--
## 🖍 Diagrams

The initial diagrams used for laying out the markup of this project are [here](INSERT LINK HERE) -->
<!--
### Project references used

[Robin Wieruch: How to use SASS in create-react-app?](https://www.robinwieruch.de/create-react-app-with-sass-support) -->

## License

[MIT](https://choosealicense.com/licenses/mit/)
