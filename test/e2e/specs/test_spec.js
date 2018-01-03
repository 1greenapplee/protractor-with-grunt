// spec.js
'use strict';

let common = require('../../e2e/po/common.js');
let td = require('../../e2e/po/toDo.po');
let v = require('../../e2e/po/var.js');
//browser.driver.sleep(4000);

describe('first test suites', function() {

    beforeEach(() => {
        browser.manage().deleteAllCookies();
    });

    afterEach(() => {

    });

    it('should be able to add an item to the ToDo without Page Objects', function() {
        browser.get('https://angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
    
    it('should be able to add an item to the ToDo with Page objects', function() {
        browser.get("https://angularjs.org/");
        td.inputField.sendKeys(v.firstToDo);
        element(by.model('todoList.todoText')).sendKeys('Our first To DO');
        td.add().click();
        td.check(v.firstToDo);
    });

});