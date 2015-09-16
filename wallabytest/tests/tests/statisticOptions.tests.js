describe('Statistic options directive', function () {
    var $compile, $rootScope, $timeout, element;
    beforeEach(module('templates'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
    }));

    beforeEach(function () {
        element = $compile('<px-statistic-options save-callback="saveCallback"></px-statistic-options>')($rootScope);
    });

    it('starts with hidden alert', function () {
        //arrange
        var a = element;

        //assert
        expect(a.isolateScope().vm.showAlert).toBe(false);
    });

    it('fires callback when clicked twice within 5 seconds', function () {
        //arrange



        //a.isolateScope().saveCallback = spy;

        //act
        element.click();
        $timeout.flush(678); //move ahead 678 ms in time
        element.click();

        //assert
        expect($rootScope.saveCallback).toHaveBeenCalled();
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