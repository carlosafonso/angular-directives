'use strict';

/**
* @ngdoc function
* @name testApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the testApp
*/
angular.module('testApp')
.controller('MainCtrl', function ($scope) {
	$scope.stages = [
		{name: 'Go home', icon: 'glyphicon-home'},
		{name: 'Turn up volume', icon: 'glyphicon-signal'},
		{name: 'Press play', icon: 'glyphicon-play'},
		{name: 'Do a barrel roll', icon: 'glyphicon-repeat'},
	];

	$scope.currentStage = $scope.stages[0];
});
