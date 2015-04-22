courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
    //   the method includes an argument we are plugging in (collection, id) = courses and id
    $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
    $scope.addStudent = function() {
        $scope.course.students.push({ name:$scope.studentName });
        $scope.studentName = null;
    }

});
