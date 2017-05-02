var JasmineRunner = require('jasmine');
var jrunner = new JasmineRunner();
var JSONReporter = require('jasmine-json-test-reporter');
// var wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } };
var fs = require('fs');

exports.config = {
    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar',
    // chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.29',
    directConnect: true,
    onPrepare: function() {
            global.ddval = 1;

        var JSONReporter = require('jasmine-json-test-reporter');

        jasmine.getEnv().addReporter(new JSONReporter({
            file: 'jasmine-test-results.json',
            beautify: true,
            displaySpecDuration: true,
            indentationLevel: 4 // used if beautify === true
        }));
        
    },

    // location of E2E test specs
    specs: [
        '../test/e2e/specs/**/*_spec.js'
    ],

    multiCapabilities: [{
        'browserName': 'chrome'
    }],

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
