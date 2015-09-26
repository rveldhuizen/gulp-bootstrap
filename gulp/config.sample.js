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