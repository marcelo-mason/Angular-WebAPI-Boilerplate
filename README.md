# ASP.NET 5 WebAPI and AngularJS Boilerplate

Includes:

* Package Manager: NPM
* Tasks: Gulp
* Testing: Karma + Protractor
* UI Framework: Angular Material
* Dependency Injection: Ninject
* OpenID/OAuth2: IdentityServer3
* Sample controllers, directives, services

# Gulp Tasks

Task  | Description
------------- | -------------
dev | Cleans *wwwroot*, runs the `build` task to populate it, then starts the `watch` task for on the fly updates
prod | Cleans *wwwroot*, runs the `build` task to populate it, then runs `gzip` task
unit | Runs karma unit tests
watch (internal) | Watches for changes in *App/Sass*, *App/Images*, *App/Fonts*, *App/Views*, and *App/home.html* and runs their respective tasks copying them to *wwwroot*, runs `watchify` task to monitor scripts and `browserSync`
watchify (internal) | Watches for *App/Scripts/main.js* changes (and its required dependencies) and rebundles on the fly
build (internal) | Runs `styles`, `libs`, `images`, `fonts`, `views`, and `browserify` tasks
browserify (internal) | Bundles all required dependencies in *App/Scripts/main.js* into *wwwroot/js/bundle.js* applying transforms such as ngannotate (AngularJS dependency injection), babelfy (ES6, JSX support)
browserSync (internal) | Enables BrowserSync integration for live updates and syncing across multiple browsers
fonts (internal) | Copies *App/Fonts* to *wwwroot/fonts*
images (internal) | Copies *App/Images* to *wwwroot/images*, running imagemin on them in the process
libs (internal) | Copies files defined in *config.js* from *node_modules* to *wwwroot/lib*
syles (internal) | Compiles *App/Sass* files to *wwwroot/css*, creates source maps and adds vendor prefixes
views (internal) | Copies *App/index.html* to *wwroot/index.html*. Then concatenates and registers AngularJS templates from *App/Views* in the $templateCache and bundles them into *wwwroot/js/templates.js*
gzip (internal) | Creates gzips for all files in *wwwroot*
clean (internal) | Cleans out the *wwwroot* directory

#Sources

Adapted from [AngularJS Boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)
