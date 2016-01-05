app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('project', {
        url: '/portfolio/projectName',
        controller: 'ProjectController',
        templateUrl: 'js/project/project.html'

    });

});

app.controller('ProjectController', function ($scope, ProjectFactory) {

    $scope.projects = ProjectFactory.projects;

});