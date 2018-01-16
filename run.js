
var path = require('path')
var Launcher = require('webdriverio').Launcher;

let wdio = new Launcher(path.join('./wdio.conf.js'), {})
wdio.run().then(function (code) {
    process.exit(code);
}, function (error) {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
});