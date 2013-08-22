app.directive('viewDescription', function () {
    return {
        restrict: 'E',
        link: function (scope, element) {
            var text = element.text();
            element.remove();
            $('html head meta[name=description]').attr("content", text);
        }
    };
});
//# sourceMappingURL=ViewDescription.js.map
