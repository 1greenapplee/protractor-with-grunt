'use strict';

describe('angularjs homepage todo list', function() {

      it('should add a todo', function() {
          browser.get('http://angular.github.io/protractor/#/tutorial');

          expect(browser.getCurrentUrl())
              .toBe('http://angular.github.io/protractor/#/api');
      });

});
