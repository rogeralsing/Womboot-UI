app.directive('affix', [
    '$timeout',
    function ($timeout) {
        return {
            link: function (scope, element) {
                $timeout(function () {
                    element.affix({
                        offset: element.position()
                    });
                }, 100);
            }
        };
    }
]);
//# sourceMappingURL=Affix.js.map
