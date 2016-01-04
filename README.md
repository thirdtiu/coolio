Coolio - A trello clone app
===========================

##Setup

You must have [bower](http://bower.io/) and [npm](https://nodejs.org/en/download/) installed
After pulling from repo, install npm and bower packages:

`npm install`

`bower install`

On the app directory, start the server:

`npm start`

You can now access the app on:

`http://localhost:8080/dev/`

##Development Process

I am using [grunt](http://gruntjs.com/) for building the app.

Everything is in /src folder, if you edit stuff inside this directory, execute `grunt` to build the app again. It will be deployed to the /dev directory. You can also execute `grunt watch` so it automatically rebuilds.

`grunt production` deploys to the /prod directory and everything is minified.


##To-dos

UI Improvements
Story Cards color change
Recycle Bin to have the ability to restore or permanently delete a story.

