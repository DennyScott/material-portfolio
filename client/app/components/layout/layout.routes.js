'use strict';

angular.module('portfolio.layout')

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'js/layout/layout.html'
      });
  });
