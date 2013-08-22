app.directive('passwordMatch', [
    function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, control) {
                var thisPassword = attrs.ngModel;
                var thatPassword = attrs.matchPassword;
                var checker = function () {
                    var e1 = scope.$eval(thisPassword);
                    var e2 = scope.$eval(thatPassword);
                    return e1 == e2;
                };
                scope.$watch(checker, function (n, o) {
                    control.$setValidity("unique", n);
                });
            }
        };
    }
]);
//# sourceMappingURL=PasswordMatch.js.map
