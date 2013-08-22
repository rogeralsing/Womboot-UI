app.directive('focus', ['$timeout', function ($timeout : ng.ITimeoutService) {
    return {
        link: function (scope, element: JQuery) {
            $timeout(function () {
                element.focus();
            });
        }
    };
}]);