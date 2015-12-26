app.directive('navbar', function ($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'About Me', state: 'about' },
                { label: 'Portfolio', state: 'portfolio' },
                { label: 'Resume', state: 'resume' },
                { label: 'Blog', state: 'blog' },
                { label: 'Contact', state: 'contact' }
            ];

            

        }

    };

});
