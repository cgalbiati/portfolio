app.directive('skill', function () {

    return {
        restrict: 'E',
        template: `<div class='no-padding'>{{skill.name}}</div>`,
        scope: {
        	skill: '=',
        },
        link: function (scope, element, attr) {
            scope.colClass = 'col-xs-'+scope.skill.numCols;
            // console.log('item', scope.colClass);
            element.addClass(scope.colClass);
            scope.colorClass = 'profic-'+scope.skill.cat;
            console.log('item', scope.colorClass);
            element.addClass(scope.colorClass);
        }
    };

});