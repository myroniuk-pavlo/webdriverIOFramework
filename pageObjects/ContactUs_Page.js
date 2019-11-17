class ContactUs_Page {
    get firstName() { return $("[name='first_name']");}
    get lastName() { return $('//input[@name="last_name"]');}
    get emailAddress() { return $('//input[@name="email"]');}
    get comments() { return $('//textarea[@name="message"]');}
    get submitButton() { return $('//input[@type="submit"]');}
    get successfulSubmissionHeader() { return $('#contact_reply h1');}
    get unsuccessfulSubmissionHeader() { return $("body");}
    get successfulSubmissionHeaderText() {
        return this.successfulSubmissionHeader.getText();
    }
    get unsuccessfulSubmissionHeaderText() {
        return this.unsuccessfulSubmissionHeader.getText();
    }


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
    }
}

module.exports = new ContactUs_Page();