app.directive('foot', function () {

    return {
        restrict: 'E',
        template: `<div class='clearfix'</div>
            <div class='text-center'>&copy 2015 Chandra Galbiati</div>
            <div class='clearfix'</div>`,
        
        // link: function (scope, element, attr) {
        //     scope.colClass = 'col-xs-'+scope.footer.numCols;
        //     // console.log('item', scope.colClass);
        //     element.addClass(scope.colClass);
        // }
    };

});