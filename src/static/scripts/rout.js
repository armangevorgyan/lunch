app.config(function($routeProvider) {
    function navigateToSignIn($location, tokenService) {
        if(!tokenService.getToken()) {
            $location.path('/signin');
        }
    }

    $routeProvider
        .when('/', {
            templateUrl: 'views/pages/chooseLunch.html',
            controller: 'listController',
            resolve: {
                navigateToSignIn: navigateToSignIn
            }
        })
        .when('/signin', {
            templateUrl: 'views/pages/signIn.html',
            controller: 'signInController'
        })
        .when('/signup', {
            templateUrl: 'views/pages/signUp.html',
            controller: 'signUpCtrl'
        })
        .when('/setuplunch', {
            templateUrl: 'views/pages/setupLunch.html',
            controller: 'setupLunchController'
        })
        .otherwise({
            redirectTo: 'error'
        });
});
