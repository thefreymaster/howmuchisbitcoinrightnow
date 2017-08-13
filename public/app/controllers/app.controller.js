angular.module('bitcoinApp').controller('AppController', ['$scope', '$mdMedia', function($scope, $mdMedia){


        $scope.$mdMedia = $mdMedia;

        $scope.screenIsExtraSmall = $mdMedia('xs');
        $scope.screenIsSmall = $mdMedia('sm');
        $scope.screenIsMedium = $mdMedia('md');
        $scope.screenIsLarge = $mdMedia('lg');








}]);