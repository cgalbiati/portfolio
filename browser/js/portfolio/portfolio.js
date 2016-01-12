app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('portfolio', {
        url: '/portfolio',
        controller: 'PortfolioController',
        templateUrl: 'js/portfolio/portfolio.html'
    });

});

app.controller('PortfolioController', function ($scope, ProjectFactory) {

    $scope.projects = ProjectFactory.projects;
    $scope.clickedProj;
    $scope.chooseProj = function(proj){
    	$scope.clickedProj = proj;
    };

});





