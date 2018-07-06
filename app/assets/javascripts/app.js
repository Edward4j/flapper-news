angular.module('flapperNews', [
  // Include external module 'ui-router' as a dependency in our app:
  'ui.router',
  'templates',
  'Devise'
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
          controller: 'PostsController',
          resolve: {
            post: ['$stateParams', 'posts', function($stateParams, posts) {
              return posts.get($stateParams.id);
            }]
          }
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            })
          }]
        })
        .state('register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            })
          }]
        });

      $urlRouterProvider.otherwise('home');
    }
  ]);
