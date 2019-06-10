# html-base
A pragmatic and scalable starter/seed project aimed at simple static HTML pages and sites.

# Purpose

To start a new static HTML site or page one probably shouldn't need to go further than the good old proven and amazing [HTML5 Boilerplate](https://html5boilerplate.com).

But with the latter consisting mostly of ready to use static files, it lacks as a basis for a working development workflow, which, given the modern web development requirements, one might sometimes need to add CSS pre-processing, bundling, deployment, among others.

This starter/seed project draws heavily from HTML5 Boilerplate, but adds a simple folder structure and a very lightweight base development workflow (based on [Grunt](https://gruntjs.com)) that allows for expansion to include aditional features and additional steps to a build pipeline.

With this starter/seed you will get:

- A modern template based on [HTML5 Boilerplate](https://html5boilerplate.com).
- A sensible folder structure with a `dist` folder and a minimal build process, that clearly separates all the the config and dev workflow files, `npm_modules`/dependencies, etc, from the files that need to be deployed.
- A deployment command/task that works through FTP/FTPS or SSH/SFTP.
- Configurable variables via [dotenv](https://github.com/motdotla/dotenv)/`.env` file.