app.directive('passwordStrength', [
    function () {
        return {
            replace: false,
            restrict: 'EACM',
            link: function (scope, element, attrs) {
                var strength = {
                    colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
                    mesureStrength: function (pass) {
                        var score = 0;
                        if (!pass)
                            return score;

                        // award every unique letter until 5 repetitions
                        var letters = new Object();
                        for (var i = 0; i < pass.length; i++) {
                            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
                            score += 5.0 / letters[pass[i]];
                        }

                        // bonus points for mixing it up
                        var variations = {
                            digits: /\d/.test(pass),
                            lower: /[a-z]/.test(pass),
                            upper: /[A-Z]/.test(pass),
                            nonWords: /\W/.test(pass)
                        };

                        var variationCount = 0;
                        for (var check in variations) {
                            variationCount += (variations[check] == true) ? 1 : 0;
                        }
                        score += (variationCount - 1) * 10;

                        return parseInt(score);
                    },
                    getColor: function (s) {
                        var idx = 0;
                        if (s <= 10) {
                            idx = 0;
                        } else if (s <= 20) {
                            idx = 1;
                        } else if (s <= 30) {
                            idx = 2;
                        } else if (s <= 40) {
                            idx = 3;
                        } else {
                            idx = 4;
                        }

                        return { idx: idx + 1, col: this.colors[idx] };
                    }
                };

                scope.$watch(attrs.passwordStrength, function (val) {
                    if (val === '') {
                        element.hide();
                    } else {
                        var s = strength.mesureStrength(val);
                        s = s / 80 * 40;
                        if (s > 50)
                            s = 50;
                        var c = strength.getColor(s);
                        element.show();
                        element.children('li').css({ "background": "#DDD" }).slice(0, c.idx).css({ "background": c.col });
                    }
                });
            },
            template: '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>'
        };
    }
]);
//# sourceMappingURL=PasswordStrength.js.map
