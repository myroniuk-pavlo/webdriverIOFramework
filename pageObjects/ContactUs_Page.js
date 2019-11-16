const expect = require('chai').expect;

class ContactUs_Page {
    get firstName() { return $("[name='first_name']");}
    get lastName() { return $('//input[@name="last_name"]');}
    get emailAddress() { return $('//input[@name="email"]');}
    get comments() { return $('//textarea[@name="message"]');}
    get submitButton() { return $('//input[@type="submit"]');}
    get successfulSubmissionHeader() { return $('#contact_reply h1');}
    get unsuccessfulSubmissionHeader() { return $("body");}

    setFirstName(firstName) {
        return this.firstName.setValue(firstName);
    }

    setLastName(lastName) {
        return this.lastName.setValue(lastName);
    }

    setEmailAddress(emailAddress) {
        return this.emailAddress.setValue(emailAddress);
    }

    setComment(comment) {
        return this.comments.setValue(comment);
    }

    clickSubmitButton() {
        return this.submitButton.click();
    }


    submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments) {
        if (firstName) {
            this.firstName.setValue(firstName);
        }
        if (lastName) {
            this.lastName.setValue(lastName);
        }
        if (emailAddress) {
            this.emailAddress.setValue(emailAddress);
        }
        if (comments) {
            this.comments.setValue(comments);
        }
        this.submitButton.click();
        this.confirmSuccessfulSubmission()
    }

    confirmSuccessfulSubmission() {
        const successfulSubmissionHeader = '#contact_reply h1';
        const validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(successfulSubmissionHeader) === 'Thank You for your Message!';
        }, 3000);
        expect(validateSubmissionHeader, 'Successful Submission Message does not exist!').to.be.true;
    }

    confirmUnsuccessfulSubmission() {
        // let validateSubmissionHeader = browser.waitUntil(function () {
        //   return browser.getText(locators.unsuccessfulSubmissionSelector) === 'Error: all fields are required';
        // }, 3000);
        expect(this.unsuccessfulSubmissionHeader.getText()).to.include('Error: all fields are required');
    }
}

module.exports = new ContactUs_Page();