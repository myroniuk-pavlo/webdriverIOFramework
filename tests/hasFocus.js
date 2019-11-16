const expect = require('chai').expect;

describe('Test Radio Buttons page', function () {
    before(() => {
        browser.setViewportSize({
            width: 1920,
            height: 800
        });
        browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
    });

    it('should be able to focus on checkbox elements', function () {
        browser.click('//input[@value="option-1"]');
        let checkboxOne = browser.hasFocus('//input[@value="option-1"]');
        expect(checkboxOne, 'checkbox one is focused').to.be.true;

        let checkboxThree = browser.hasFocus('//input[@value="option-3"]');
        expect(checkboxThree, 'checkbox three is not focused').to.be.false;
    });

});