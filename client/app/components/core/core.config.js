angular.module('portfolio.core')

  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
  });
