app.directive('tags', [ function () {
    return {
        restrict: 'E',
        link: function (scope, element : JQuery) {
            var text : string = element.text();
            var tags = text.split(",");
            var cleanTags = tags.map(tag => tag.trim().toLowerCase());
            var linkTags = cleanTags.map(tag => "<a href=''>" + tag + "</a>");
            var links = "<small>Tagged: " + linkTags.join(", ") + "</small>";
            var commaTags = cleanTags.join();
         //   page.addKeywords(commaTags);
            element.html(links);
        }
    };
}]);