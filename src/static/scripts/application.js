window.app = angular.module('myApp', ['ngRoute'])
    .service('tokenService', lunch.TokenService)
    // web services
    .service('lunchWebService', lunch.LunchWebService)
    // controllers
    .controller('lunchListController', lunch.LunchListController)
    .controller('signInController', lunch.SignInController)
    .controller('signUpController', lunch.SignUpController)
    .controller('chooseController', lunch.ChooseController)
    // directives
    .directive('calendar', lunch.calendarDirective);
