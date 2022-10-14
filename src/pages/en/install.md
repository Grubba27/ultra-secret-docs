---
title: Install
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

### Note on Meteor versions

> Meteor currently supports OS X, Windows, and Linux. Only 64-bit is supported. Apple M1 is natively supported from
> Meteor 2.5.1 onward (for older versions, you will need to run with a rosetta terminal).

### Installation

For the latest version of Meteor CLI, you can use the following command:

__macOS/Linux (it ships with node.js 14):__

```bash
curl https://install.meteor.com/ | sh
```

__Windows (needs node.js 14):__

```bash
npm install -g meteor
```

## Creating your first app

To create your first app(by default is React app), run the following command in the directory where you want to create
your app:

```bash

```bash
meteor create my-app
```
## Templates

When you create a new Meteor project, you can choose between a few templates by using their flag.

`--bare`

Creates a basic, blaze project.

`--full`

Creates a more complete, imports-based project which
closely matches the [file structure](https://guide.meteor.com/structure.html#javascript-structure) recommended by the
[Meteor Guide](https://guide.meteor.com/)

`--minimal`

Creates a project with as few Meteor Packages as possible.

`--package`

Creates a new package. If used in an
existing app, this command will create a package in the packages
directory.

`--typescript`

Create a basic [Typescript](https://guide.meteor.com/build-tool.html#typescript)
React-based app. Can be combined with other flags to use a different UI than
React.

`--apollo`

Create a basic [Apollo + React](https://www.apollographql.com/) app.

**Flags for default UI libraries / frameworks**

`--blaze`

Create a basic [Blaze](https://blazejs.org/) app.

`--vue`

Create a basic vue-based app. See the [Vue guide](https://guide.meteor.com/vue.html)
for more information.

`--svelte`

Create a basic [Svelte](https://svelte.dev/) app.

`--tailwind`

Create a basic [React](https://reactjs.org) + [Tailwind CSS](https://tailwindcss.com) app.

`--chakra-ui`

Create a basic [chakra-ui](https://chakra-ui.com/) app.

`--solid`

Create a basic [solid](https://www.solidjs.com/) app.


## Troubleshooting

### Prerequisites and useful information

- If you are on a Mac M1 (Arm64 version) you need to have Rosetta 2 installed, as Meteor uses it for running MongoDB.
  Check how to install it here
- Meteor works with Node.js version >= 10 and <= 14, for Windows you need to have Node.js installed for running the npm
  installer (tip: you can use nvm for managing node versions).
- Meteor supports Windows 7/Windows Server 2008 R2 and up.
- Disabling antivirus (Windows Defender, etc.) will improve performance.
- For compatibility, Linux binaries are built with CentOS 6.4 i386/amd64.
- iOS development requires the latest Xcode.

### Global installation errors

If your user doesn’t have permission to install global binaries, and you need to use sudo, it’s necessary to append
_–unsafe-perm_ to the above command:

```bash
sudo npm install -g meteor --unsafe-perm
```

We strongly discourage the usage of Node.js or Meteor with root permissions. Only run the above command with sudo if you
know what you are doing.

If you only use sudo because of a distribution default permission system, check this link for fixing it.

In some cases you can get this error:

```bash
WARN checkPermissions Missing write access to /usr/local/lib/node_modules
 ```

because your Node.js installation was performed with wrong permissions. An easy way to fix this is to install Node.js
using [nvm](https://github.com/nvm-sh/nvm) and forcing it to be used in your terminal. You can force it in the current
session of your terminal by
running ``nvm use 14``.

#### PATH management</h2>

By default, the Meteor installer adds its install path (by default, `~/.meteor/`) to your PATH by updating either
your `.bashrc`, `.bash_profile`, or `.zshrc` as appropriate. To disable this behavior, install Meteor by running:

```bash
npm install -g meteor --ignore-meteor-setup-exec-path
```

(or by setting the environment variable `npm_config_ignore_meteor_setup_exec_path=true`)

### Old Versions on Apple M1</h2>

For Apple M1 computers, you can append Rosetta prefix as following, if you need to run older versions of Meteor (before
2.5.1):

```bash
arch -x86_64 npm install -g meteor
```

or select Terminal in the Applications folder, press CMD(⌘)+I and check the "Open using Rosetta" option.

<h2 id="meteor-docker">Run Meteor inside Docker</h2>

You can also use a Docker container for running Meteor inside your CI, or even in your local development toolchain.

We do provide the meteor/meteor-base ubuntu-based Docker image, that comes pre-bundled with Node.JS and Meteor, and runs
it as a local user (not as root).

You can refer to our meteor/galaxy-images repository to see how to use it, and the latest
version. [More about meteor-base here.](https://github.com/meteor/galaxy-images/blob/master/meteor-base/README.md)

<h2 id="windows">Note for Windows users</h2>

On Windows, the installer runs faster
when [Windows Developer Mode](https://docs.microsoft.com/en-us/windows/apps/get-started/enable-your-device-for-development)
is enabled. The installation extracts a large number of small files, which Windows Defender can cause to be very slow.

<h2 id="nvm">Node version manager</h2>

If you use a node version manager that uses a separate global `node_modules` folder for each Node version, you will need
to re-install the `meteor` npm package when changing to a Node version for the first time. Otherwise, the `meteor`
command will no longer be found.

<h2 id="fish-shell">Note for fish shell users (Linux)</h2>

To be able to user `meteor` command from fish it's needed to include `/home/<user>/.meteor` in `$PATH`; to do that just
add this line in `/home/<user>/.config/fish/config.fish` file (replace `<user>` with your username):

`set PATH /home/<user>/.meteor $PATH`

### Uninstalling Meteor

If you installed Meteor using npm, you can remove it by running:
`meteor-installer uninstall`

If you installed Meteor using curl, you can remove it by running:
`rm -rf ~/.meteor`
`sudo rm /usr/local/bin/meteor`


Good luck out there, Astronaut. 🧑‍🚀
