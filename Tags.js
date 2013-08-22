app.directive('tags', [
    function () {
        return {
            restrict: 'E',
            link: function (scope, element) {
                var text = element.text();
                var tags = text.split(",");
                var cleanTags = tags.map(function (tag) {
                    return tag.trim().toLowerCase();
                });
                var linkTags = cleanTags.map(function (tag) {
                    return "<a href=''>" + tag + "</a>";
                });
                var links = "<small>Tagged: " + linkTags.join(", ") + "</small>";
                var commaTags = cleanTags.join();

                //   page.addKeywords(commaTags);
                element.html(links);
            }
        };
    }
]);
//# sourceMappingURL=Tags.js.map
