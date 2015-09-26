app.config(function($routeProvider) {
    function navigateToSignIn($location, tokenService) {
        if(!tokenService.getToken()) {
            $location.path('/signin');
        }
    }

    $routeProvider
        .when('/', {
            templateUrl: 'views/pages/lunchList.html',
            controller: 'lunchListController',
            controllerAs: 'main',
            resolve: {
                navigateToSignIn: navigateToSignIn
            }
        })
        .when('/choose/:type/:year/:month/:day/', {
            templateUrl: 'views/pages/choose.html',
            controller: 'chooseController',
            controllerAs: 'main',
            resolve: {
                navigateToSignIn: navigateToSignIn
            }
        })
        .when('/signin', {
            templateUrl: 'views/pages/signIn.html',
            controller: 'signInController',
            controllerAs: 'main'
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
