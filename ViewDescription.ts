app.directive('viewDescription', function () {
    return {
        restrict: 'E',
        link: function (scope, element: JQuery) {
            var text = element.text();
            element.remove();
            $('html head meta[name=description]').attr("content", text);
        }
    };
});
