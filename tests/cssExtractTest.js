describe('Test the WebdriverUniversity homepage', function () {
    it('Output the height of the homepage carousel', function () {
        browser.url('/');
        let divCarouselHeight = browser.getCssProperty('#udemy-promo-thumbnail', 'height');
        console.log(divCarouselHeight);
    });
});