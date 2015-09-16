var angularTemplatePreprocessor = require('wallaby-ng-html2js-preprocessor');
module.exports = function () {
    return {
        files: [
            "src/jquery-1.10.2.min.js",
            "src/angular.js",
            "src/angular-mocks.js",
            "src/app.js",
            "src/procedures.js",
            "src/statisticOptions.js"
        ],
        tests: [
            "tests/**/*.tests.js"
        ],
        preprocessors: {
            "**/*.html": function (file) {
                return angularTemplatePreprocessor.transform(file, {
                    // strip this from the file path
                    //stripPrefix: 'public/',
                    //stripSufix: '.ext',
                    // prepend this to the
                    //prependPrefix: 'served/',

                    // or define a custom transform function
                    //cacheIdFromPath: function(filepath) {
                    //    return cacheId;
                    //},

                    // setting this option will create only a single module that contains templates
                    // from all the files, so you can load them all with module('foo')
                    moduleName: 'templates'
                });
            }
        },
        testFramework: 'jasmine@2.2.1'
    };
};