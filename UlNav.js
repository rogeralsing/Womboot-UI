/*
this directive transforms an <ul> element into a nav,bs-sidenav where the selected item will get the "active" class
*/
app.directive('ulNav', [
    '$location',
    function (location) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var cls = 'active';
                if (attrs.ulNavClass) {
                    cls = attrs.ulNavClass;
                }
                var $ul = $(element);
                var tabMap = {};
                var lis = $ul.find("li");

                lis.each(function () {
                    var $li = $(this);
                    tabMap[$li.children('a').attr('href')] = $li;
                });

                scope.location = location;
                scope.$watch('location.path()', function (newPath) {
                    lis.removeClass(cls);
                    var $li = tabMap[newPath];
                    if ($li) {
                        $li.parents("ul li").addBack().addClass(cls);
                    }
                });
            }
        };
    }
]);
//# sourceMappingURL=UlNav.js.map
