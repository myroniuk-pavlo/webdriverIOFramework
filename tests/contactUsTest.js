//const expect = require('chai').expect;
const ContactUs_Page = require('../pageObjects/ContactUs_Page');
const request = require('sync-request');


describe('Test Contact Us form WebdriverUni', async () => {

  // before(() => {
  //   browser.setViewportSize({
  //     width: 1400,
  //     height: 800,
  //   });
  // });

  beforeEach(async () => {
    await browser.url('/Contact-Us/contactus.html');
  });

  // contactUsDetails.forEach((contactDetail) => {
  //   it('Test  1: Should be able to submit a successful submission via contact us form', (done) => {
  //     ContactUs_Page.submitAllInformationViaContactUsForm('Joe', 'Blocks', 'email@email.com', 'message');
  //     ContactUs_Page.successfulSubmissionHeader().waitForDisplayed(3000);
  //     expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal('Thank You for your Message!');
  //   });
  // });

    it('Test  1: Should be able to submit a successful submission via contact us form', (done) => {
      ContactUs_Page.submitAllInformationViaContactUsForm('Joe', 'Blocks', 'email@email.com', 'message');
      ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
      try {
        expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal('Thank You for your Message!');
      } catch (err) {
        console.log(`Exception: ${err}`)
        assert.fail()
      }
    });

  it('Test  4: Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    ContactUs_Page.setLastName('Woods');
    ContactUs_Page.setEmailAddress('email@email.com');
    ContactUs_Page.clickSubmitButton();
    try {
      expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string('Error: all fields are required');
    } catch (err) {
      console.log(`Exception: ${err}`)
      assert.fail()
    }
  });

});