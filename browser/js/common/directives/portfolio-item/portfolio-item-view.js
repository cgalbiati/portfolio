app.directive('portfolioItemView', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/portfolio-item/portfolio-item-view.html',
        scope: {
        	project: '=',
        },
        // link: function (scope) {
        //     console.log('project', scope.project)
        // }
    };

});