var angularTemplatePreprocessor = require('wallaby-ng-html2js-preprocessor');
module.exports = function () {
    return {
        files: [
            { pattern: "src/jquery-1.10.2.min.js", instrument: false },
            { pattern: "src/angular.js", instrument: false },
            { pattern: "src/angular-mocks.js", instrument: false },
            "src/app.js",
            "src/procedures.js",
            "src/statisticOptions.js",
            "src/noTemplateUrl.js",
            { pattern: "**/*.html", instrument: false }
        ],
        tests: [
            "tests/**/*.tests.js"
        ],
        preprocessors: {
            "**/*.html": function (file) {
                return angularTemplatePreprocessor.transform(file, {
                    stripPrefix: 'src/',
                    moduleName: 'templates'
                });
            }
        },
        testFramework: 'jasmine@2.2.1'
    };
};