# Getting Started

Perform the following steps to get set up with a bare-bones AngularJS ([ng-forward](https://github.com/ngUpgraders/ng-forward)) web app. The build system uses SystemJS, JSPM, and Gulp.

## Install Global Prerequisites

1. `cd` to the root of your clone of this repository
1. Install Node.js and NPM
1. Run `$ npm install -g gulp jspm typings http-server`

## Install Packages

1. Run `$ npm install` to acquire Gulp and build system dependencies
1. Run `$ jspm install` to acquire webapp and transpilation dependencies
1. Run `$ typings install` to acquire TypeScript definitions

## Gulp

1. Run `$ gulp prod` to create and configure a production JavaScript/HTML/CSS bundle from the project's source TypeScript/HTML/Sass files. You can find this bundled file in `static/build/main.js`.

## Serve

1. Run `http-server`. Keep this terminal open.
1. Browse to `localhost:8080` to see your basic Angular app. If the message "2 + 2 = 4" displays correctly, you should be good to go. (Note that the port in the address can change, so use the one that `http-server` outputs on startup if it is not 8080.)

## Developing

Switch to development (unbundled) mode by running `$ gulp dev`. TypeScript & Sass source files will be transpiled on the fly in-browser by SystemJS, so you can make changes and see them reflected by refreshing your browser. Be sure to re-run `$ gulp prod` before pushing to any production environments.
