## Gulp bootstrapper

Gulp bootstrapper is great for a quick start on your project. You don't need to setup a host, every change on your SASS, JavaScript, Fonts or Images will reload automatically your browser thanks to BrowserSync. The only requirement to run is [Node.js](https://nodejs.org)

If you want some more, like using your own proxy, please see some more details in the config file. All SASS files will be automatically autoprefixed for older browsers, your JavaScript will be compressed and all your resource files will be build into your public folder.


## Quickstart

If you want to start quick, open your terminal and run the following commands

	// go into your project-folder
	cd ~/my-project
	
	// rename the config sample 
	mv gulp/config.sample.js gulp/config.js
	
	// install the required modules
	npm install
	
	// start gulp
	gulp develop

That's it! Now you can start building your project.

Want to do some more? Check out the UI adress to get some great features from BrowserSync.

##Config
If you want some more, let's see to the *config.js* file:


**gulp/config.js**

	var config = {
	    host:                   '', // give your local url like: my-project.dev
	    public_folder:          'public_html',
	    build_folder:           'build',
	    resource_folder:        'recources'
	};

	config.path = {
	    public:             config.public_folder,
	    // SASS properties
	    sass_files:         config.resource_folder + '/sass/*.scss',
	    sass_dir:           config.resource_folder + '/sass/',
	    css_dest:           config.public_folder + '/' + config.build_folder +'/css',
	    css_maps:           'maps',
	    // JS properties
	    js_files:           config.resource_folder + '/js/*.js',
	    js_libs:            config.resource_folder + '/libs/*js',
	    js_dest:            config.public_folder + '/' + config.build_folder + '/js',
	    // Image properties
	    image_files:        config.resource_folder + '/img/**/*',
	    image_dest:         config.public_folder + '/' + config.build_folder + '/img',
	    // Font properties
	    font_files:         config.resource_folder + '/fonts/*',
	    font_dest:          config.public_folder + '/' + config.build_folder + '/fonts'
	};

	module.exports = config;
