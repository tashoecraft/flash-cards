var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function($http) {
  return {
    getFlashCards: function(category) {
      var queryParams = {};
      if (category) {
        queryParams.category = category;
      }
      return $http.get('/cards', {
        params: queryParams
      }).then(function(response) {
        return response.data;
      });
    }
  };
});

app.controller('StatsController', function($scope, ScoreFactory) {
  $scope.scores = ScoreFactory;
});

app.factory('ScoreFactory', function() {
  return {
    correct: 0,
    incorrect: 0
  };
});
