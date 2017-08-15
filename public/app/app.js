var app = angular.module('bitcoinApp', ['ui.router', 'ngMaterial', 'ngMessages', 'chart.js', 'countUpModule']).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $httpProvider, ChartJsProvider){


$httpProvider.defaults.headers.post['Content-Type'] = 'text/plain'; 

$mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('blue-grey')
    .dark();

    

$stateProvider.state('speedtest', {
                url: '/',
                views: {
                    
                    'speedtestview': {
                        templateUrl: "app/views/quote.view.html",
                        controller: 'QuoteController'
                    }
                }
            })
  $urlRouterProvider.otherwise('/');

});


