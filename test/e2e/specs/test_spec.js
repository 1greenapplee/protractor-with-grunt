// spec.js
'use strict';

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

    it('should be able to add an item to the ToDo without Page Objects', function () {
        common.goToPage(v.angularWebsite);
        td.inputField.sendKeys(v.firstToDo);
        td.add().click();
        td.check(v.firstToDo);
    });
    it('should be able to add an item to the ToDo with Page objects', function () {
        browser.get("https://angularjs.org/");
        td.inputField.sendKeys(v.firstToDo);
        element(by.model('todoList.todoText')).sendKeys('Our first To DO');
        td.add().click();
        td.check(v.firstToDo);
    });

});
