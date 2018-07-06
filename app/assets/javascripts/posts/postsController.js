angular.module('flapperNews')
  .controller('PostsController', [
    '$scope',
    //we no longer have need to inject $stateParams into our controller. We're still going to want to inject posts to gain access to the methods for manipulating comments, however.
    //'$stateParams',
    'posts',
    'post',
    //function($scope, $stateParams, posts) {
    function($scope, posts, post) {
      //$scope.post = posts.posts[$stateParams.id];
      // We can modify our controller to gain access to it like so:
      $scope.post = post;

      $scope.addComment = function() {
        if(!$scope.body || $scope.body === '') { return; }
        //$scope.post.comments.push({
        //  body: $scope.body,
        //  author: 'user',
        //  upvotes: 0
        //});
        posts.addComment(post.id, {
          body: $scope.body,
          author: 'user'
        }).then(function(response) {
          $scope.post.comments.push(response.data);
        });
        $scope.body = '';
      };

      $scope.incrementUpvotes = function(comment) {
        //comment.upvotes += 1;
        // Now use post from DB
        posts.upvoteComment(post, comment);
      };

      $scope.goBack = function() {
        window.history.back();
      };

    }
  ]);
