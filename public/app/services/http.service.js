angular.module('bitcoinApp').service('httpService', ['$http', '$mdMedia', function ($http, $mdMedia) {


    var service = this;
    console.log('HTTP Service')

    service.screenIsExtraSmall = $mdMedia('xs');
    service.screenIsSmall = $mdMedia('sm');
    service.screenIsMedium = $mdMedia('md');
    service.screenIsLarge = $mdMedia('lg');


    service.getBitcoinQuote = function () {
        return $http.get('/api/quote').then(function (response) {
            return response.data;

        });
    }
    service.getTime = function () {
        return $http.get('/api/time').then(function (response) {
            return response.data;

        });
    }
    service.getYesterdaysBitcoinPrice = function () {
        return $http.get('/api/yesterday_price').then(function (response) {
            return response.data;

        });
    }
    service.getHistoricBitcoinPrice = function () {
        return $http.get('/api/historic_price').then(function (response) {
            return response.data;

        });
    }
    

}])