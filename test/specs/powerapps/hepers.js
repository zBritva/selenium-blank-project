module.exports = {
    loginToPBIServices: function (loginURL, login, password, dafaultExistTimeout) {
        browser.url(loginURL)
                
        browser.waitForExist ("a.button", dafaultExistTimeout)
        browser.click("a.button")
        browser.pause(1500)
        browser.waitForExist("input[name=loginfmt]", dafaultExistTimeout)

        browser.setValue("input[name=loginfmt]", login)
        browser.pause(500)
        browser.click("#idSIButton9")
        browser.waitForExist(".identityBanner", dafaultExistTimeout)
        browser.setValue('input[name=passwd]', password)
        browser.pause(500)
        browser.click("#idSIButton9")
        browser.waitForExist('button.optionTab.dashboard.label-med.selected', dafaultExistTimeout)
        console.log(`${loginURL}: logined to services`);
    },

    openReportWithPowerAppsVisual: function (reportURL, browserbrowser) {
        browser.url(reportURL)
        
        try{ 
            browser.alertAccept(()=>{});
        }
        catch(ex) {

        }
        
        browser.waitForExist("button.edit")
        browser.click("button.edit")
        console.log(`Report opened`);
    }
}