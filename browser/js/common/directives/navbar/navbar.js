app.directive('navbar', function ($rootScope, $state, $anchorScroll, $location) {

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
            // scope.scrollItems = [
            //     // { label: 'Home', id: 'home' },
            //     { label: 'Portfolio', id: 'portfolio' },
            //     { label: 'About Me', id: 'about' },
            //     // { label: 'Resume', id: 'resume' },
            //     // { label: 'Blog', id: 'blog' },
            //     { label: 'Contact', id: 'contact' }
            // ];

            // scope.scrollTo = function(id) {
            //     var old = $location.hash();
            //     $location.hash(id);
            //     $anchorScroll();
            //     //reset to old to keep any additional routing logic from kicking in
            //     $location.hash(old);
            // };

            

        }

    };

});
