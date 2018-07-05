angular.module('flapperNews', [
  // Include external module 'ui-router' as a dependency in our app:
  'ui.router',
  'templates'
])
  // Create the config block for our app and configure a home state using $stateProvider and $urlRouterProvider. Use otherwise() to redirect unspecified routes.
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',

          // Use the resolve property of ui-router to ensure posts are loaded:
          resolve: {
            postPromise: ['posts', function(posts) {
              return posts.getAll();
            }]}
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: 'posts/_posts.html',
          controller: 'PostsController'
        });

      $urlRouterProvider.otherwise('home');
    }
  ]);
