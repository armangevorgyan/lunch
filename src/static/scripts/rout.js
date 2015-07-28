app.config(function($routeProvider) {
    function navigateToSignIn($location, tokenService) {
        if(!tokenService.getToken()) {
            $location.path('/signin');
        }
    }

    $routeProvider
        .when('/', {
            templateUrl: 'views/pages/chooseLunch.html',
            controller: 'listCtrl',
            resolve: {
                navigateToSignIn: navigateToSignIn
            }
        })
        .when('/signin', {
            templateUrl: 'views/pages/signin.html',
            controller: 'signInController'})
        .when('/signup', {
            templateUrl: 'views/pages/signup.html',
            controller: 'signUpCtrl'
        })
        .otherwise({
            redirectTo: 'error'
        });
});