angular.module('bitcoinApp').controller('QuoteController', ['$scope', '$mdMedia', 'httpService', '$filter', function ($scope, $mdMedia, httpService, $filter) {

    $scope.test = 'This is test';


    $scope.httpService = httpService;

    $scope.bitcoin_price;

    var quotePromise = $scope.httpService.getBitcoinQuote();
    quotePromise.then(function (results) {
        console.log(results);
        $scope.bitcoin_price = results.data.amount;

    })

    var timePromise = $scope.httpService.getTime();
    timePromise.then(function(results){
        $scope.time = results.data.iso;
    })


}]);