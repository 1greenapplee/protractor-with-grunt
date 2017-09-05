// Object Page
let commonElements = function() {
     this.goToPage = function(param) {
        browser.get(param);
    };

};
module.exports = new commonElements();
