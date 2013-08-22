app.directive('sourcecode', function () {
    return {
        template: '<div class="highlight"><pre><code ng-transclude></code></pre></div>',
        transclude: true,
        replace:true,
        restrict: 'E',
        link: function (scope, element: JQuery) {
            var code = element.find('code');
            var text = code.text();
            text = text.trim();
            code.text(text);
            code.each((i, e) => hljs.highlightBlock(e));
        }
    };
});
