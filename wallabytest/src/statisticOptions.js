(function (module) {
    var statisticOptionsController = function ($timeout, $scope, $log) {
        var vm = this, timer;
        vm.dataField = $scope.options;
        vm.showAlert = false;
        if (!vm.dataField.statisticsOptions) {
            vm.dataField.statisticsOptions = 'none';
        }

        vm.onButtonClick = function () {
            vm.showAlert = true;
            $log.log('Clicked');
        }

        vm.restart = function () {
            if (!vm.showAlert) {
                vm.showAlert = true;
                showAlertRestartButton();
                timer = $timeout(function () {
                    vm.showAlert = false;
                    showDefaultRestartButton();
                }, 5000);
            } else {
                $timeout.cancel(timer);
                vm.showAlert = false;
                showDefaultRestartButton();
                vm.dataField.statisticsKey = null;
                $scope.saveCallback();
            }
        }

        var showDefaultRestartButton = function () {
            vm.restartButtonText = "Restart statistics";
            vm.restartButtonClass = "btn btn-block btn-default";
        }

        var showAlertRestartButton = function () {
            vm.restartButtonText = "I'm sure";
            vm.restartButtonClass = "btn btn-block btn-alert";
        }

        showDefaultRestartButton();
    }

    var pxStatisticOptions = function () {
        return {
            templateUrl: '/src/statisticOptionsTemplate.html',
            restrict: 'E',
            scope: {
                options: '=',
                saveCallback: '&',
                readonly: '=',
            },
            controller: ['$timeout', '$scope', '$log', statisticOptionsController],
            controllerAs: 'vm',
        };
    }

    module.directive('pxStatisticOptions', pxStatisticOptions);


}(angular.module('myproject.procedures')));