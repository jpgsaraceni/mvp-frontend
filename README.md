# The Game

Droplinguo is a game for teaching English for children from 4 to 7 years old. It consists of levels with cards containing name and pronunciation of the image. The game is played through a drag and drop logic, with a plesent user interface for children.

This game was built as an MVP for the Alpha EdTech web development course.

## Rules

The child will click on an image and drag into a category, while listening to its name and an indication of the correct category. When they drop into the correct category, they gain 10 pointz. When they drop into the wrong category, they lose 10 pointz. After they have dropped all cards into their respective categories, the level ends and each 10 pointz are converted to 1 coin.

They can use their coinz to buy stuff from the store. They can also buy (with real money) boosts to get coinz faster.

This game may be adapted into an educational SaaS. Schools or teachers would subscribe to the service and have the possibility of customizing the levels, assigning homework and following their students' delopment.

## Running locally

The back end of this project is not yet hosted anywhere, so for it to work you should run the server locally. You can clone the projecto from [this repo](https://github.com/jpgsaraceni/mvp-backend).

### Requirements

You will need [node.js](https://nodejs.org/en/download/) installed locally. You may use the default package manager, [npm](https://www.npmjs.com/package/download) (installed along with node), but we recommend using [yarn](https://classic.yarnpkg.com/) for React apps. To install yarn, just run (after you've installed node and npm):

```shell
npm install yarn
```

### 1. Install dependencies

After starting the server and cloning this repo, run

```shell
yarn install
```

or if you use npm:

```shell
npm install
```

### 2. Start development server

```shell
yarn start
```

or on npm

```shell
npm start
```

There you go! After react-script launches the development server (should take just a few seconds) you can open this app on your browser, by default on `localhost:3000`.
