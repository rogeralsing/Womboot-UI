app.directive('imgSpinner', [
    "$compile",
    "$interpolate",
    function ($compile, $interpolate) {
        return {
            restrict: 'A',
            transclude: true,
            link: function (scope, element) {
                element.hide();

                var html = '<spinner/>';

                var spinner = angular.element(html);
                var linkFn = $compile(spinner);
                linkFn(scope);
                var src = element.attr('src');
                if (src == undefined)
                    src = element.attr('ng-src');

                var srcEval = $interpolate(src);
                spinner.insertAfter(element);

                var eval = function () {
                    return srcEval(scope);
                };

                scope.$watch(eval, function (newSrc) {
                    if (newSrc) {
                        spinner.show();
                        element.hide();
                    }
                });

                element.on('load', function (event) {
                    element.show();
                    spinner.hide();
                });
                spinner.hide();
            }
        };
    }
]);
//# sourceMappingURL=imgSpinner.js.map
