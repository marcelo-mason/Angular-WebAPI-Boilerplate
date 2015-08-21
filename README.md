# ASP.NET 5 WebAPI and AngularJS Boilerplate

##Work-In-Progress

Includes:

* Package Manager: NPM
* Tasks: Gulp
* Testing: Karma + Protractor
* UI Framework: Angular Material
* OpenID/OAuth2: IdentityServer3
* Sample controllers, directives, services

# Gulp Tasks

Task  | Description
------------- | -------------
default:dev | Cleans *wwwroot*, runs the `build` task to populate it, then starts the `watch` task for on the fly updates
default:prod | Cleans *wwwroot*, runs the `build` task to populate it, then runs `build:gzip` task
test | Runs the `test:unit` and the `test:protractor` tasks
test:unit (internal) | Runs karma unit tests
test:protractor (internal) | Runs protractor end-to-end tests
build (internal) | Runs `build:styles`, `build:libs`, `build:images`, `build:fonts`, `build:views`, and `build:browserify` tasks
build:browserify (internal) | Bundles all required dependencies in *App/Scripts/main.js* into *wwwroot/js/bundle.js* applying transforms such as ngannotate (AngularJS dependency injection), babelfy (ES6, JSX support)
build:fonts (internal) | Copies *App/Fonts* to *wwwroot/fonts*
build:images (internal) | Copies *App/Images* to *wwwroot/images*, running imagemin on them in the process
build:libs (internal) | Copies files defined in *config.js* from *node_modules* to *wwwroot/lib*
build:syles (internal) | Compiles *App/Sass* files to *wwwroot/css*, creates source maps and adds vendor prefixes
build:views (internal) | Copies *App/index.html* to *wwroot/index.html*. Then concatenates and registers AngularJS templates from *App/Views* in the $templateCache and bundles them into *wwwroot/js/templates.js*
build:gzip (internal) | Creates gzips for all files in *wwwroot*
clean (internal) | Cleans out the *wwwroot* directory
watch (internal) | Watches for changes in *App/Sass*, *App/Images*, *App/Fonts*, *App/Views*, and *App/home.html* and runs their respective tasks copying them to *wwwroot*, runs `watchify` task to monitor scripts and `browserSync`
watch:browserify (internal) | Watches for *App/Scripts/main.js* changes (and its required dependencies) and rebundles on the fly
watch:browserSync (internal) | Enables BrowserSync integration for live updates and syncing across multiple browsers
webdriver (internal) | Plugin for Selenium testing, used by `test:protractor`
webdriver:update (internal) | Updates the Selenium server, used by `test:protractor`

#Sources

Adapted from [AngularJS Boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)
