// emailer = require("nodemailer");
// import emailer from 'nodemailer'

app.config(function ($stateProvider) {

    // Register our *contact* state.
    $stateProvider.state('contact', {
        url: '/contact',
        controller: 'ContactController',
        templateUrl: 'js/contact/contact.html'
    });

});

app.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    $scope.showStatus = false;
    $scope.message;
    // function buildEmail(){
    //   return {
    //     from: $scope.contactMe.name.$viewValue + ' <' + $scope.contactMe.email.$viewValue + '>', 
    //     to: 'Chandra Galbiati <chandra.galbiati+contact@gmail.com>',
    //     subject: 'Email from Portfolio site',
    //     text: $scope.contactMe.name.$viewValue + ' at ' + $scope.contactMe.email.$viewValue + ' says ' + $scope.contactMe.messageText.$viewValue
    //   };
    // }
    

    // $scope.sendMail = () => {
    //   $http.post('/api/contact', buildEmail()).
    //             success(function(data, status, headers, config) {
    //                 // this callback will be called asynchronously
    //                 // when the response is available
    //                 $scope.showStatus = true;
    //                 $scope.status = 'Message sent: ' + data;
    //             }).
    //             error(function(data, status, headers, config) {
    //               $scope.showStatus = true;
    //               $scope.status = 'Error: ' + data;
    //                 // called asynchronously if an error occurs
    //                 // or server returns response with an error status.
    //             });


    // };

}]);





