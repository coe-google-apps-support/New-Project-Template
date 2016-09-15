# New-Project-Template
This is our template for creating a new project.


Setting Up Our Development Environment

[[TOC]]

# Create a Github Account

GitHub is a web-based Git repository hosting service. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. If you are new to Git, there is a [self-paced introductory course](https://github.github.com/on-demand/intro-to-github/) available for free from GitHub.

[Create an account](https://github.com/join) or ask someone on the [Google Apps Support Dev Team](https://github.com/orgs/coe-google-apps-support/people) to add your existing account to the [organization](https://github.com/coe-google-apps-support).

# Download Github for Desktop

This [desktop application](https://desktop.github.com/) is a GUI repository manager that comes packaged with Git Shell.  If you’re coming from Unix, you may want to install [Git Bash](https://git-scm.com/download/win) as well.  Git Bash provides a virtual Bash shell for you to use the familiar Unix commands and many Unix utilities.

Once you authenticate this application with GitHub username/password, a new SSH key for that specific computer will be generated and automatically added to your GitHub account.

# Install Node

[Node](https://nodejs.org/en/) is used primarily for its package manager, Node Package Manager (NPM). NPM will allow us to install many other packages with ease. Install the LTS version. Ensure that the binary is on the system path (i.e. $PATH) by running the following command at a command prompt:

`$ npm --version`

If the output is not a version number, you may need to [add Node to your PATH](http://bfy.tw/7iz6). 

## Node Packages

Node packages can be installed globally or locally.  The globally required packages for our environment are as follows.

### Gulp

[Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) is a build automation system. It will help us do common tasks with ease (upload code to cloud, build, run etc).

`$ npm install --global gulp-cli`

### Browserify

[Browserify](https://www.npmjs.com/package/browserify) allows us to organize our client-side code in a well organized format. For more details, see [here](https://github.com/substack/browserify-handbook). Hopefully, we will be able to set this up for use with GAS.

`$ npm install --global browserify`

### Gasify

[Gasify ](https://www.npmjs.com/package/gasify)is a Browserify plugin for Google Apps Script.

`$ npm install --global gasify`

### Node Google Apps Script

Using [gapps](https://www.npmjs.com/package/node-google-apps-script), you can develop your Apps Script locally and push files to the Apps Script servers. This allows you to use any editor of your choice, version control, and other modern webdev patterns in to Apps Script development.

`$ npm install --global node-google-apps-script`

There is some additional authentication required with the setup of gapps, [see the docs](https://www.npmjs.com/package/node-google-apps-script#1-get-google-drive-credentials) for info.

# Setup Atom Text Editor

[Atom](https://atom.io/) is a powerful and customizable text editor that allows you to build your code, and many more features can be added by installing atom packages. 

## Recommended Atom packages

- [Atom Minimap](https://atom.io/packages/minimap) - Provides a visual overview of your source.
- [Atom Beautify](https://atom.io/packages/atom-beautify) - Beautify, unpack or deobfuscate JavaScript, HTML, CSS, and many other llanguages. When used with common settings among a team, this package helps to maintain a consistent appearance of code.
- [Atom HTML Preview](https://atom.io/packages/atom-html-preview) - Displays a live HTML rendering so you can see your CSS/HTML changes immediately.
- [Gulp Control](https://atom.io/packages/gulp-control) - Allows us to easily see/run our Gulp tasks.
- [Linter](https://atom.io/packages/linter) - Visualize errors and code style violations.
- [Linter JSCS](https://atom.io/packages/linter-jscs) - A configuration package for Linter that can be set to use the same settings that Google Closure Linter uses. You will need to create the configuration file named ".jscsrc" containing only these lines:

```json
}
preset: "google",
maximumLineLength: 120
}
````

# Install Closure Linter

[The Closure Linter](https://developers.google.com/closure/utilities/) is a CLI-based utility built by Google that checks JavaScript files for style issues such as operator placement, missing semicolons, spacing, the presence of JsDoc annotations, and more.

To install Closure Linter on Windows:

1. Download and install [Python for Windows](http://www.python.org/download/windows/).
2. Execute the following command:

`$ pip install https://github.com/google/closure-linter/zipball/master`

