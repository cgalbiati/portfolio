app.directive('portfolioItem', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/portfolio-item/portfolio-item.html',
        scope: {
        	project: '=',
        },
        link: function (scope) {
            scope.show = false;
        }
    };

});