var app = angular.module('bitcoinApp', ['ui.router', 'ngMaterial', 'ngMessages', 'chart.js', 'countUpModule']).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $httpProvider, ChartJsProvider){


$httpProvider.defaults.headers.post['Content-Type'] = 'text/plain'; 

  // For example: raised button text will be black instead of white.
  var neonRedMap = $mdThemingProvider.extendPalette('red', {
    '500': '#ff0000',
    'contrastDefaultColor': 'dark'
  });

  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('neonRed', neonRedMap);

  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('neonRed')
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


