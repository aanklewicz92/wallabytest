describe('NoTemplateUrl directive', function () {
    var $compile, $rootScope, element, $log;

    beforeEach(module('myproject.procedures'));
    beforeEach(inject(function (_$compile_, _$rootScope_, _$log_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $log = _$log_;
    }));

    beforeEach(function () {
        element = $compile('<px-no-template-url></px-no-template-url>')($rootScope);
        $rootScope.$digest();
    });

    beforeEach(function() {
        spyOn($log, 'log');
    });

    it('starts with false', function () {
        expect(element.isolateScope().vm.showAlert).toBe(false);
    });
})