angular.module('portfolio.dash')

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'js/dash/dash.html',
            controller: 'DashCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
