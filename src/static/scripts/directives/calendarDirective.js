lunch.calendarDirective = function () {
    function link(scope, element, attrs) {
        scope.endDate = (new Date(scope.startDate));
        scope.endDate.setDate(scope.endDate.getDate() + 4);
        scope.nextWeek = function() {
            scope.startDate.setDate(scope.startDate.getDate() + 7);
            scope.endDate.setDate(scope.endDate.getDate() + 7);
            scope.onChange();
        } ;
        scope.prevWeek = function() {
            scope.startDate.setDate(scope.startDate.getDate() -7);
            scope.endDate.setDate(scope.endDate.getDate() -7);
            scope.onChange();
        }
    }
    return {
        restrict: 'E',
        templateUrl: 'views/directives/calendar.html',
        scope: {
            startDate: '=',
            onChange: '&'
        },
        link: link
    };
};
