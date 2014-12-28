'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:stagebar
 * @description
 * # stagebar
 */
angular.module('testApp')
.directive('caStagebar', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/stagebar.html',
		scope: {
			availableStages: '=',
			currentStage: '=',
			baseIconClass: '@'
		},
		link: function postLink(scope, element, attrs) {
			scope.$watch('currentStage', function(nv, ov) {
				var stages = $('.stage');
				var done = false;
				
				for (var i = 0; i < stages.length; i++)
				{
					$(stages[i]).css('width', 100 / stages.length + '%');

					if (done)
					{
						$(stages[i]).removeClass('completed');
					}
					else
					{
						$(stages[i]).addClass('completed');
					}
					
					if (scope.availableStages[i].name === nv.name)
					{
						done = true;
					}
				}
			});
		}
	};
});
