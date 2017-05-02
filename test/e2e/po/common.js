// Object Page

var commonElements = function() {
     this.goToProtractorAPIpage = function() {
        browser.get('http://www.protractortest.org/#/api');
    };

}
module.exports = new commonElements();
