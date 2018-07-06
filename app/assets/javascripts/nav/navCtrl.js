angular.module('flapperNews')
  .controller('NavCtrl', [
    '$scope',
    'Auth',
    function($scope, Auth) {
      $scope.signedIn = Auth.isAuthenticated;
      $scope.logout = Auth.logout;

      Auth.currentUser().then(function(user) {
        $scope.user = user;
      });

      $scope.$on('device:new-registration', function(e, user) {
        $scope.user - user;
      });

      $scope.$on('device:login', function(e, user) {
        $scope.user = user;
      });

      $scope.$on('device:logout', function(e, user) {
        $scope.user = {};
      })

    }
  ]);
