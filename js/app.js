var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/projects.html',
            controller: 'projectsController'
        }).when('/project/:id', {
            templateUrl: 'partials/project.html',
            controller: 'projectsController'
        });
    }]);