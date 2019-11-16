const locators = {
  notDisplayedButton: '#not-displayed',
  hiddenButton: '#visibility-hidden',
  zeroOpacityButton: '#zero-opacity',
  headingOne: '//h1[text()="Hidden Elements.."]',
};

beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
});

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    let elem = browser.isExisting(locators.notDisplayedButton);
    elem.should.equal(true);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    let elem = browser.isExisting(locators.hiddenButton);
    elem.should.equal(true);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    let elem = browser.isExisting(locators.zeroOpacityButton);
    elem.should.equal(true);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    let elem = browser.isExisting(locators.headingOne);
    elem.should.equal(true);
  });
  
  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    let elem = browser.isExisting('#no-such-element');
    elem.should.equal(false);
  });
});