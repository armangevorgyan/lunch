window.app = angular.module('myApp', ['ngRoute'])
    .service('tokenService', lunch.TokenService)
    // web services
    .service('lunchWebService', lunch.LunchWebService)
    .service('foodOptionsWebService', lunch.FoodOptionsWebService)
    // controllers
    .controller('lunchListController', lunch.LunchListController)
    .controller('signInController', lunch.SignInController)
    .controller('signUpController', lunch.SignUpController)
    .controller('supplierController', lunch.SupplierController)
    .controller('supplierOptionsController', lunch.SupplierOptionsController)
    .controller('chooseController', lunch.ChooseController)
    // directives
    .directive('calendar', lunch.calendarDirective);
