

describe('Verify whether Webdriveruniversity page links work correctly', () => {
    before (() => {
        browser.setViewportSize({
            width: 1200,
            height: 800
        });

    });

    after(() => {
        console.log('All the tests are finished');
    });

    beforeEach(() => {
        browser.url('/');
        console.log('redirected to the basic URL');
    });

    afterEach(() => {
        browser.close();
        console.log('closed the browser');
    });

    it('Check that the "Contact us" button opens the "Contact Us" page', () => {
        let title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        browser.click('#contact-us');
        browser.pause(1000);
        let tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[1]);
        title = browser.getTitle();
        title.should.equal("WebDriver | Contact Us");
        let url = browser.getUrl();
        url.should.equal("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        //browser.pause(1000);
    });

    it('Check that the "Login Portal" button opens the "Login Portal" page', () => {
       let title = browser.getTitle();
       title.should.equal('WebDriverUniversity.com');
       browser.click('#login-portal');
       browser.pause(1000);
       let tabIds = browser.getTabIds();
       console.log(tabIds);
       browser.switchTab(tabIds[1]);
       title = browser.getTitle();
       title.should.equal("WebDriver | Login Portal");
       let url = browser.getUrl();
       url.should.equal("http://www.webdriveruniversity.com/Login-Portal/index.html");

    });
});