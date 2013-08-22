app.directive('validate', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                var validator = function () {
                    return element.hasClass('ng-invalid');
                };
                scope.$watch(validator, function (n, o) {
                    var parent = element.parents('.form-group');
                    if (n)
                        parent.addClass('has-error');
else
                        parent.removeClass('has-error');
                });
            }
        };
    }
]);
//# sourceMappingURL=Validate.js.map
