courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
    $scope.courses = CoursesFactory.courses;
    $scope.CoursesFactory = CoursesFactory;
    $scope.sayHi = function (message) {
        alert(message);
    };
    $scope.person = "erica";
});
