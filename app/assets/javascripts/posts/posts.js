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

      o.upvote = function(post) {
        return $http.put('/posts/' + post.id + '/upvote.json').then(function(response) {
          post.upvotes += 1;
        })
      };

      o.get = function(id) {
        return $http.get('/posts/' + id + '.json').then(function(res) {
          return res.data;
        })
      };

      //------------- Comments ---------------//

      o.addComment = function(id, comment) {
        return $http.post('/posts/' + id + '/comments.json', comment);
      };

      o.upvoteComment = function(post, comment) {
        return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json').then(function(res) {
          comment.upvotes += 1;
        })
      };

    return o;
  }]);
