var config = require('./config.js');

var browsersync = {
        development: {
            port: 9999,
            files: [
                config.path.sass_files,
                config.path.js_files,
                config.path.image_files,
                config.path.font_files
            ]
        }
    };

// Setup proxy or server, depends on given host
if( config.host ) {
    browsersync.development.proxy = config.host
} else {
    browsersync.development.server = {
        baseDir: config.path.public
    }
}

module.exports = browsersync;

