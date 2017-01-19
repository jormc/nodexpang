'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp') // make sure this is set to whatever it is in your client/scripts/app.js
	.controller('SignupCtrl', function ($scope, $http) { // note the added $http depedency
		
		console.log('Show the submit form');

		// This is our method that will post to our server.
		$scope.submit = function () {
			console.log('Submit form request');

			// make sure all fields are filled out...
			// aren't you glad you're not typing out
			// $scope.signup.user.firstname everytime now??
			if (
				!$scope.signup.user.firstname ||
				!$scope.signup.user.lastname ||
				!$scope.signup.user.email ||
				!$scope.signup.user.password1 ||
				!$scope.signup.user.password2
			) {
				alert('Please fill out all form fields.');
				return false;
			}

			// make sure the passwords match match
			if ($scope.signup.user.password1 !== $scope.signup.user.password2) {
				alert('Your passwords must match.');
				return false;
			}

			// Just so we can confirm that the bindings are working
			console.log($scope.signup.user);

			// Make the request to the server ... which doesn't exist just yet
			var request = $http.post('/signup', $scope.signup.user);

			// we'll come back to here and fill in more when ready
			request.success(function (data) {
		    // our json response is recognized as
		    // the data parameter here. See? Our msg
		    // value is right there!
		    console.log(data);
			});

			request.error(function (data) {
				console.log(data);
			});

		};
		
	});