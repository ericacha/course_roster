var courseRoster = angular.module('courseRoster', ['ui.router']);

    courseRoster.config(function($stateProvider) {
        $stateProvider.state('home', {
            url: "",
            templateUrl:"partials/home.html"
        });

        $stateProvider.state('courses', {
            url: "/courses",
            templateUrl:"partials/courses.detail.html",
            controller: 'CoursesCtrl'
        });

        $stateProvider.state('courses.students', {
            url: "/:courseId",
            templateUrl:"partials/courses.students.html",
            controller: 'StudentsCtrl'
        });

});

courseRoster.directive("welcomeText", function() {
    return {
        restrict: "E",
        template:"<div>Welcome!</div>"
    }
});
