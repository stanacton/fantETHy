app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
        .when('/games/join/:id', {
            templateUrl: 'partials/game-join.html',
            controller: 'GameJoinCtrl'
        })
        .when('/game/create', {
            templateUrl: 'partials/game-create.html',
            controller: 'GameCreateCtrl'
        })
        .when('/game/:id/select-team', {
            templateUrl: 'partials/select-team.html',
            controller: 'SelectTeamCtrl'
        })
        .when('/game/:id', {
            templateUrl: 'partials/game.html',
            controller: 'GameCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });

   // $locationProvider.html5Mode(true);
}]);