app.directive('viewTitle', function () {
    return {
        restrict: 'E',
        link: function ($scope, element) {
            var text = element.text();
            element.remove();
            $('html head title').text(text);
        }
    };
});
//# sourceMappingURL=ViewTitle.js.map
