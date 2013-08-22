app.directive('affix', ['$timeout', function ($timeout : ng.ITimeoutService) {
    return {
        link: function (scope, element) {         
            $timeout(function () {
                element.affix(
                    {
                        offset: element.position()
                    });
            }, 100);          
        }
    };
}]);