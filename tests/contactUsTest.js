//const expect = require('chai').expect;
const ContactUs_Page = require('../pageObjects/ContactUs_Page');
const request = require('sync-request');


describe('Test Contact Us form WebdriverUni', function() {
  let res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
  let contactUsDetailsRaw = JSON.parse(res.getBody().toString('utf-8'));
  let contactUsDetails = [];
  for (let i = 0; i < 5; i++) {
    contactUsDetails[i] = contactUsDetailsRaw[i];
  }

  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 800,
    });
  });

  beforeEach(function() {
    browser.url('/Contact-Us/contactus.html');
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    ContactUs_Page.setFirstName('Mike');
    ContactUs_Page.setLastName('Woods');
    ContactUs_Page.setEmailAddress(contactUsDetails[Math.floor(Math.random()*contactUsDetails.length)].email);
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    ContactUs_Page.setFirstName('Mike');
    ContactUs_Page.setLastName('Woods');
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    ContactUs_Page.setLastName('Woods');
    ContactUs_Page.setEmailAddress(contactUsDetails[Math.floor(Math.random()*contactUsDetails.length)].email);
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  contactUsDetails.forEach((contactDetail) => {
    it('Should be able to submit a successful submission via contact us form', function (done) {
      ContactUs_Page.submitAllInformationViaContactUsForm('Joe', 'Blocks', contactDetail.email, contactDetail.body);
      //
      // setFirstName('Joe');
      // setLastName('Blocks');
      // setEmailAddress(contactDetail.email);
      // setComment(contactDetail.body);
      // clickSubmitButton();
      // confirmSuccessfulSubmission();
    });
  });

});