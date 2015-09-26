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
            controller: 'setupLunchController',
            controllerAs: 'main'
        })
        .when('/supplier', {
            templateUrl:'views/pages/supplier.html',
            controller: 'supplierController',
            controllerAs: 'main'
        })
        .when('/supplier/:type/:year/:month/:day', {
            templateUrl: 'views/pages/supplierOptions.html',
            controller: 'supplierOptionsController',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: 'error'
        });
});
