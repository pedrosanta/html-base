# html-base

A pragmatic starter/seed project for simple static HTML projects/pages/sites.

**Contents:**

- [Purpose](#purpose)
  * [Folder structure](#folder-structure)
- [Usage](#usage)
  * [Grunt tasks](#grunt-tasks)
- [Contributing](#contributing)

# Purpose

A starter/seed project drawing heavily from the good proven [HTML5 Boilerplate](https://html5boilerplate.com) and pairing it with [Parcel](https://parceljs.org) for a quick HTML development setup, aligned with current web development requirements.

With this starter/seed you will get:

- A modern HTML starter template based on [HTML5 Boilerplate](https://html5boilerplate.com).
- Easy but robust dependency and asset bundling with [Parcel](https://parceljs.org).
- A sensible folder structure with `src`/`dist` folders allowing for proper separation of all the the config, dev workflow files, `npm_modules`/dependencies, etc, and the built files that need to be deployed.
- Configurable variables via [Parcel support for dotenv/`.env` files](https://parceljs.org/features/node-emulation/#.env-files).
- A deployment command/task that works through FTP/FTPS or SFTP.

## Folder structure

```
.
├── .tmp/
├── dist/
├── node_modules/
├── src/
├── .editorconfig
├── .env.example
├── Gruntfile.js
└── package.json
```

#### app/

Where all of your source files go.

#### dist/

The folder of all the built files that can be pushed and served by a remote/production server.

#### .tmp/

The folder of all the build files to be served by the local/dev built-in server.

#### .editorconfig

[EditorConfig](https://editorconfig.org) file, to help maintain indentation consistency. ([Check the site](https://editorconfig.org/#download) to see how to enable on your code editor.)

#### .env.example

[dotenv](https://github.com/motdotla/dotenv) example file. Copy this file into a `.env` file and adjust the environment variables. (This is mostly an example usage of dotenv functionality to store and use environment variables on the build tasks/pipeline for you to expand, for now it only holds a Google Analytics variable.)

#### Gruntfile.js

[Grunt](https://gruntjs.com/) configuration file providing tasks for the development workflow—check the list of available tasks below.

## Why Parcel?

Nowadays, HTML5 Boilerplate ships with a base [webpack](https://webpack.js.org/) configuration.

# Usage

Make sure you have [Grunt/`grunt-cli` installed](https://gruntjs.com/getting-started#installing-the-cli).

Clone the repository and make sure to clean/delete the `.git` folder.

Install the development workflow dependencies with a `npm install` and use the following tasks to build, develop and deploy your project/site.

## Grunt tasks

- `grunt`, `grunt:build` (default task) — Build all the files needed for local/dev and production.
  - `grunt build:dev` — Build all the files needed for local/dev.
  - `grunt build:dist` — Build all the files needed for production.
- `grunt dev` — Development task for building files, launch a development server and watch changes. The development server injects the live reload script into the page through [connect-livereload / livereload option](https://github.com/gruntjs/grunt-contrib-connect#livereload), which is configured to work with the `watch` task.
- `grunt watch` — Task that will watch changes and trigger the build pipeline, but doesn't launch the development server (useful if you're serving the files through another server).
- `grunt server` — Run the development server but without watch nor live reload functionality (useful for a simple or quick server launch).
- `grunt clean` — Removes all built/generated files and directories (useful to use before a `grunt build` to force a clean build).
- `grunt deploy` — Deploys the built code/site to a server using FTP/FTPS/SFTP. **Note:** FTP/FTPS and SFTP deployments are done through different Grunt tasks/dependencies ([grunt-ftps-deploy](https://github.com/dYb/grunt-ftps-deploy) and [grunt-sftp-deploy](https://github.com/thrashr888/grunt-sftp-deploy)). You can adjust and remove/keep just one of them according to your needs/server connection. You'll also need to add a `.ftppass` file to your project, and to adjust the connection info. Check the documentation of each task/dependency to see how you can do this.

# Contributing

If you feel something can be improved in the spirit of this starter/seed project, feel free to open an Issue or submit a Pull Request for consideration.

@pedrosanta
