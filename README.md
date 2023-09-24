# Millionaire game by Artem


## For run repo locally 

1. Clone this repo and install all dependencies 

### `npm i`

2. Run this comamnd once for setting pre-commit hooks

### `npm run husky-install`

3. Run this Millionaire app

### `npm start`

Tish command will run the app in the development mode.

## Or app can be aviable online at https://artem108.github.io/millionaire/#

## Aviable scripts 

### `npm lint`
Run eslint in src folder

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\


## For configure questions and answers

Go to `./src/gameConfig/gameConfig.json` file and modify `question`, `answers`, `answer`, `rewards`
depends on your needs.

## Pre-commits hooks
    Also on each commit will run eslint and pretier and check errors

## CI/CD
    This repo automatically on each push to the master brunch run all pipelines specified 
    in the `.github/workflows/node.js.yaml` file and after that deploy changes to the gh-pages

## What can be improoved 
1. Writer more tests(don't have enough time).
2. Make tests on ts(don't have enough time).
3. Make by design answers borders in the quiz.
4. Make disgn more responsive add some styles for tablets.
5. Add more rools for prettier and replace --check to --write on pre-commit hook.
