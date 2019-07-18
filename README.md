# html-base

A pragmatic and scalable starter/seed project aimed mostly at simple static HTML pages and sites.

**Contents:**

- [Purpose](#purpose)
  * [Folder structure](#folder-structure)
- [Usage](#usage)
  * [Grunt tasks](#grunt-tasks)

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
├── Gruntfile.js
└── package.json
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
