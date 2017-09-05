// spec.js
'use strict';
require('jasmine-given');

let common = require('../../e2e/po/common.js');
let td = require('../../e2e/po/toDo.po');
let v = require('../../e2e/po/var.js');
//browser.driver.sleep(4000);

describe('first test suites', function () {

    beforeEach(() => {
        browser.manage().deleteAllCookies();
    });

    afterEach(() => {

    });

    it('should be able to add an item to the ToDo', function () {
        common.goToPage(v.angularWebsite);
        td.inputField.sendKeys(v.firstToDo);
        td.add().click();
        td.check(v.firstToDo);
    });

});
