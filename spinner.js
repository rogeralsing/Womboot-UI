app.directive('spinner', function () {
    var opts = {
        lines: 13,
        length: 6,
        width: 7,
        radius: 19,
        corners: 1,
        rotate: 0,
        direction: 1,
        color: '#000',
        speed: 1,
        trail: 40,
        shadow: false,
        hwaccel: false,
        className: 'spinner',
        zIndex: 20000000000,
        top: 'auto',
        left: 'auto'
    };

    return {
        template: "<div style='width:100%;height:100%;padding-left:50%;padding-right:50%;padding-top:60px;padding-bottom:60px;background-color:#fff;border-radius:10px;'><x/></div>",
        replace: true,
        restrict: 'E',
        link: function (scope, element) {
            var x = element.find("x");
            var spinner = new Spinner(opts).spin();
            x.append(spinner.el);
        }
    };
});
//# sourceMappingURL=spinner.js.map
