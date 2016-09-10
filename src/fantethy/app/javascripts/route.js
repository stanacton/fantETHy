app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/games', {
            templateUrl: 'partials/games-list.html',
            controller: 'GamesListCtrl'
        })
        .when('/my-games', {
            templateUrl: 'partials/games-mine.html',
            controller: 'MyGamesCtrl'
        })
        .when('/games/:id', {
            templateUrl: 'partials/game-join.html',
            controller: 'GameJoinCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);