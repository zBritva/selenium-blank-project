describe('PowerApps Visual scenario tests', function() {

    let helpers = require('./hepers');
    let loginToPBIServices = helpers.loginToPBIServices;

    let dxtLogin = process.env.dxtLogin;
    let dxtPassword = process.env.dxtLogin;

    let msitLogin = process.env.msitLogin;
    let msitPassword = process.env.dxtLogin;

    let prodLogin = process.env.prodLogin;
    let prodPassword = process.env.dxtLogin;

    const dafaultExistTimeout = 60000,
    defaultPause = 3500,
    defaultTestTimeout = 4 * 60 * 1000,
    defaultElement = `div.visual`,
    defaultFrameElement = `svg`,
    iframeSandboxElement = `iframe.visual-sandbox`,
    pagePaginationElements = `.logoBar .navigation-wrapper > a`;

    const dxtURL = 'dxt';
    const msitURL = 'msit';
    const prodURL = 'app';

    const dxtReportId = "cbc52ba1-6cfc-4177-98a5-ed25e78a671f";
    const msitReportId = "c063a509-10bb-4645-99e5-1caed902b0f3";
    const prodReportId = "065e6c36-ec9b-446b-8cf3-6e57e052ebc5";

    // it('should have the right title - the fancy generator way', function() {
    //     browser.url('/');
    //     var title = browser.getTitle();
    //     console.log(dxtLogin);
    //     console.log(msitLogin);
    //     console.log(prodLogin);
    //     expect(title).toBe('This page can’t be displayed');
    // });

    const envParams = [
        {
            env: dxtURL,
            report: dxtReportId,
            login: dxtLogin,
            password: dxtPassword
        },
        // {
        //     env: msitURL,
        //     report: msitReportId,
        //     login: msitLogin,
        //     password: msitPassword
        // },
        // {
        //     env: prodURL,
        //     report: prodReportId,
        //     login: prodLogin,
        //     password: prodPassword
        // }
    ];

    browser.setViewportSize({
        width: 1380,
        height: 1024
    }, false, () => {});

    envParams.forEach(envParam => {
        const login = envParam.login;
        const password = envParam.password;
        // const loginURL: string = `https://${envParam.env}.powerbi.com/?noSignUpCheck=1`;
        const loginURL = 
            `https://powerbi.microsoft.com/en-us/landing/signin/?ru=https%3A%2F%2F${envParam.env}.powerbi.com%2F%3FnoSignUpCheck%3D1`;
        const reportURL = `https://${envParam.env}.powerbi.com/groups/me/reports/${envParam.report}/ReportSection`;

        describe(`environment ${envParam.env}`, () => {
            it("login", (done) => {
                
                // browser
                //     .timeouts("script", 60000)
                //     .timeouts("implicit", 60000)
                //     .timeouts("page load", 60000)
                //     .catch((ex) => {console.error(ex)});

                try {
                    loginToPBIServices(loginURL, login, password, dafaultExistTimeout)
                    browser.call(done)
                } catch (err) {
                    console.error(err.message);
                    if (debugMode) {
                        console.error(err.message);
                    }
                }

                done();
            }, defaultTestTimeout);

        });
    });

});