var courseRoster = angular.module('courseRoster', ['ui.router']);

    courseRoster.config(function($stateProvider) {
        $stateProvider.state('home', {
            url: "",
            templateUrl:"partials/home.html"
        });

        $stateProvider.state('courses', {
            url: "/courses",
            templateUrl:"partials/courses.html",
            controller: 'CoursesCtrl'
        });

        $stateProvider.state('courses.students', {
            url: "/:courseId",
            templateUrl:"partials/courses.students.html",
            controller: 'StudentsCtrl'
        });

});

//     courseRoster.directive("welcomeText", function() {
//         return {
//             restrict: "E",
//             template:"<div>Welcome!</div>"
//     }
// });

    courseRoster.directive("myFirstDirective", function() {
        return function(scope, element, attrs) {
            //console.log(scope);
            element.text(scope.message + " " + attrs.message);
    }

});

    courseRoster.directive("enter", function() {
        return function (scope, element, attrs) {
            element.bind("mouseenter", function() {
                // console.log("I like school");
                element.addClass(attrs.enter);
            });
        }
    });

    courseRoster.directive("leave", function() {
        return function (scope, element, attrs) {
            element.bind("mouseleave", function() {
                // console.log("I don't like school");
                element.removeClass(attrs.enter);
            });
        }
    });

    courseRoster.directive("welcomeText", function() {
            return {
                scope:{
                    display:"&"
                },
                template:'<input type="text" ng-model="value">' +
                    '<div class="button" ng-click="display({message:value})"> chitra</div>'
            }


    });

    courseRoster.directive("welcome", function() {
            return {
                scope:{
                    display:"="
                },
                template:'<input type="text" ng-model="display">'

            }


    });

    //part 1 of how it displays the name of the class with the last two lines 'link and scope.item'
    // courseRoster.directive("sampleCourse", function() {
    //         return {
    //             scope:{},
    //             template:'<div> {{ item }} </div>',
    //             link:function (scope, element, attrs) {
    //                 scope.item = attrs.item;
    //
    //             }
    //
    //         }
    //
    //
    // });

        // part 2 of how it can also display with just the '@' isolate scope.--courses.student.html
    courseRoster.directive("sampleCourse", function() {
            return {
                scope:{
                    // this '@' is the same as link:function (scope, element, attrs) { scope.item = attrs.item;
                    item:"@"
                },
                template:'<div> {{ item }} </div>',

            }

    });


    courseRoster.directive("debug", function($compile) {
            return {
                terminal: true,
                priority: 1000000,
                link: function (scope, element) {
                    var clone = element.clone();
                    element.attr("style", "color:red")
                    clone.removeAttr("debug");
                    var clonedElement = $compile(clone)(scope);
                    element.after(clonedElement);
                        }


            }

    });
