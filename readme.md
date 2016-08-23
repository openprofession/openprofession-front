# Sass: Syntactically Awesome Style Sheets &nbsp;&nbsp;[![Gem Version](https://badge.fury.io/rb/sass.png)](http://badge.fury.io/rb/sass)

[<img src="https://rawgit.com/sass/node-sass/master/media/logo.svg" width="250" height="220" align="right">](https://github.com/sass/node-sass)

Sass makes CSS fun again. Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

---------------------------------------

Sass has two syntax's. The new main syntax (as of Sass 3) is known as "SCSS" (for "Sassy CSS"), and is a superset of CSS's syntax. This means that every valid CSS stylesheet is valid SCSS as well. SCSS files use the extension `.scss`.

---------------------------------------

The second, older syntax is known as the indented syntax (or just "Sass"). Inspired by Haml's terseness, it's intended for people who prefer conciseness over similarity to CSS. Instead of brackets and semicolons, it uses the indentation of lines to specify blocks. Although no longer the primary syntax, the indented syntax will continue to be supported. Files in the indented syntax use the extension `.sass`.





# Grunt: The JavaScript Task Runner &nbsp;&nbsp;[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

[<img src="http://gruntjs.com/img/grunt-logo-no-wordmark.svg" width="250" height="220" align="right">](http://gruntjs.com/)

## Why use a task runner?
In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it through a [Gruntfile](http://gruntjs.com/sample-gruntfile/), a task runner can do most of that mundane work for you—and your team—with basically zero effort.

---------------------------------------

## Why use Grunt?
The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze. See how to [get started](http://gruntjs.com/getting-started).


# Structure Files

```
  ├ css
  │ ├ fonts                    - fonts imported this project
  │ │
  │ ├ style.css(*)             — collected from the sass - css file of the this project file
  │ └ style.min.css(**)        — min style.css
  │ └ style.css.map(**)        — source map sass files
  │
  ├ dev
  │ ├ sass                     — sass - source style project
  │ │
  │ └ js
  │   ├ lib                    — library's/plugins
  │   │
  │   ├ jquery-1.11.1.min.js   — jquery
  │   └ production.js(**)      — collected in single file ['dev/js/jquery-1.11.3.min.js', 'dev/js/lib/*.js', 'js/common.js']
  │
  ├ images                     — images project
  │
  ├ js
  │ ├ common.js                — main js - file project
  │ ├ modernizr.js             — It’s a collection of tests – or “detects” as we like to call them – which run as your web page loads.
  │ ├ ie-detector.js           — IE detector js
  │ ├ libs.js(*)               — collected in single file ['dev/js/jquery-1.11.3.min.js', 'dev/js/lib/*.js']
  │ └ production.min.js(**)    — uglied 'dev/js/production.js'
  │
  ├ Gruntfile.js               - This file is used to configure or define tasks and load Grunt plugins.
  ├ package.json               - This file is used by npm to store metadata for projects published as npm modules.
  └ *.html(*)                  - generated html files this project
```

  > (&#8727;)&nbsp;&nbsp;&nbsp;&nbsp;- after Grunt compiled development task
  >
  > (&#8727;&#8727;)&nbsp;&nbsp;- after Grunt compiled production task

# Node and Grunt installation

---

Grunt is a command-line tool for managing task automation. There are already countless blog posts and tutorials explaining what it does and how to install it, so we’ll just briefly cover the installation process and then dive in to actually using it.

## Install NodeJS

First of all, you’ll need [NodeJS](https://nodejs.org/en/) which is a one-click install via the link.


	Install grunt-cli


Once you have Node installed, you’ll need to run the following command to install the grunt-cli globally. This gives you the command-line interface for grunt (that’s the cli part) and allows you to use the tool anywhere on your computer.

	npm install -g grunt-cli

If you’re on a mac/linux and that command fails, you may need to run it with `sudo`

	sudo npm install -g grunt-cli

# Sass installation

---

## On Windows
1. Install [Ruby](https://www.ruby-lang.org/en/installation/) 1.9.3 or 2.x.
This is a straight forward install and should pose no problems.
2. Restart computer.
3. Confirm that Ruby installed correctly. Open the Command Prompt window and type

```
ruby -v
```

at the command prompt. You should see the version number of your Ruby installation.
4. To install Sass on `Windows` open the Command Prompt and type:

```
gem install sass
```

You should see the following after Sass is successfully installed.

```
Fetching: sass-3.2.7.gem (100%)
Successfully installed sass-3.2.7
Parsing documentation for sass-3.2.7
Installing ri documentation for sass-3.2.7
Done installing documentation for sass (18 sec).
1 gem installed
```

---

## On Linux
1. Install [Ruby](https://www.ruby-lang.org/en/installation/) 1.9.3 or 2.x.
2. Confirm that Ruby installed correctly. Open the terminal and type

```
ruby -v
```

at the command prompt. You should see the version number of your Ruby installation.
3. To install Sass on `Linux` open the Terminal and type:

```
sudo gem install sass
```

---

## On OSX
1. [Ruby](https://www.ruby-lang.org/en/installation/) comes bundled in `OSX`

```
ruby -v
```

Your output should be similar to

```
ruby 2.0.0p645 (2015-04-13 revision 50299) [universal.x86_64-darwin15]
```

2. To install Sass on `OSX` open the Terminal and type:

```
sudo gem install sass
```