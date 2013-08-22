app.directive('focus', [
    '$timeout',
    function ($timeout) {
        return {
            link: function (scope, element) {
                $timeout(function () {
                    element.focus();
                });
            }
        };
    }
]);
//# sourceMappingURL=Focus.js.map
