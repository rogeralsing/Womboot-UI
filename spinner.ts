app.directive('spinner', function () {
    var opts = {
        lines: 13, // The number of lines to draw
        length: 6, // The length of each line
        width: 7, // The line thickness
        radius: 19, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 40, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 20000000000, // The z-index (defaults to 2000000000)
        top: 'auto', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
    };

    return {
        template: "<div style='width:100%;height:100%;padding-left:50%;padding-right:50%;padding-top:60px;padding-bottom:60px;background-color:#fff;border-radius:10px;'><x/></div>",
        replace: true,
        restrict: 'E',
        link: function (scope, element: JQuery) {
            var x = element.find("x");
            var spinner = new Spinner(opts).spin();
            x.append(spinner.el);
        }
    };
});

