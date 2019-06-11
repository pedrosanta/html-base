# html-base

A pragmatic and scalable starter/seed project aimed mostly at simple static HTML pages and sites.

**Contents:**

- [Purpose](#purpose)
  * [Folder structure](#folder-structure)
- [Usage](#usage)

# Purpose

To start a new static HTML site or page one probably shouldn't need to go further than the good old proven and amazing [HTML5 Boilerplate](https://html5boilerplate.com).

But with the latter consisting mostly of ready to use static files, it lacks as a basis for a working development workflow, which, given the modern web development requirements, one might sometimes need to add CSS pre-processing, bundling, deployment, among others.

This starter/seed project draws heavily from HTML5 Boilerplate, but adds a simple folder structure and a very lightweight base development workflow (based on [Grunt](https://gruntjs.com)) that allows for expansion to include aditional features and additional steps to your build pipeline.

With this starter/seed you will get:

- A modern template based on [HTML5 Boilerplate](https://html5boilerplate.com).
- A sensible folder structure with a `dist` folder and a minimal build process, that clearly separates all the the config and dev workflow files, `npm_modules`/dependencies, etc, from the files that need to be deployed.
- A deployment command/task that works through FTP/FTPS or SSH/SFTP.
- Configurable variables via [dotenv](https://github.com/motdotla/dotenv)/`.env` file.

## Folder structure

```
.
├── .tmp/
├── app/
├── dist/
├── node_modules/
├── .editorconfig
├── package.json
└── Gruntfile.js
```

#### app/

Where all of your source files go.

#### dist/

The folder of all the built files that can be pushed and served by a server in production.

#### .tmp/

The folder of all the build files to be served by the local/dev built-in server.

#### .editorconfig

[EditorConfig](https://editorconfig.org) file, to help maintain indentation consistency. ([Check the site](https://editorconfig.org/#download) to see how to enable on your code editor.)

#### Gruntfile.js

[Grunt](https://gruntjs.com/) configuration file providing tasks for the development workflow—check the list of available tasks below.

# Usage

(To finish.)

