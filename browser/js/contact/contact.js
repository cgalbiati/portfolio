app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('contact', {
        url: '/contact',
        controller: 'ContactController',
        templateUrl: 'js/contact/contact.html'
    });

});

app.controller('ContactController', function ($scope) {

    $scope.sendMail = () => {

    };

});





