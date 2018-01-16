describe('webdriver.io page', function() {

    it('should have the right title - the fancy generator way', function() {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).toBe('This page can’t be displayed');
    });

});