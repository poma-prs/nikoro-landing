## How to run

The widget uses [Gulp](http://gulpjs.com/) for its CSS and JavaScript build system

Download and install [Node](https://nodejs.org/en/download/), which we use to manage our dependencies. Run `npm install`.

##### Run front-end locally:
1. Run `gulp serve`

##### Run with backend:
1. Run `gulp build`
2. Use files from `dist` to run Apache server

##### Build production version
1. Run `gulp build-prod`
2. Publish `publish` folder to prod or local server
3. Copy result html of `index.html` to `index_robots.html`

**Note:** run these commands from the project's root folder
