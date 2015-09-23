(function (module) {
    var pxNoTemplateUrlController = function ($log, $scope) {
        var vm = this;
        vm.showAlert = false;
        vm.onButtonClick = function () {
            vm.showAlert = true;
            $log.log('Clicked test');
        }
    };

    var pxNoTemplateUrl = function () {
        return {
            restrict: 'E',
            scope: {
                callback: '&',
                msgTooltip: '=',
                isDisabled: '='
            },
            template: '<a ng-click="vm.onButtonClick()">Click</a>',
            controller: ['$log', '$scope', pxNoTemplateUrlController],
            controllerAs: 'vm',
            replace: true
        };
    }
    module.directive('pxNoTemplateUrl', pxNoTemplateUrl);
}(angular.module('myproject.procedures')));