describe('Statistic options directive', function () {
    var $compile, $rootScope, $timeout, $log, $httpBackend, element;

    beforeEach(module('myproject.procedures'));
    beforeEach(module('templates'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_, _$log_, _$httpBackend_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
        $log = _$log_;
        $httpBackend = _$httpBackend_;
        spyOn($log, 'log');
    }));

    beforeEach(function () {
        element = $compile('<px-statistic-options></px-statistic-options>')($rootScope);
        $rootScope.$digest();
    });

    it('should work', function () {
        var el = $compile('<px-statistic-options></px-statistic-options>')($rootScope);
        $rootScope.$digest();
        el.isolateScope().vm.onButtonClick();
        expect($log.log).toHaveBeenCalled();
        expect(el.isolateScope().vm.showAlert).toBe(true);
    });

    it('starts with hidden alert', function () {
        //arrange
        var a = element;

        //assert
        expect(a.isolateScope().vm.showAlert).toBe(false);
    });

    it('fires callback when clicked twice within 5 seconds', function () {
        //arrange
        var spy = jasmine.createSpy('myCallback');
        element.isolateScope().saveCallback = spy;
        var button = element.find('a');

        //act
        button.click();
        $timeout.flush(678); //move ahead 678 ms in time
        button.click();

        //assert
        expect(spy).toHaveBeenCalled();
    });

    it('doesn\'t fire callback when second click is after 5 seconds', function () {
        //arrange
        var spy = jasmine.createSpy('myCallback');
        element.isolateScope().callback = spy;

        //act
        element.click();
        $timeout.flush(5001); //move ahead 5001 ms in time
        element.click();

        //assert
        expect(spy).not.toHaveBeenCalled();
    });
})