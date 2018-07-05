angular.module('flapperNews')
  .factory('posts', [
    '$http',
    function($http) {
    var o = {
      posts: []
    };

    o.getAll = function() {
      // Deprecated up to Angular 1.6. Use .then(response) instead
      //return $http.get('/posts.json').success(function(data) {
      //  angular.copy(data, o.posts);
      //})
      return $http.get('/posts.json').then(function(response) {
        data = response.data;
        angular.copy(data, o.posts);
      })
    };

      o.create = function(post) {
        //return $http.post('/posts.json').success(function(data) {
        //  o.posts.push(data);
        //})

        return $http.post('/posts.json', post).then(function(response) {
          data = response.data;
          o.posts.push(data);
        })
      };

    return o;
  }]);
