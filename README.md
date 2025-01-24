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
├── .parcel-cache/
├── dist/
├── dist.dev/
├── node_modules/
├── src/
├── .editorconfig
├── .env
└── package.json
```

#### dist/

The folder of all the built files that can be pushed and served by a remote/production server. (**Note:** This folder isn't git ignored, [see more below](#why-commit-the-dist-folder).)

#### dist.dev/

The folder of all the build files to be served by the local/Parcel development server. (Folder is git ignored.)

#### src/

Where all of your source files go.

#### .editorconfig

[EditorConfig](https://editorconfig.org) file, to help maintain indentation consistency. ([Check the site](https://editorconfig.org/#download) to see how to enable on your code editor.)

#### .env

The main/default [dotenv](https://github.com/motdotla/dotenv) file. See how you can leverage this file (and dotenv) with Parcel [on the documentation](https://parceljs.org/features/node-emulation/#.env-files). Add local/development git ignored overrides to an `.env.local` file or any other appropriate `env.*.local` files. (The `.env` file already includes variables needed for deployment that you should edit.) **Important note:** Avoid adding secret variables to this file/committing secret variables. At the very least, add them locally to `.env.local`/`.env.*.local` files or ideally have a better/established process to manage secrets.

## Why Parcel?

Currently [HTML5 Boilerplate ships with a base webpack configuration](https://github.com/h5bp/html5-boilerplate/issues/2650) that provides a development server, builds the code for development and production, but in terms of build pipeline still seems a bit too bare.

I've been using Parcel lately with good results: it works out-of-thebox, it's fully featured for web development, and it's extendable if you need to tweak/modify some particular configuration on the build pipeline.

This isn't set in stone though, the simplicity of the current webpack configuration of HTML5 Boilerplate is a plus for a more bare starter, and [Vite](https://vitejs.dev) also seems like a great option. For now, I'll be sticking to Parcel unless I see the benefit of revisiting this or if I face, meanwhile, significant hurdles using Parcel.

## Why commit the dist folder?

(Explain.)

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
