# Convention App Client

## Table of Contents
1. [Adding to the Readme](#readme)
2. [Contributing](#contributing)
3. [French Translations](#translations)
4. [Style Guides](#styleguides)
5. [Installing for Android](#installingandroid)
6. [Ionic Build Process](#ionicbuild)
7. [Cordova Plugins](#cordovaplugins)
8. [Performance Testing](#performancetesting)
9. [Testing Standards](#testingstandards)
10. [Config Files](#configfiles)
11. [Documentation Standards](#documentationstandards)
12. [Useful Gulp Tasks](#gulptasks)
13. [Misc](#misc)

<a name="readme">
## Adding to the Readme
Please don't hesitate to add to the readme. Anything that is valuable to the project should be added to either the client or server readme! Make a change, and put it through a pull request.

<a name="contributing">
## Contributing
Once you are complete your story, merge the current master into your branch, and make a pull request to the master. Everyone should feel free to hop into the pull request and offer suggestions.

<a name="translations">
## French Translations
All words need to be translated. We are going to attempt to do these all within the controllers using the translate factory. This will reduce the number of watchers required for the file.

<a name="styleguides">
## Style Guides
* Javascript: AirBnB Style Guide (https://github.com/airbnb/javascript/tree/master/es5)
* Angular: JohnPapa (https://github.com/johnpapa/angular-styleguide)
* SASS: SassGuideLin (http://sass-guidelin.es/)
* Performance Guide: http://blog.500tech.com/is-reactjs-fast/

<a name="installingandroid">
## Installing for Android

### Installing Android SDK
The easiest way to install the android SDK is using Android Studio. For instructions for both Android Studio or the standalone SDK, follow these [instructions](https://developer.android.com/sdk/installing/index.html).

### Installing Genymotion
It's highly recommended that you use genymotion for emulation. To install genymotion, please follow these [instructions](https://www.genymotion.com/#!/download).

<a name="ionicbuild">
## Ionic Build Process


### Building Android

`ionic run android`

This will run the app on a plugged in phone. If you do not have a phone plugged in, it will attempt to use the logged in emulator. If you have not set your computer up for android builds, please see installing for android.

### Building for Browser

`ionic serve`

This will complete all proccesses listed below, and watch your app in browser. Any changes made to your app and config files will cause the app to reload.

### Processes

* JS
  * Uglification
  * Minification
  * JSHint
  * Unit Test
  * Source Mapped
  * Collects all JS in Components
  * Collects Libs written in config/third-party.js

* SASS
  * Convert to CSS
  * Minify
  * Autoprefix
  * Source Mapped

* HTML
  * Move Index.html
  * Turn HTML files in components into js with Template Cache
  * Minify and Uglify JS Files

<a name="cordovaplugins">
## Cordova Plugins

Please list any cordova plugins heres.

<a name="performancetesting">
## Performance Testing

### Batarang
Extends the Developer Tools, adding tools for debugging and profiling AngularJS applications. This will be in developer tools, beside console.

[Download](https://chrome.google.com/webstore/detail/angularjs-batarang-stable/niopocochgahfkiccpjmmpchncjoapek)

### Watchers
Snippet to check the number of watchers in the current page. Snippets require Chrome Canary, and can be found here.
[Snippets](https://github.com/bahmutov/code-snippets);

[Watcher Snippet](https://gist.github.com/kentcdodds/31c90402750572107922<F37>)

<a name="testingstandards">
## Testing Standards

### Code Coverage
All public methods should have unit-tests. The goal is to have near 80% code coverage. To check the current Code Coverage, after running `gulp pre-push` or `gulp unit-test`, navigate to test/coverage, and open the index.html.

### Code Complexity
Viewing code complexity can help clean up overly complex files, and identify issues. 

First install plato with `npm install -g plato`. 

To run the service, go to the client folder, and run `plato -r -d  test/results app/components/*/**.js`

<a name="configfiles">
## Config Files

### third-party.js
This file is used to tell ionic which bower apps are being used. After you install a package with bower, make sure to add the js file into this package.

### paths.js
Stored paths of various files and directories in our system.

<a name="documentationstandards">
## Documentation Standards
All functions will be documented. We are using the JS Doc style. For a guide on this, please see the style guides above.

Please be smart about your docs. If the function is a public api call, give details on the way you can use the function, and what the parameters are. If not, we don't need a story book of details. If your unsure, write what you think is best, and we can look at it in a pull request.

<a name="gulptasks">
## Useful Gulp Tasks

### gulp dist-clean
Clean the WWW repo of all files. 

### gulp pre-push
Call all Unit Tests and Lint/Style Checkers. These should all pass before pushing to github.

### gulp
Build App from client/app to client/www. This will complete all processes listed in Build Procceses. If you would like to run your app, please use the Ionic commands listed in the Build Processes

### gulp unit-test
Run all Unit Tests.

### gulp lint
Run Basic lint style checks.

<a name="misc">
## Misc

