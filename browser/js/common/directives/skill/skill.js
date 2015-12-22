app.directive('skill', function () {

    return {
        restrict: 'E',
        template: `{{skill.name}}`,
        scope: {
        	skill: '=',
        },
        link: function (scope, element, attr) {
            scope.colClass = 'col-xs-'+scope.skill.numCols;
            // console.log('item', scope.colClass);
            element.addClass(scope.colClass);
        }
    };

});