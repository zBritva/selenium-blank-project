describe('webdriver.io page', function() {

    let dxtLogin = process.env.dxtLogin;
    let dxtPassword = process.env.dxtLogin;

    let msitLogin = process.env.dxtLogin;
    let msitPassword = process.env.dxtLogin;

    let prodLogin = process.env.dxtLogin;
    let prodPassword = process.env.dxtLogin;

    it('should have the right title - the fancy generator way', function() {
        browser.url('/');
        var title = browser.getTitle();
        console.log(dxtLogin);
        console.log(msitLogin);
        console.log(prodLogin);
        expect(title).toBe('This page can’t be displayed');
    });

});