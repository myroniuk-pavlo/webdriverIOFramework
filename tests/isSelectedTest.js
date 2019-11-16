const expect = require('chai').expect;

beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  browser.setViewportSize({
    width: 1200,
    height: 800
  });
});

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item Java is selected therefore should return true', function(done) {
    let isSelected = browser.isSelected("option[value='java']");
    expect(isSelected).to.equal(true);
  });
  
  it('Dropdown item maven is not selected therefore should return false', function(done) {
    let isSelected = browser.isSelected("option[value='maven']");
    expect(isSelected).to.equal(false);
  });
  
  it('Option2 is not selected therefore should return false', function(done) {
    let isSelected = browser.isSelected("input[value='option-2']");
    expect(isSelected).to.equal(false);
  });
  
  it('Option3 is selected therefore should return true', function(done) {
    let isSelected = browser.isSelected("input[value='option-3']");
    expect(isSelected).to.equal(true);
  });
  
  it('Radio button pumpkin is selected therefore should be true', function(done) {
    let isSelected = browser.isSelected("input[value='pumpkin']");
    expect(isSelected).to.equal(true);
  });
});