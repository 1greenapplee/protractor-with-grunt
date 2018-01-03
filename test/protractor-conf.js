var JasmineRunner = require('jasmine');
var jrunner = new JasmineRunner();
var fs = require('fs');

exports.config = {
    onPrepare: function() {
        global.ddval = 1;
    },

    // location of E2E test specs
    specs: [
        '../test/e2e/specs/**/*test_spec.js'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
              // args: ['--headless', '--disable-gpu', '--window-size=400,840'] //
        }
    },

    // directConnect: true,

    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://localhost:3000',

    // testing framework, jasmine is the default
    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    }
};
