window.app = angular.module('myApp', ['ngRoute'])
    .service('tokenService', lunch.TokenService)
    //WebServices
    .service('lunchWebService', lunch.LunchWebService)
//controllers
    .controller('lunchListController', lunch.LunchListController)
    .controller('signInController', lunch.SignInController)
    .controller('signUpController', lunch.SignUpController)
//directives
    .directive('calendar', lunch.calendarDirective);
