beforeEach(function(){
	browser.url("/Accordion/index.html");
});

const locators = {
	loadingButton: '#hidden-text',

};

describe('Verify that the correct text appears on the accordion page', function() {
	it('Verify loading complete text is visible after a set duration of time', function() {
		this.timeout(20000);
		browser.waitUntil( () => {
			return browser.getText(locators.loadingButton) === 'LOADING COMPLETE.'
		}, 12000, 'Timeout is out', 200);
	});
});