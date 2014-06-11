describe('dummy page', function() {

	beforeEach(function(){
		browser.driver.get('http://localhost/protractor-setup-test/index.html');
	});
	
	it('passes a dummy test', function() {
		expect(true).toBe(true);
	});

	it('should greet the user', function() {
		expect(hello).toBeDefined();
	});
});