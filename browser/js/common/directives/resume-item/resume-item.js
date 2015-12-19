app.directive('resumeItem', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/resume-item/resume-item.html',
        scope: {
        	item: '=',
        },
        // link: function (scope) {
        //     console.log('item', scope.item)
        // }
    };

});