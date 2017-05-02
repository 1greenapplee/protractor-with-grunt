// spec.js
'use strict';
require('jasmine-given');

var common = require('../../e2e/po/common.js');
var v = require('../../e2e/po/var.js');
//browser.driver.sleep(4000);

describe('first test suites', function() {

    beforeEach(() => {
        browser.manage().deleteAllCookies();
        browser.driver.manage().window().maximize();
    });

    afterEach(function() {

    });

    it('should be able to perform a first test', function() {
       common.goToProtractorAPIpage();
       element(by.id('searchInput')).sendKeys('promise');
       browser.driver.sleep(4000);
    });

});
