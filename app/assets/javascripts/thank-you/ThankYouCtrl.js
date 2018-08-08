angular.module('flapperNews')
  .controller('ThankYouCtrl', [
    '$scope',
    '$state',
    function($scope, $state) {
      $scope.test = 'Congrats!!!';
      //$scope.login = function() {
        //Auth.login($scope.user).then(function() {
          //$state.go('home');
        //})
      //};

    }
  ]);
